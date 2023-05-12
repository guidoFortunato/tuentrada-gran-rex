import { getEnvVariables } from "./getEnvVariables";

export const getToken = async (email, password) => {
	const { VITE_JSON_LOGIN } = getEnvVariables();
	try {
		const response = await fetch(VITE_JSON_LOGIN, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify({
				email,
				password,
			}),
		});
    // console.log({response})

		if (!response.ok) {
			throw new Error(`Error: ${response.status}. ${response.statusText}`);
		}

		const data = await response.json();
		const token = data.token;
		const tokenExpires = new Date(data.expired_at).getTime();
		return {token, tokenExpires};
	} catch (error) {
		console.error({error});
	}
};
