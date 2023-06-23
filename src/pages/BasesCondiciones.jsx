// import { useContext, useEffect } from "react";
// import { EventosContext } from "../context/EventosProvider";
// import { Spinner } from "../components";

// import DOMPurify from "dompurify";

// export const BasesCondiciones = () => {
//   const { dataInfoGeneral } = useContext(EventosContext);

//   useEffect(() => {
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);
//   }, []);

//   if (dataInfoGeneral.length === 0) return <Spinner />;
  
//   return (
//     <div className="container">
//       <div className="row animate__animated animate__fadeIn animate__fast	">
//         <div className="col-12 text-center my-4">
//           <h2
//             style={{ fontSize: "30px" }}
//             className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
//           >
//             {dataInfoGeneral.pages[4].title}
//           </h2>
//         </div>

//         <div className="col-12 mb-4">
//           <p
//             className="parrafo-historia"
//             dangerouslySetInnerHTML={{
//               __html: DOMPurify.sanitize(dataInfoGeneral.pages[4].text),
//             }}
//           ></p>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useContext, useEffect } from "react";
import { LoadingVacio } from "../components";
import { EventosContext } from "../context/EventosProvider";
import DOMPurify from "dompurify";

export const BasesCondiciones = () => {
  const { dataInfoGeneral } = useContext(EventosContext);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) return <LoadingVacio />;

  return (
    <div className="container mx-auto mb-5 ">
      <section
        style={{ backgroundImage: `url(${dataInfoGeneral.backgroundImage})` }}
        className="bg-no-repeat bg-cover bg-center container mx-auto"
      >
        <h2
          style={{ height: "40vh" }}
          className="text-3xl flex items-center lg:justify-start justify-center lg:items-end text-white p-10 my-3 tittle-h2"
        >
          {dataInfoGeneral.pages[4].title}
        </h2>
      </section>

      <div className="row">
      

        <div className="col-12 mb-4 px-4 lg:px-0">
          <div
            className="parrafo-historia text-sm text-gray-500"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(dataInfoGeneral.pages[4].text),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

