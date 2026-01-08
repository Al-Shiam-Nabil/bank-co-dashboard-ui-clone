import { createBrowserRouter } from "react-router";

import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
    ],
  },
]);

export default router;
