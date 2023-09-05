export const EventSoon = ({ imgApi, title, imgSTXVeryLarge }) => {
  return (
    <>
      <figure className="relative max-w-sm cursor-default ">
        <div className="overflow-hidden rounded-lg border  border-gray-300">
          <div className="  rounded-lg   hover:scale-105 transition-all ease-in-out duration-500">
            <div>
              {imgApi ? (
                <img
                  className="rounded-lg opacity-40"
                  src={imgApi}
                  alt={title}
                />
              ) : (
                <img
                  className="rounded-lg opacity-40"
                  src={imgSTXVeryLarge}
                  alt={title}
                />
              )}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="z-10 absolute -right-0 -top-4 text-white bg-gray-600 cursor-default rounded text-xs 2xl:text-sm px-2 py-1 lg:py-1.5 text-center mr-2 mb-2"
        >
          Próximamente
        </button>
        <p className="text-center text-xs 2xl:text-sm uppercase  text-black font-bold p-1">
          {title}
        </p>
      </figure>
    </>
  );
};
