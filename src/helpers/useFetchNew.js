import { useEffect, useState } from "react";

const initiatState = { data: null, isLoading: true, hasError: null };

export const useFetchNew = (url) => {
  const [state, setState] = useState(initiatState);

  const getFetch = async () => {
    setState({ ...state, isLoading: true });
    try {
      const res = await fetch(url);
      const data = await res.json();
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
