export const ErrorApi = () => {
  return (
    <div
      className="mt-10 flex justify-center mx-auto p-4 mb-4 text-sm"
      role="alert"
    >
      <span className="sr-only">Info</span>
      <div>
        <span className="font-semibold text-xl text-center flex justify-center items-center flex-col">
          <img
            className="w-60 lg:w-1/2"
            src="https://www.tuentrada.com/teatro/gran-rex/imagenes/error.png"
            alt="no hay eventos"
          />
          Sitio en mantenimiento, intente nuevamente mas tarde
        </span>
      </div>
    </div>
  );
};
