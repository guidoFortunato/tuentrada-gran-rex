import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_EVENTOS } = getEnvVariables();
//https://testapi.tuentrada.com/api/v1/site/list-products/{id}/details/{productId}



export const getDataEvent = async (idVenue = 5, productId = 1) => {
  const URL = VITE_API_EVENTOS + idVenue + "/details/" + productId;
  const tokenStorage = localStorage.getItem("tokenStorage");
	console.log('--------------------getDataEvent--------------------------------')
  console.log("realizo la solicitud con el tokenStorage: " + tokenStorage);
  try {
    const response = await fetch(URL, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    });
    // console.log({response});

    if (!response.ok) {
      throw new Error(`Error: ${response.status}. ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
