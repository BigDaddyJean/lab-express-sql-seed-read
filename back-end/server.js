const config = require("./config");
require("dotenv").config();
const app = require("./app");

app.listen(config.PORT, () =>
  console.log(`app is listening on port ${config.PORT}`)
);
