// import { useContext, useEffect, useState } from "react";
// import { EventosContext } from "../context/EventosProvider";
// import { ImagenHistoria, Spinner } from "../components";
// import DOMPurify from "dompurify";

// import "../css/historia.css";

// export const Historia = () => {
//   const { dataInfoGeneral } = useContext(EventosContext);
//   const [state, setstate] = useState(false);
//   // console.log({dataInfoGeneral})

//   useEffect(() => {
//     setTimeout(() => {
//       window.scrollTo(0, 0);
//     }, 100);
//   }, []);

//   if (dataInfoGeneral.length === 0) return <Spinner />;

//   return (
//     <>
//       <div className="container">
//         {/* <div
//           id="accordion-flush"
//           data-accordion="collapse"
//           data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
//           data-inactive-classes="text-gray-500 dark:text-gray-400"
//         >
//           <h2 id="accordion-flush-heading-1">
//             <button
//               type="button"
//               className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
//               data-accordion-target="#accordion-flush-body-1"
//               aria-expanded="true"
//               aria-controls="accordion-flush-body-1"
//               onClick={ ()=> setstate(!state) }
//             >
//               <span>What is Flowbite?</span>
//               <svg
//                 data-accordion-icon
//                 className="w-6 h-6 rotate-180 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </h2>
//           <div
//             id="accordion-flush-body-1"
//             className={ state ? "" : "hidden" }
//             aria-labelledby="accordion-flush-heading-1"
//           >
//             <div className="py-5 border-b border-gray-200 dark:border-gray-700">
//               <p className="mb-2 text-gray-500 dark:text-gray-400">
//                 Flowbite is an open-source library of interactive components
//                 built on top of Tailwind CSS including buttons, dropdowns,
//                 modals, navbars, and more.
//               </p>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Check out this guide to learn how to{" "}
//                 <a
//                   href="/docs/getting-started/introduction/"
//                   className="text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   get started
//                 </a>{" "}
//                 and start developing websites even faster with components on top
//                 of Tailwind CSS.
//               </p>
//             </div>
//           </div>
//           <h2 id="accordion-flush-heading-2">
//             <button
//               type="button"
//               className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
//               data-accordion-target="#accordion-flush-body-2"
//               aria-expanded="false"
//               aria-controls="accordion-flush-body-2"
//             >
//               <span>Is there a Figma file available?</span>
//               <svg
//                 data-accordion-icon
//                 className="w-6 h-6 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </h2>
//           <div
//             id="accordion-flush-body-2"
//             className="hidden"
//             aria-labelledby="accordion-flush-heading-2"
//           >
//             <div className="py-5 border-b border-gray-200 dark:border-gray-700">
//               <p className="mb-2 text-gray-500 dark:text-gray-400">
//                 Flowbite is first conceptualized and designed using the Figma
//                 software so everything you see in the library has a design
//                 equivalent in our Figma file.
//               </p>
//               <p className="text-gray-500 dark:text-gray-400">
//                 Check out the{" "}
//                 <a
//                   href="https://flowbite.com/figma/"
//                   className="text-blue-600 dark:text-blue-500 hover:underline"
//                 >
//                   Figma design system
//                 </a>{" "}
//                 based on the utility classes from Tailwind CSS and components
//                 from Flowbite.
//               </p>
//             </div>
//           </div>
//           <h2 id="accordion-flush-heading-3">
//             <button
//               type="button"
//               className="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
//               data-accordion-target="#accordion-flush-body-3"
//               aria-expanded="false"
//               aria-controls="accordion-flush-body-3"
//             >
//               <span>
//                 What are the differences between Flowbite and Tailwind UI?
//               </span>
//               <svg
//                 data-accordion-icon
//                 className="w-6 h-6 shrink-0"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fill-rule="evenodd"
//                   d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//                   clip-rule="evenodd"
//                 ></path>
//               </svg>
//             </button>
//           </h2>
//           <div
//             id="accordion-flush-body-3"
//             className="hidden"
//             aria-labelledby="accordion-flush-heading-3"
//           >
//             <div className="py-5 border-b border-gray-200 dark:border-gray-700">
//               <p className="mb-2 text-gray-500 dark:text-gray-400">
//                 The main difference is that the core components from Flowbite
//                 are open source under the MIT license, whereas Tailwind UI is a
//                 paid product. Another difference is that Flowbite relies on
//                 smaller and standalone components, whereas Tailwind UI offers
//                 sections of pages.
//               </p>
//               <p className="mb-2 text-gray-500 dark:text-gray-400">
//                 However, we actually recommend using both Flowbite, Flowbite
//                 Pro, and even Tailwind UI as there is no technical reason
//                 stopping you from using the best of two worlds.
//               </p>
//               <p className="mb-2 text-gray-500 dark:text-gray-400">
//                 Learn more about these technologies:
//               </p>
//               <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
//                 <li>
//                   <a
//                     href="https://flowbite.com/pro/"
//                     className="text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Flowbite Pro
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="https://tailwindui.com/"
//                     rel="nofollow"
//                     className="text-blue-600 dark:text-blue-500 hover:underline"
//                   >
//                     Tailwind UI
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div> */}

//         <div className="row">
//           <div className="col-12 text-center mt-3 ">
//             <h2
//               style={{ fontSize: "30px" }}
//               className="my-3  tittle-h2"
//             >
//               {dataInfoGeneral?.pages[2].title}
//             </h2>
//           </div>

