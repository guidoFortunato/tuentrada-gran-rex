import React from "react";

export const TablaPrecios = ({ performances }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 border">
      <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Ubicaciones
          </th>
          <th scope="col" className="px-6 py-3">
            Precios
          </th>
        </tr>
      </thead>
      <tbody>
        {performances.prices.map((item) => (
          <tr
            key={item.id}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              <span
                style={{ backgroundColor: `#${item.seatCategory.bgColor}` }}
                className={`px-[10px] mr-2`}
              ></span>
              <span>{item.seatCategory.name}</span>
            </th>
            <td className="px-6 py-4">{item.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
