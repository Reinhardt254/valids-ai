import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./not-found";

import { RootLayout } from "../components/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "dashboard/:id",
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
