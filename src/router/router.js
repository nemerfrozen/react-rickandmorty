import { createBrowserRouter } from "react-router-dom";
import Search from "../pages/SearchPage";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

export default router;
