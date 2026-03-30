import News from "../pages/News";
import Layout from "../layout/Layout";
import Vintage from "../pages/Vintage";
import { Drone } from "../pages/Drone";
import { Yacht } from "../pages/Yacht";
import Catalog from "../pages/Catalog";
import BioStamp from "../pages/BioStamp";
import HomePage from "../pages/HomePage";
import Footwear from "../pages/Footwear";
import Jwellery from "../pages/Jwellery";
import ChiSiamo from "../pages/ChiSiamo";
import TwoDThreeD from "../pages/TwoDThreeD";
import { Stampasla } from "../pages/Stampasla";
import { Stampasls } from "../pages/Stampasls";
import MedicaleLab from "../pages/MedicaleLab";
import Prototyping from "../pages/Prototyping";
import { createBrowserRouter } from "react-router";
import ComingSoon from "../pages/ComingSoonPage";
import AllMaterials from "../pages/AllMaterials";
import Uploaddesign from "../pages/Uploaddesign";
import { StampaPage } from "../pages/StampaPage";
import Architettura from "../pages/Architettura";
import Vetemarysupports from "../pages/Vetemarysupports";
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import TechnologyDetailsPage from "../pages/TechnologyDetailsPage";
import Industrial from "../components/PagesComponent/HomPage/Industrial";
import BioStamp from "../pages/BioStamp";
import News from "../pages/News";
import Newsletter from "../pages/Newsletter";


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

        path: "/yacht",
        element: <Yacht />,
      },
      {
        path: "/architettura",
        element: <Architettura />,
      },
      {
        path: "/vetemarysupports",
        element: <Vetemarysupports />,
      },
      {
        path: "/prototyping",
        element: <Prototyping />,
      },
      {
        path: "/2d3d",
        element: <TwoDThreeD />,
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
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/chi-siamo",
        element: <ChiSiamo />,
      },
      {
        path: "/bio-stamp",
        element: <BioStamp />,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "/technology-details/:title",
        element: <TechnologyDetailsPage />,
      },
    ],
  },
]);

export default router;