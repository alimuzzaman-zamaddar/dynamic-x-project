import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ComingSoon from "../pages/ComingSoonPage";
import TechnologyDetailsPage from "../pages/TechnologyDetailsPage";
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import AllMaterials from "../pages/AllMaterials";

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
        path: "/service/:category",
        element: <CategoryDetailsPage />,
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
