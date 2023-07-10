export const ItemRedes = ({id, href , xmlns, width, height, fill, viewBox, path}) => {
  return (
    <li key={id}>
      <a
        href={href}
        target="_blank"
        // onClick={() => handleButtonsCollapse()}
        className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
      >
        <svg
          xmlns={xmlns}
          x="0px"
          y="0px"
          width={width}
          height={height}
          fill={fill}
          viewBox={viewBox}
        >
          <path d={path}></path>
        </svg>
      </a>
    </li>
  );
};
