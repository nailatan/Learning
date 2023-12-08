export const getContinents = async () => {
  const response = await fetch("http://localhost:8080/api/v1/continent/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  const values = json.map((country) => {
    return {
      value: country.name,
      label: country.name,
      answer: "",
    };
  });
  return values;
};

export const getCountries = async (country) => {

  const response = await fetch(
    `http://localhost:8080/api/v1/continent/${country}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const json = await response.json();

  return json.country;
};

export const getVerbs = async (country) => {
  const response = await fetch(`http://localhost:8080/api/v1/verbs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();

  return json;
};

