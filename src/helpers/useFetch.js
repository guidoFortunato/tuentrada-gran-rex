import { useEffect, useState } from "react";
import { getToken } from "./getToken";

const initiatState = { data: null, isLoading: true, hasError: null };

export const useFetch = (url, email, password) => {
  const [state, setState] = useState(initiatState);
  const tokenSessionStorage = sessionStorage.getItem("tokenSessionStorage");

  // console.log("-----useFetchNew-----");
  
  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    try {
      // console.log({url})
      const response = await fetch(url, {
        credentials: "include",
        method: "GET",
        headers: {
          Authorization: `Bearer ${tokenSessionStorage}`,
          accept: "application/json",
        },
      });
      // console.log({response})
      if (response.status === 404) {
        setState({ data, isLoading: false, hasError: null });
        // console.log('404', {response});
        return
      }
      
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
        // console.log('401', {response});
        if (!response.ok) {
          throw new Error(`${response.status}: ${response.statusText} `);
        }
        sessionStorage.setItem("tokenSessionStorage", token);
        const { data } = await response.json()
        setState({ data, isLoading: false, hasError: null });
        return
      }

      // console.log('200', {response});
     
      const { data } = await response.json();
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