//           <div className="col-12">
//             <p
//               className="parrafo-historia"
//               dangerouslySetInnerHTML={{
//                 __html: DOMPurify.sanitize(dataInfoGeneral?.pages[2].text),
//               }}
//             ></p>
//           </div>

//           {dataInfoGeneral.pages[2].images &&
//             dataInfoGeneral.pages[2].images[0].image !== "" && (
//               <>
//                 <div className="col-12 text-center mt-3 ">
//                   <h2
//                     style={{ fontSize: "30px" }}
//                     className="my-3 animate__fadeIn animate__delay-1s tittle-h2"
//                   >
//                     Galería
//                   </h2>
//                 </div>

//                 <div
//                   className="container"
//                   style={{ textAlign: "center", padding: "20px" }}
//                 >
//                   <div className="row">
//                     {dataInfoGeneral?.pages[2].images.map((item) => (
//                       <ImagenHistoria src={item.image} key={item.id} />
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
//         </div>
//       </div>
//     </>
//   );
// };
import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { ImagenHistoria, Spinner } from "../components";
import DOMPurify from "dompurify";

export const Historia = () => {
  const { dataInfoGeneral } = useContext(EventosContext);
  const [showMoreText, setShowMoreText] = useState(false);
  const [showMoreImages, setShowMoreImages] = useState(false);
  const maxWordsMobile = 200;
  const maxWordsDesktop = 350;
  const maxImagesToShowMobile = 4;
  const maxImagesToShowTablet = 6;
  const maxImagesToShowDesktop = 8;
  const imagesPerRowMobile = 2;
  const imagesPerRowTablet = 3;
  const imagesPerRowDesktop = 4;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  }, []);

  if (dataInfoGeneral.length === 0) return <Spinner />;

  const toggleShowMoreText = () => {
    setShowMoreText(!showMoreText);
  };

  const toggleShowMoreImages = () => {
    setShowMoreImages(!showMoreImages);
  };

  const toggleButtonTextText = showMoreText ? "Leer menos" : "Leer más";
  const toggleButtonTextImages = showMoreImages ? "Ver menos" : "Ver más";

  const renderText = () => {
    const text = dataInfoGeneral?.pages[2].text;
    if (text) {
      const words = text.split(" ");

      let maxWords = maxWordsMobile;
      if (window.innerWidth >= 1024) {
        maxWords = maxWordsDesktop;
      }

      if (words.length < maxWords) {
        return null;
      }

      const truncatedText = showMoreText
        ? words.join(" ")
        : words.slice(0, maxWords).join(" ");

      return (
        <>
          <p
            className="parrafo-historia"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(truncatedText) }}
          ></p>
          {words.length > maxWords && (
            <button className="text-blue-500" onClick={toggleShowMoreText}>
              {toggleButtonTextText}
            </button>
          )}
        </>
      );
    }
    return null;
  };

  const renderImages = () => {
    const images = dataInfoGeneral.pages[2].images;
    if (images && images.length > 0) {
      let maxImagesToShow = maxImagesToShowMobile;
      let imagesPerRow = imagesPerRowMobile;

      if (window.innerWidth >= 768) {
        maxImagesToShow = maxImagesToShowTablet;
        imagesPerRow = imagesPerRowTablet;
      }

      if (window.innerWidth >= 1024) {
        maxImagesToShow = maxImagesToShowDesktop;
        imagesPerRow = imagesPerRowDesktop;
      }

      const displayedImages = showMoreImages
        ? images
        : images.slice(0, maxImagesToShow);

      const rows = Math.ceil(displayedImages.length / imagesPerRow);

      return (
        <>
          {displayedImages.length > 0 && (
            <>
              <div className={`grid grid-cols-${imagesPerRow} gap-4`}>
                {displayedImages.map((item) => {
                  if (item.alt !== "teatro gran rex") {
                    return <ImagenHistoria
                      src={item.image}
                      key={item.id}
                      alt={item.alt}
                    />;
                  }
                })}
              </div>
              {images.length > maxImagesToShow && (
                <div className="flex justify-center mt-4">
                  <button
                    className={`text-[${dataInfoGeneral.colorButton}] text-white font-semibold bg-[${dataInfoGeneral.backgroundButton}] hover:bg-[#5c452c] hover:border[${dataInfoGeneral.colorHoverButton}] font-medium rounded-3xl text-sm px-4 py-2`}
                    onClick={toggleShowMoreImages}
                  >
                    {toggleButtonTextImages}
                  </button>
                </div>
              )}
            </>
          )}
        </>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto mb-5 lg:px-0">
      <section
        style={{
          backgroundImage: `url(${dataInfoGeneral.pages[2].images[10].image})`,
        }}
        className="bg-no-repeat bg-cover bg-center container mx-auto"
      >
        <h2
          style={{ height: "40vh" }}
          className="text-3xl flex lg:justify-start justify-center items-center lg:items-end text-white p-10 my-3 tittle-h2"
        >
          {dataInfoGeneral.pages[2].title}
        </h2>
      </section>
      <div className="row">
        <div className="col-12 px-4 lg:px-0">
          <div className="flex flex-wrap">
            <div className="w-full">{renderText()}</div>
            <div className="w-full">{renderImages()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
