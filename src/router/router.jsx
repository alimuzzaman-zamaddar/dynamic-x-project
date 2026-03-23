import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ComingSoon from "../pages/ComingSoonPage";
import TechnologyDetailsPage from "../pages/TechnologyDetailsPage";
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import { StampaPage } from "../pages/StampaPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/service/:category",
        element: <CategoryDetailsPage />,
      },
      {
        path: "/stampa",
        element: <StampaPage />,
      },
      {
        path: "/coming-soon",
        element: <ComingSoon />,
      },
      {
        path: "/technology-details/:title",
        element: <TechnologyDetailsPage />,
      },
    ],
  },
]);

export default router;
