const baseRoute = require("../core/routerConfig");

baseRoute.get("/", (req, res) =>
  res
    .status(200)
    .send(
      '<code>Techinover Running...<a target="_blank" href="https://documenter.getpostman.com/view/7896471/UV5XjHsr" style="text-decoration: none; cursor: pointer; color: black; font-weight: bold">&lt;Go To Docs/&gt;</a></code>'
    )
);

module.exports = baseRoute;
