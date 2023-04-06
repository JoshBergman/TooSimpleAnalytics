const express = require("express");
const app = express();
const helmet = require("helmet");

const stdRoutes = require("./src/Routes/stdRoutes");

app.use(helmet());

app.use("/std", stdRoutes);

let port = process.env.PORT || 5000;
app.listen(port);
