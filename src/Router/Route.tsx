import { createBrowserRouter } from "react-router";

import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/Home/HomePage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import TransactionPage from "../Pages/Transaction/TransactionPage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "transaction",
        Component: TransactionPage,
      },
      {
        path: "statistics",
        Component: StatisticsPage,
      },
    ],
  },
]);

export default router;
