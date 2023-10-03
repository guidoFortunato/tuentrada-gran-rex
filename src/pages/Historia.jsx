import { useContext, useEffect, useState } from "react";
import { EventosContext } from "../context/EventosProvider";
import { ImagenHistoria, Spinner } from "../components";
import DOMPurify from "dompurify";
import { HeaderPages } from "../components/pages";

export const Historia = () => {
  const { dataInfoGeneral, handleButtonsCollapse: handleNavBarCollapse } =
    useContext(EventosContext);
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

  const src = dataInfoGeneral?.pages[2]?.image?.src
    ? dataInfoGeneral?.pages[2]?.image?.src
    : undefined;

  const srcset = dataInfoGeneral?.pages[2]?.image?.srcset
    ? dataInfoGeneral?.pages[2]?.image?.srcset
    : undefined;

  const alt = dataInfoGeneral?.pages[2]?.image?.alt
    ? dataInfoGeneral?.pages[2]?.image?.alt
    : undefined;

  const title = dataInfoGeneral?.pages[2]?.title;

  useEffect(() => {
    handleNavBarCollapse();
  }, []);

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

      const truncatedText = showMoreText
        ? words.join(" ")
        : words.slice(0, maxWords).join(" ");

      return (
        <>
          <p
            className="parrafo-historia  text-sm text-gray-700"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(truncatedText),
            }}
          ></p>
          {words.length > maxWords && (
            <button
              style={{ color: dataInfoGeneral.colorHoverLi }}
              onClick={toggleShowMoreText}
            >
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
                {displayedImages.map((item) => (
                  <ImagenHistoria
                    src={item.image.src}
                    key={item.id}
                    alt={item.image.alt}
                  />
                ))}
              </div>
              {images.length > maxImagesToShow && (
                <div className="flex justify-center mt-4">
                  <button
                    className={` font-medium right-2.5 bottom-2.5 rounded text-sm px-4 py-2`}
                    onClick={toggleShowMoreImages}
                    style={{
                      color: dataInfoGeneral.colorButton,
                      backgroundColor: dataInfoGeneral.backgroundButton,
                    }}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor =
                        dataInfoGeneral.colorHoverButton; // Cambiar al color de hover
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor =
                        dataInfoGeneral.backgroundButton; // Restaurar el color original
                    }}
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
      <HeaderPages src={src} srcSet={srcset} alt={alt} title={title} />
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
