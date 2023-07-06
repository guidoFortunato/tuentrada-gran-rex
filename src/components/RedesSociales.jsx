
export const RedesSociales = ({ dataRedes }) => {
  // console.log({ dataRedes });
  return (
    <>
      {dataRedes.map( item => (
        <li key={item.type.name}>
          <a
            href={item.url}
            target="_blank"
            className="inline-block"
            rel="noreferrer"
          >
            <svg
              xmlns={item.type.xmlns}
              x="0px"
              y="0px"
              width={item.type.width}
              height={item.type.height}
              fill={item.type.fill}
              viewBox={item.type.viewBox}
            >
              <path d={item.type.path}></path>
            </svg>
          </a>
        </li>
      ))}
    </>
  );
};
