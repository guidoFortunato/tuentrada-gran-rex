import "../css/tablaprecios.css";

export const TablaPrecios = ({ ubicaciones }) => {
  return (
    <table className="table mt-4">
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
        {ubicaciones.map((item) => (
          <tr key={item.id}>
            <td className="fw-bold">
              <span
                style={{ background: `${item.color}` }}
                className="cuadrado-ubicacion me-2"
              ></span>
              <span>{item.nombre}</span>
            </td>
            <td className="fw-bold">
              $<span>{item.precio}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
