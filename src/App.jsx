import { useContext } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { AppRouter } from "./router/AppRouter";
import { ErrorRouter } from "./router/ErrorRouter";
import { EventosContext } from "./context/EventosProvider";

import "animate.css";
import { useEffect } from "react";

function App() {
  const { dataInfoGeneral } = useContext(EventosContext);

  // console.log({ dataInfoGeneral });

  if (dataInfoGeneral === null) {
    return <ErrorRouter />;
  }
  if (dataInfoGeneral.length === 0) return <span></span>;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <link rel="icon" type="image" href={dataInfoGeneral.favicon} />
          <meta name="keywords" content={dataInfoGeneral.headTag} />
          <meta name="description" content={dataInfoGeneral.headDescription} />
          <link
            rel="stylesheet"
            href={dataInfoGeneral.headCss}
            type="text/css"
          />
          <title>{dataInfoGeneral.headTitle}</title>
        </Helmet>
      </HelmetProvider>
      <AppRouter />
    </>
  );
}

export default App;
