import ReactGA from "react-ga4";
import TagManager from "react-gtm-module";
import { useContext, useEffect } from "react";
import { EventosContext } from "./context/EventosProvider";
import { AppRouter } from "./router/AppRouter";
import { getEnvVariables } from "./helpers"; 

import "animate.css";

const { VITE_GA } = getEnvVariables();
const TagManagerArgs = {
	gtmId: 'GTM-WFJN4M5G',
};

function App() {
  const { dataInfoGeneral } = useContext(EventosContext);

  // console.log({dataInfoGeneral})

  useEffect(() => {
		TagManager.initialize(TagManagerArgs);
	}, []);
  
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
      <AppRouter />
    </>
  );
}

export default App;
