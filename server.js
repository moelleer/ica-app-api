var express = require("express"),
  cors = require("cors"),
  app = express(),
  port = process.env.PORT || 5000;

app.use(cors());

var routes = require("./api/routes/icaRoutes");
routes(app);

app.listen(port);
