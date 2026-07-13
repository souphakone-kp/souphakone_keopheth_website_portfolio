import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import { Paths } from "./app.js";

import HomePage from "../components/HomePage.jsx";
import Education from "../components/Experience/Education.jsx";
import WiseSight from "../components/Experience/WiseSight.jsx";
import Anousith from "../components/Experience/Anousith.jsx";

import OBSHPage from "../components/ProjectEducation/OBSHPage.jsx";
import HospitalsPage from "../components/ProjectEducation/hospitalsPage.jsx";
import NetflixPage from "../components/ProjectEducation/NetflixPage.jsx";
import BUHideAndSeekPage from "../components/ProjectEducation/BUHideAndSeekPage.jsx";
import MeowFeederPage from "../components/ProjectEducation/MeowFeederPage.jsx";
import EatForHealthPage from "../components/ProjectEducation/EatForHealthPage.jsx";
import FutureTempPage from "../components/ProjectEducation/FutureTempPage.jsx";
import BuOpenhousePage from "../components/ProjectEducation/BuOpenHousePage.jsx";
import FinancialDiaryPage from "../components/ProjectEducation/FinancialDiaryPage.jsx";

const router = createHashRouter([
  { path: "/", element: <Navigate to={Paths.HOME} replace /> },

  { path: Paths.HOME, element: <HomePage /> },
  { path: Paths.EDUCATION, element: <Education /> },
{ path: Paths.WISESIGHT, element: <WiseSight /> },
  { path: Paths.ANOUSITH, element: <Anousith /> },

  { path: Paths.OBSH, element: <OBSHPage /> },
  { path: Paths.HOSTPITALS, element: <HospitalsPage /> },
  { path: Paths.NETFLIX, element: <NetflixPage /> },

  { path: Paths.BU_HIDE_AND_SEEK, element: <BUHideAndSeekPage /> },
  { path: Paths.MEOW_FEDDER, element: <MeowFeederPage /> },
  { path: Paths.EAT_FOR_HEALTH, element: <EatForHealthPage /> },
  { path: Paths.FINANCIAL_DIARY, element: <FinancialDiaryPage /> },

  { path: Paths.BU_OPEN_HOUSE, element: <BuOpenhousePage /> },
  { path: Paths.FUTURE_TEMP, element: <FutureTempPage /> },
]);

export default function RoutesApp() {
  return <RouterProvider router={router} />;
}