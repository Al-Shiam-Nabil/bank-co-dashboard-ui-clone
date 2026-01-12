import { createBrowserRouter } from "react-router";

import RootLayout from "../Layouts/RootLayout";
import SignLayout from "../Layouts/SignLayout";
import HomePage from "../Pages/Home/HomePage";
import IntegrationsPage from "../Pages/Integrations/IntegrationsPage";
import MyWallet from "../Pages/MyWallet/MyWallet";
import SigninPage from "../Pages/Sign/SigninPage";
import SignupPage from "../Pages/Sign/SignupPage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import TransactionPage from "../Pages/Transaction/TransactionPage";
import UserPage from "../Pages/User/UserPage";

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
      {
        path: "myWallet",
        Component: MyWallet,
      },
      {
        path: "integrations",
        Component: IntegrationsPage,
      },
      {
        path: "user",
        Component: UserPage,
      },
    ],
  },
  {
    path: "/",
    Component: SignLayout,
    children: [
      {
        path: "signin",
        Component: SigninPage,
      },
      {
        path: "signup",
        Component: SignupPage,
      },
    ],
  },
]);

export default router;
