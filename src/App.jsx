import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import { useContext, useEffect } from "react";
import { EventosContext } from "./context/EventosProvider";
import { AppRouter } from "./router/AppRouter";
import { getEnvVariables } from "./helpers";
import { Helmet, HelmetProvider } from "react-helmet-async";

import "animate.css";

const { VITE_GA } = getEnvVariables();

// link href css externo
const siteCssLink = document.getElementById("siteCss");
// title del site
const titleSite = document.getElementById("title");
//meta description
const metaDescriptionSite = document.getElementById("description");
//meta tags
const metaTagsSite = document.getElementById("tags");
//favicon
const faviconSite = document.getElementById("favicon");

function App() {
  const { dataInfoGeneral } = useContext(EventosContext);

  // useEffect(() => {
  //   if (dataInfoGeneral.length !== 0) {
  //     siteCssLink.href = dataInfoGeneral.headCss;
  //     titleSite.textContent = dataInfoGeneral.headTitle;
  //     metaDescriptionSite.content = dataInfoGeneral.headDescription;
  //     metaTagsSite.content = dataInfoGeneral.headTag;
  //     faviconSite.href = dataInfoGeneral.favicon;
  //   }
  // }, [dataInfoGeneral]);

  // console.log({dataInfoGeneral})

  useEffect(() => {
    if (dataInfoGeneral.length !== 0) {
      TagManager.initialize({ gtmId: dataInfoGeneral.tagManager });
    }
  }, [dataInfoGeneral]);

  useEffect(() => {
    ReactGA.initialize(VITE_GA);
    ReactGA.send({
      hitType: "pageview",
      page: document.location.pathname,
      title: "Home Page",
    });
  }, []);

  if (dataInfoGeneral.length === 0) return <span></span>;

  return (
    <>
      <HelmetProvider>
        <Helmet>
        <meta property="og:title" content="Titulo" />
        <meta property="og:description" content="Descripción" />
        </Helmet>
      </HelmetProvider>
      <AppRouter />
    </>
  );
}

export default App;
