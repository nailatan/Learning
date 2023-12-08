db = connect("mongodb://admin:1234@localhost:27017/Learning?authSource=admin");

mongodb: db.irregularverbs.insertMany([
  { present: "tell", past: "told", meaning: "explicar" },
  { present: "say", past: "said", meaning: "decir" },
]);
