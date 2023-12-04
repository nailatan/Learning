db = connect("mongodb://admin:1234@localhost:27017/Learning?authSource=admin");

mongodb: db.continents.insertMany([
  {
    name: "Amèrica",
    country: [
      {
        name: "Antigua i Barbuda",
        capital: "Saint John's",
      },
      {
        name: "Argentina",
        capital: "Buenos Aires",
      },
      {
        name: "Bahamas",
        capital: "Nassau",
      },
      {
        name: "Barbados",
        capital: "Bridgetown",
      },
      {
        name: "Belice",
        capital: "Belmopán",
      },
      {
        name: "Bolivia",
        capital: "La Paz",
      },
      {
        name: "Brasil",
        capital: "Brasilia",
      },
      {
        name: "Canadà",
        capital: "Ottawa",
      },
      {
        name: "Chile",
        capital: "Santiago de Chile",
      },
      {
        name: "Colòmbia",
        capital: "Bogotá",
      },
      {
        name: "Cuba",
        capital: "La Havana",
      },
      {
        name: "Costa Rica",
        capital: "San José",
      },
      {
        name: "Dominica",
        capital: "Rosseau",
      },
      {
        name: "Ecuador",
        capital: "Quito",
      },
      {
        name: "El Salvador",
        capital: "San Salvador",
      },
      {
        name: "Estats Units",
        capital: "Washington D.C.",
      },
      {
        name: "Granada",
        capital: "Saint George's",
      },
      {
        name: "Guatemala",
        capital: "Ciudad de Guatemala",
      },
      {
        name: "Guayana Francesa",
        capital: "Cayena",
      },
      {
        name: "Guyana",
        capital: "Georgetown",
      },
      {
        name: "Haití",
        capital: "Puerto Príncipe",
      },
      {
        name: "Honduras",
        capital: "Tegucigalpa",
      },
      {
        name: "Jamaica",
        capital: "Kingston",
      },
      {
        name: "México",
        capital: "Ciudad de México",
      },
      {
        name: "Nicaragua",
        capital: "Managua",
      },
      {
        name: "Panamá",
        capital: "Panamá",
      },
      {
        name: "Perú",
        capital: "Lima",
      },
      {
        name: "Puerto Rico",
        capital: "San Juan",
      },
      {
        name: "República Dominicana",
        capital: "Santo Domingo",
      },
      {
        name: "San Cristóbal y Nieves",
        capital: "Basseterre",
      },
      {
        name: "Santa Lucía",
        capital: "Castries",
      },
      {
        name: "San Vicente y las Granadinas",
        capital: "Kingstown",
      },
      {
        name: "Surinam",
        capital: "Paramaribo",
      },
      {
        name: "Trinidad y Tobago",
        capital: "Puerto España",
      },
      {
        name: "Uruguay",
        capital: "Montevideo",
      },
      {
        name: "Venezuela",
        capital: "Caracas",
      },
      {
        name: "Paraguai",
        capital: "Asunción",
      },
    ],
  },
]);
