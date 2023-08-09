export const EventNotAvailable = ({
  imgApi,
  title,
  imgSTXLarge,
  imgSTXVeryLarge,
}) => {
  return (
    <>
      <figure className="relative max-w-sm cursor-default">
        <div>
          {imgApi ? (
            <img
              className="rounded-lg md:rounded-none opacity-40"
              src={imgApi}
              alt={title}
            />
          ) : (
            <img
              className="rounded-lg md:rounded-none opacity-40"
              src={imgSTXVeryLarge}
              alt={title}
            />
          )}
          {/* <img
            className="rounded-lg md:rounded-none opacity-40"
            src={imgApi}
            alt={title}
          /> */}
        </div>
        <button
          type="button"
          className="z-10 absolute -right-0 -top-4 text-white bg-gray-600 cursor-default rounded text-xs px-2 py-1 lg:py-1.5 text-center mr-2 mb-2"
        >
          No disponible
        </button>
        <figcaption className=" opacity-0 hover:opacity-100 transition duration-500 ease-in-out h-full bg-gradient-to-t hover:from-[rgba(15,15,15,0.89)] hover:to-[rgba(173,170,167,0.15)] hover:bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
          <p className="flex items-end text-lg text-white h-full p-5 font-bold hover:transition-colors duration-500 ease-in-out hover:text-white">
            {title}
          </p>
        </figcaption>
      </figure>
    </>
  );
};
