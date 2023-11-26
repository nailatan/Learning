import { Select } from "antd";
import { useEffect, useState } from "react";
import { getContinents } from "../api";

const SelectCountry = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const countries = await getContinents();
    setCountries(countries);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <div>
      <Select
        // title="País"
        style={{ width: 120 }}
        options={countries}
      />
    </div>
  );
};

export default SelectCountry;
