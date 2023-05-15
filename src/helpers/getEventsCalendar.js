import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_INFO_GENERAL } = getEnvVariables();

export const getEventsCalendar = async (id = 5) => {
  const URL = VITE_API_INFO_GENERAL + id + "/calendar";
  const tokenStorage = localStorage.getItem("tokenStorage");
	console.log('---------getEventsCalendar------------')
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
