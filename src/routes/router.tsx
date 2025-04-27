import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";

import { RootLayout } from "../components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
    ],
  },
]);
