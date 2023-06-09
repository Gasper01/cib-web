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
    return res.json();
  } catch (error) {
    return { error: "Failed to fetch data" };
  }
}

export async function GetDestinos() {
  return fetchWithOption(`${baseURL}/destinations/`, "GET", null, false);
}

export async function GetMotoristas() {
  return fetchWithOption(`${baseURL}/motoristas/`, "GET", null, false);
}

export async function GetLocation(search) {
  return fetchWithOption(
    `${baseURL}/destinations/${search}`,
    "GET",
    null,
    false
  );
}

export async function GetSalidas() {
  return fetchWithOption(`${baseURL}/salidas/`, "GET", null, false);
}

export async function GetSalidasByid(Id) {
  console.log(Id);
  return fetchWithOption(`${TextUrl}/salidas/${Id}`, "GET", null, false);
}

export async function GetUser() {
  return fetchWithOption(`${baseURL}/user`, "GET", null, false);
}

export async function Search(search) {
  return fetchWithOption(
    `${baseURL}/products/search/${search}`,
    "GET",
    null,
    false
  );
}

export async function VerifyUser() {
  return fetchWithOption(`${baseURL}/user/verifyuser`, "GET", null, true);
}

export async function GetLogin(email, password) {
  const requestBody = { email, password };
  return fetchWithOption(`${TextUrl}/admin/signIn`, "POST", requestBody, false);
}
