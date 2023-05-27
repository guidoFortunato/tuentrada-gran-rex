import "../css/tablaprecios.css";

export const TablaPrecios = ({ precios }) => {
  // console.log(precios)
  return (
    <table className="table mt-4" style={{backgroundColor:"white", fontSize:"12px"}} >
      <thead className="cabecera-tabla">
        <tr>
          <th scope="col" className="text-white">
            Ubicación
          </th>
          <th scope="col" className="text-white">
            Precio
          </th>
        </tr>
      </thead>
      <tbody>
        {precios.map((item) => (
          <tr key={item.id}>
            <td className="fw-bold">
              <span
                style={{ background: `#${item.seatCategory.bgColor}` }}
                className="cuadrado-ubicacion me-2"
              ></span>
              <span>{item.seatCategory.name}</span>
            </td>
            <td className="fw-bold">
              <span>{item.amount}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
