const routes = require("next-routes")();

routes
    .add("/projects/:id", "/projects/index")
    .add("/projects/:pid/:fid", "/projects/show/index")
    .add("/users/:index", "/users/display/index");

module.exports = routes;