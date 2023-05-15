import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_EVENTOS } = getEnvVariables();

export const getEventsHome = async (id = 5) => {
  const URL = VITE_API_EVENTOS + id;
  const tokenStorage = localStorage.getItem("tokenStorage");
	console.log('--------------------GetEvents--------------------------------')
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
