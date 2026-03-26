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
import { Yacht } from "../pages/Yacht";
import Architettura from "../pages/Architettura";
import MedicaleLab from "../pages/MedicaleLab";
import Jwellery from "../pages/Jwellery";
import Veterinary from "../pages/Veterinary";


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
        path: "/veterinary",
        element: <Veterinary />,
      },
      {
        path: "/drone",
        element: <Drone />,
      },
      {

        path: "/yacht",
        element: <Yacht />,
      },
      {
        path: "/architettura",
        element: <Architettura />,
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
        path: "/medicale-lab",
        element: <MedicaleLab />,
      },
      {
        path: "/jwellery",
        element: <Jwellery />,
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