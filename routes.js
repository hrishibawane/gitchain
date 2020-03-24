const routes = require("next-routes")();

routes
    .add("/projects/:address/:id", "/projects/index")
    .add("/projects/:address/:pid/:fid", "/projects/show/index")
    .add("/users/:index", "/users/display/index");

module.exports = routes;