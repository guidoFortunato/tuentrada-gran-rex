import React, { Fragment } from "react";

export const TablaPrecios2 = ({ performances }) => {
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
        {performances.map((item) => (
          <Fragment key={item.id}>
            {item.prices.map((price) => (
              <tr
                key={price.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <span style={{ backgroundColor: `#${price.seatCategory.bgColor}`  }} className={`px-[10px] mr-2`}></span>
                  <span>{price.seatCategory.name}</span> 
                </th>
                <td className="px-6 py-4">{price.amount}</td>
              </tr>
            ))}
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};
