import React from "react";

export const TablaPrecios = ({ performances }) => {
  // console.log({performances})
  // Definir el orden de las categorías de asientos
const order = {
  "Platea 1": 1,
  "Platea 2": 2,
  "Platea 3": 3,
  "Platea 4": 4,
  "Platea 5": 5,
  "Super Pullman 1": 6,
  "Super Pullman 2": 7,
  "Pullman 1": 8,
  "Pullman 2": 9,
  "Pullman 3": 10,
  "Pullman 4": 11,
  "Pullman 5": 12,
};

// Ordenar el array de objetos
const sortedData = performances.prices.sort((a, b) => {
  const categoryA = a.seatCategory.name;
  const categoryB = b.seatCategory.name;
  // console.log({categoryA})
  // console.log({categoryB})
  
  // Comparar las categorías de asientos según el orden definido
  if (order[categoryA] < order[categoryB]) {
    // console.log({orderA: order[categoryA]})
    return -1;
  } else if (order[categoryA] > order[categoryB]) {
    // console.log({orderB: order[categoryB]})
    return 1;
  } 
  // else {
    
  //   const amountA = parseInt(a.amount.replace(/[^0-9]/g, ""));
  //   const amountB = parseInt(b.amount.replace(/[^0-9]/g, ""));
  //   return amountB - amountA;
  // }
});
  console.log({sortedData})


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
        {sortedData.map((item) => (
         
           
              <tr
                key={item.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <span style={{ backgroundColor: `#${item.seatCategory.bgColor}`  }} className={`px-[10px] mr-2`}></span>
                  <span>{item.seatCategory.name}</span> 
                </th>
                <td className="px-6 py-4">{item.amount}</td>
              </tr>
          
        
        ))}
    
      </tbody>
    </table>
  );
};
