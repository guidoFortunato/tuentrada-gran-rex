import { getToken } from ".";

export const getDataLocalStorage = async (URL, email, password) => {
  const timeNow = Date.now();
  const tokenStorage = localStorage.getItem("tokenStorage");
  const expiresTokenStorage = localStorage.getItem("expiresTokenStorage");
	console.log('-------------getDataLocalStorage----------------')
  console.log("timeNow: " + timeNow);
  console.log("expiresTokenStorage: " + expiresTokenStorage);

  if (!tokenStorage) {
    const { token, tokenExpires } = await getToken(email, password);
    console.log("tokenStorage no existe");
    console.log("pido un nuevo token: " + token);
    try {
      const response = await fetch(URL, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          // 'Access-Control-Allow-Origin': '*'
        },
      });
      // console.log({response});

      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      localStorage.setItem("tokenStorage", token);
      localStorage.setItem("expiresTokenStorage", tokenExpires);
      const data = await response.json();

			console.log('tokenStorage no existe',{data})
      return data;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    if (tokenStorage && expiresTokenStorage) {
      if (timeNow > expiresTokenStorage) {
        console.log("tokenStorage existe y expiró: ");
        console.log("pido nuevo token");
        const { token, tokenExpires } = await getToken(email, password);
        try {
          const response = await fetch(URL, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          // console.log({response});

          if (!response.ok) {
            throw new Error(
              `Error: ${response.status}. ${response.statusText}`
            );
          }
          localStorage.setItem("tokenStorage", token);
          localStorage.setItem("expiresTokenStorage", tokenExpires);
          const data = await response.json();
					console.log('tokenStorage existe y expiró',{data})
          return data;
        } catch (error) {
          throw new Error(error);
        }
      } else {
        console.log("tokenStorage existe y NO expiró");
        console.log(
          "realizo la solicitud con el tokenStorage: " + tokenStorage
        );
        try {
          const response = await fetch(URL, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${tokenStorage}`,
            },
          });
          // console.log({response});

          if (!response.ok) {
            throw new Error(
              `Error: ${response.status}. ${response.statusText}`
            );
          }

          const data = await response.json();
					console.log('tokenStorage existe y NO expiró',{data})
          return data;
        } catch (error) {
          throw new Error(error);
        }
      }
    }
  }
};
