const HOST = "127.0.0.1";
const PORT = "8080";
const BASE_URL = `http://${HOST}:${PORT}/api`;
const VERSION = "v1";

const isSuccess = (httpCode) => httpCode === 200 || httpCode === 201;

const callAPI = async (method, version, path, body, headers) => {
  const response = await fetch(`${BASE_URL}/${version}${path}`, {
    method: method,
    headers: { ...headers },
    body: body,
  });
  console.log(response.status);
  const json = await response.json();

  if (isSuccess(response.status)) {
    return { success: true, result: json, error: "DASD" };
  } else if (response.status === 401) {
    return { success: false, error: json.error };
  } else {
    return { success: false, error: json.error };
  }
};

const callAPIV1 = (method, path, body) => {
  const header = {
    "Content-Type": "application/json",
  };
  return callAPI(method, VERSION, path, body, header);
};

export const getContinents = async () => {
  const { success, result: response } = await callAPIV1(
    "GET",
    "/continent",
    null
  );
  const values = response.map((continent) => {
    return {
      value: continent.name,
      label: continent.name,
      answer: "",
    };
  });
  return values;
};

export const getCountries = async (continent) => {
  return await callAPIV1("GET", `/continent/${continent}`, null);
};

export const getVerbs = () => {
  return callAPIV1("GET", "/verbs", null);
};
