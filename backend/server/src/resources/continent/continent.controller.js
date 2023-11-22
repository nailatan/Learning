// const paramsToRouterChild = (req, res, next) => {
//   console.log(req.params.country);
//   req.paramsParentRouter = { country: req.params.country };
//   next();
// };

const addRulesTo = (app) => {
  app.use(
    "/api/v1/continent/",
    // paramsToRouterChild,
    require("./continent.router.v1")
  );
};

module.exports = { addRulesTo };
