import { useEffect, useState } from "react";
import { getToken } from "./getToken";

const initiatState = { data: null, isLoading: true, hasError: null };

export const useFetchNew = (url, email, password) => {
  const [state, setState] = useState(initiatState);
  const tokenSessionStorage = sessionStorage.getItem("tokenSessionStorage");

  // console.log("-------------useFetchNew----------------");
  // console.log({url, email, password})
  
  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    try {
      console.log({url})
      const response = await fetch(url, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenSessionStorage}`,
          accept: "application/json",
        },
      });
      console.log({response})
      // if (response.status === 404) {
      //   setState({ data, isLoading: true, hasError: null });
      //   return;
      // }
      if (response.status === 401) {
        const { token } = await getToken(email, password);
        const response = await fetch(url, {
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
        // console.log('data con error 401:' , data)
        // console.log('data con error 401 previo a comprobar si es vacía:' , data)
        if (data.length === 0) {
          // console.log('data con error 401 luego de comprobar que SI es vacía: "devuelvo el isLoading en true luego de error 401"')
          setState({ data, isLoading: true, hasError: null });
          return;          
        }
        // console.log('devuelvo data con error 401 luego de comprobar que NO es vacía:' , data)
        setState({ data, isLoading: false, hasError: null });
      }
     
      const { data } = await response.json();
      // console.log('data sin error previo a comprobar si es vacía:' , data)
      if (data.length === 0) {
        // console.log('data sin error luego de comprobar que SI es vacía: devuelvo el isLoading en true sin error')
        setState({ data, isLoading: true, hasError: null });
        return;          
      }
      // console.log('data sin error luego de comprobar que NO es vacía:' , data)
      setState({ data, isLoading: false, hasError: null });

    } catch (error) {
      setState({ data: null, isLoading: false, hasError: error });
    }
  };

  useEffect(() => {
    getFetch();
  }, [url]);

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};
