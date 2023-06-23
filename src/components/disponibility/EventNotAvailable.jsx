export const EventNotAvailable = ({ img, title }) => {
  return (
    <>
      <figure className="relative max-w-sm cursor-default">
        <div>
          <img
            className="rounded-lg md:rounded-none opacity-40"
            src={img}
            alt={title}
          />
        </div>
        <button
          type="button"
          className="z-50 absolute -right-0 -top-4 text-white bg-gray-600 cursor-default rounded text-xs p-1.5 text-center mr-2 mb-2"
        >
          No disponible
        </button>
        <figcaption className="hidden md:block bg-[#000]  bg-opacity-70 absolute text-md text-white bottom-2 right-0 left-0">
          <p>{title}</p>
        </figcaption>
      </figure>
    </>
  );
};
