import { createBrowserRouter } from "react-router";

import RootLayout from "../Layouts/RootLayout";
import SignLayout from "../Layouts/SignLayout";
import CalenderPage from "../Pages/CalenderPage/CalenderPage";
import ComingSoonPage from "../Pages/ComingSoonPage/ComingSoonPage";
import Errorpage from "../Pages/ErrorPage/Errorpage";
import HistoryPage from "../Pages/History/HistoryPage";
import HomePage from "../Pages/Home/HomePage";
import Inbox from "../Pages/Inbox/Inbox";
import IntegrationsPage from "../Pages/Integrations/IntegrationsPage";
import MyWallet from "../Pages/MyWallet/MyWallet";
import SettingPage from "../Pages/SettingPage/SettingPage";
import SigninPage from "../Pages/Sign/SigninPage";
import SignupPage from "../Pages/Sign/SignupPage";
import StatisticsPage from "../Pages/Statistics/StatisticsPage";
import SupportPage from "../Pages/Support/SupportPage";
import TransactionPage from "../Pages/Transaction/TransactionPage";
import UserPage from "../Pages/User/UserPage";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    Component: RootLayout,
    errorElement: <Errorpage />,
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
      {
        path: "inbox",
        Component: Inbox,
      },
      {
        path: "calender",
        Component: CalenderPage,
      },
      {
        path: "history",
        Component: HistoryPage,
      },
      {
        path: "support",
        Component: SupportPage,
      },
      {
        path: "settings",
        Component: SettingPage,
      },
      {
        path: "coming-soon",
        Component: ComingSoonPage,
      },
    ],
  },

  {
    path: "coming-soon",
    Component: ComingSoonPage,
  },

  {
    path: "error404",
    Component: Errorpage,
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
