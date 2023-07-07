export const ItemRedes = ({item}) => {
  return (
    <li key={item.id}>
      <a
        href={item.href}
        target="_blank"
        // onClick={() => handleButtonsCollapse()}
        className="text-[#855F35] font-bold border-b-2 border-transparent lg:hover:border-b-[#855F35] transition-all duration-300 ease-in-out"
      >
        <svg
          xmlns={item.xmlns}
          x="0px"
          y="0px"
          width={item.width}
          height={item.height}
          fill={item.fill}
          viewBox={item.viewBox}
        >
          <path d={item.path}></path>
        </svg>
      </a>
    </li>
  );
};
