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
          Sitio en mantenimiento, intente nuevamente mas tarde <br />
          
        </span>
        <span className="font-semibold text-base text-gray-500 flex-col">Podes ver nuestros eventos en <a href="https://tuentrada.com" className="text-blue-700 underline" >tuentrada.com</a></span>
       
      </div>
    </div>
  );
};
