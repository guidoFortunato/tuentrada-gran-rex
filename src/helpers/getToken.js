import { getEnvVariables } from "./getEnvVariables";

export const getToken = async (email, password) => {
  const { VITE_LOGIN } = getEnvVariables();
  try {
    const response = await fetch(VITE_LOGIN, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}. ${response.statusText}`);
    }

    const data = await response.json();
    const token = data.token;
    const tokenExpires = new Date(data.expired_at).getTime();
    return { token, tokenExpires };
  } catch (error) {
    throw new Error(error);
  }
};
