export const EventSoon = ({ imgApi, title, imgSTXVeryLarge }) => {

  return (
    <>
      <figure className="relative max-w-sm cursor-default border rounded-lg border-gray-300">
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
        </div>
        <button
          type="button"
          className="z-10 absolute -right-0 -top-4 text-white bg-gray-600 cursor-default rounded text-xs 2xl:text-sm px-2 py-1 lg:py-1.5 text-center mr-2 mb-2"
        >
          Próximamente
        </button>
        <figcaption className="rounded-lg opacity-0 hover:opacity-100 transition duration-500 ease-in-out h-full bg-gradient-to-t hover:from-[rgb(0,0,0)] hover:to-[rgba(30,16,3,0.13)] hover:bg-gradient-to-t absolute bottom-0 right-0 left-0 top-0">
            <p className="flex items-end justify-center text-xs 2xl:text-sm uppercase  text-white h-full p-5 font-bold hover:transition-colors duration-500 ease-in-out hover:text-white">
              {title}
            </p>
          </figcaption>
      </figure>
    </>
  );
};
