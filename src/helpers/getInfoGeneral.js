import { getToken } from "./";
import { getEnvVariables } from "./getEnvVariables";

const { VITE_API_INFO_GENERAL, VITE_EMAIL, VITE_PASS } = getEnvVariables();

export const getInfoGeneral = async (venue = "Ituzaingo") => {
  const URL = VITE_API_INFO_GENERAL + venue;
  const email = VITE_EMAIL;
  const password = VITE_PASS;
  const tokenSessionStorage = sessionStorage.getItem("tokenSessionStorage");

  // console.log("-------------GetInfoGeneral----------------");
  if (tokenSessionStorage) {
    try {
      const response = await fetch(URL, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenSessionStorage}`,
          accept: "application/json",
        },
      });
      // console.log(response);

      if (response.status === 401) {
        const { token } = await getToken(email, password);
        // // console.log("Uso token de getToken para hacer la peticion: " + token);
        const response = await fetch(URL, {
          credentials: "include",
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "application/json",
          },
        });
        // console.log(response);
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText} `);
        }
        sessionStorage.setItem("tokenSessionStorage", token);
        // console.log(data)
        const { data } = await response.json();
        return data;
      }
      // console.log(
      //   "Uso tokenSessionStorage para hacer la peticion: " + tokenSessionStorage
      // );
      const { data } = await response.json();
      // console.log(data)
      return data;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    try {
      const { token } = await getToken(email, password);
      // console.log("Uso token de getToken para hacer la peticion: " + token);
      const response = await fetch(URL, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "application/json",
        },
      });
      // console.log(response);
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText} `);
      }
      sessionStorage.setItem("tokenSessionStorage", token);
      const { data } = await response.json();
      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
};
