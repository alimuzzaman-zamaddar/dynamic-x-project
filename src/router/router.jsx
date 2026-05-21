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
import Newsletter from "../pages/Newsletter";
import TwoDThreeD from "../pages/TwoDThreeD";
import { Stampasla } from "../pages/Stampasla";
import { Stampasls } from "../pages/Stampasls";
import MedicaleLab from "../pages/MedicaleLab";
import Prototyping from "../pages/Prototyping";
import ComingSoon from "../pages/ComingSoonPage";
import AllMaterials from "../pages/AllMaterials";
import Uploaddesign from "../pages/Uploaddesign";
import { StampaPage } from "../pages/StampaPage";
import Architettura from "../pages/Architettura";
import { createBrowserRouter } from "react-router";
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsCondiditon from "../pages/TermsCondiditon";
import Vetemarysupports from "../pages/Vetemarysupports";
import CategoryDetailsPage from "../pages/CategoryDetailsPage";
import TechnologyDetailsPage from "../pages/TechnologyDetailsPage";
import Industrial from "../components/PagesComponent/HomPage/Industrial";
import NewUploadDesign from "../pages/NewUploadDesign";
import FileUpload from "../pages/FileUpload";
import Product from "../pages/Product";
import Myorders from "../pages/Myorders";
import ProductDetails from "../pages/ProductDetails";
import DashboardLayout from "../layout/DashboardLayout";
import FileLibrary from "../pages/FileLibrary";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Checkout from "../pages/Checkout";


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
        path: "/new-upload-design",
        element: <NewUploadDesign />,
      },
      {
        path: "/file-upload",
        element: <FileUpload />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/product/:id",
        element: <ProductDetails />,
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
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/cookie-policy",
        element: <CookiePolicy />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsCondiditon />,
      },
      {
        path: "/technology-details/:title",
        element: <TechnologyDetailsPage />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Myorders />,
          },
          {
            path: "file",
            element: <FileLibrary />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "checkout",
            element: <Checkout />,
          },
        ],
      }
    ],
  },
]);

export default router;