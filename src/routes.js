
import Login from "layouts/Login";
import Dashboard from "views/Dashboard.js";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-app",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "nc-icon nc-key-25",
    component: <Login />,
    layout: "/admin",
  },
];
export default routes;
