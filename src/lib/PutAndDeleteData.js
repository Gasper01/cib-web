import Cookies from "js-cookie";
const baseURL = "https://full-api.vercel.app";
const TextUrl = "http://localhost:400";

const headers = {
  Origin: "https://cib-web.vercel.app",
  "Content-Type": "application/json",
};

const options = {
  cache: "no-store",
  mode: "cors",
  headers,
  credentials: "include",
};

async function fetchWithOption(
  url,
  method = "GET",
  body = null,
  includeToken = false
) {
  const requestOptions = {
    ...options,
    method,
    body: body ? JSON.stringify(body) : null,
  };

  if (includeToken) {
    const token = Cookies.get("token");
    if (token) {
      requestOptions.headers["x-access-token"] = token;
    }
  }

  try {
    const res = await fetch(url, requestOptions);
    return res;
  } catch (error) {
    return { error: "Failed to Post" };
  }
}

export async function UpdateSalidasById(Idsalida, selectedProducts) {
  return fetchWithOption(
    `${baseURL}/salidas/${Idsalida}`,
    "PUT",
    selectedProducts,
    true
  );
}
export async function DeleteSalidasById(Idsalida) {
  return fetchWithOption(
    `${baseURL}/salidas/${Idsalida}`,
    "DELETE",
    null,
    true
  );
}
