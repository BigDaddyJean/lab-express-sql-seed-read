const config = require("./config");
const express = require("express");
const routes = require("./routes");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors({origin: config.FRONT_END}))
app.use(routes);

app.listen(config.PORT, () =>
  console.log(`app is listening on port ${config.PORT}`)
);
