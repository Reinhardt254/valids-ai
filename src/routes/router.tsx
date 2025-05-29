import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

import { RootLayout } from "../components/RootLayout";
import { AboutPage } from "./AboutUs";
import { HowItWorks } from "./How-it-works";  
import PrivacyPolicy from "./PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "how-it-works", element: <HowItWorks /> },
    ],
  },
]);
