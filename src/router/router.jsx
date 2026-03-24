import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ComingSoon from "../pages/ComingSoonPage";
import TechnologyDetailsPage from "../pages/TechnologyDetailsPage";
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import AllMaterials from "../pages/AllMaterials";
import Uploaddesign from "../pages/Uploaddesign";
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
        path: "/allmaterials",
        element: <AllMaterials />,
      },
      {
        path: "/upload-design",
        element: <Uploaddesign />,
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
