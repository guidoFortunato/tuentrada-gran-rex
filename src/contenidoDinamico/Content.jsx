import { useContext, useEffect } from "react";
import { EventosContext } from "../context/EventosProvider";

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

export const Content = () => {
  
  const { dataInfoGeneral } = useContext(EventosContext);


  useEffect(() => {
    if (dataInfoGeneral.length !== 0) {
      siteCssLink.href = dataInfoGeneral.headCss;
      titleSite.textContent = dataInfoGeneral.headTitle;
      metaDescriptionSite.content = dataInfoGeneral.headDescription;
      metaTagsSite.content = dataInfoGeneral.headTag;
      faviconSite.href = dataInfoGeneral.favicon;
    }
  }, [dataInfoGeneral]);
  return (
    <></>
  )
}