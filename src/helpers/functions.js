import { API_BASE_URL, UNSPLASH_CLIENT_ID } from "./constants";

export const requestToAPI = async params => {
  let resultData;
  const { queryEndPoint } = params;
  try {
    const response = await fetch(
      `${API_BASE_URL}${queryEndPoint}&client_id=${UNSPLASH_CLIENT_ID}`
    );
    resultData = await response.json();
    return resultData;
  } catch (error) {
    throw error;
  }
};
