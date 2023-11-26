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
    };
  });

  return values;
};
