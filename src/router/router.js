import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/LoginPage";
import Search from "../pages/SearchPage";
import Detail from "../pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
