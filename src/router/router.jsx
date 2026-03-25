import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import HomePage from "../pages/HomePage";
import ComingSoon from "../pages/ComingSoonPage";
import TechnologyDetailsPage from "../pages/TechnologyDetailsPage";
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import AllMaterials from "../pages/AllMaterials";
import Uploaddesign from "../pages/Uploaddesign";
import { StampaPage } from "../pages/StampaPage";
import { Stampasla } from "../pages/Stampasla";
import { Stampasls } from "../pages/Stampasls";
import Vintage from "../pages/Vintage";
import { Drone } from "../pages/Drone";
import Footwear from "../pages/Footwear";
import Industrial from "../components/PagesComponent/HomPage/Industrial";

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
        path: "/stampasla",
        element: <Stampasla />,
      },
      {
        path: "/stampasls",
        element: <Stampasls />,
      },
      {
        path: "/vintage",
        element: <Vintage />,
      },
      {
        path: "/drone",
        element: <Drone />,
      },
      {
        path: "/footwear",
        element: <Footwear />,
      },
      {
        path: "/industrial",
        element: <Industrial />,
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