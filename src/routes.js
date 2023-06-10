
import Dashboard from "views/Dashboard.js";
// import Login from "views/Login.js";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-app",
    component: <Dashboard />,
    // layout: "/admin",
  },
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: "nc-icon nc-app",
  //   component: <Login />,
  //   layout: "/admin",
  // },
];
export default routes;
