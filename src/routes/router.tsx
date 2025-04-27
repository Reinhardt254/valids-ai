import { createBrowserRouter } from "react-router-dom";

import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { ForgotPasswordPage } from "./ForgotPasswordPage";
import { ResetPasswordPage } from "./ResetPasswordpage";
import { Updateprofile } from "./Updateprofile";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { NotFoundPage } from "./not-found";

import { ProtectedRoute } from "../components/ProtectedRoute";
import { RootLayout } from "../components/RootLayout";
import { DashboardLayout } from "../components/DashboardLayout";
import { DashboardProfile } from "./DashboardProfile";
import { DashboardHome } from "./DashboardHome";
import { DashboardSettings } from "./DashboardSettings";
import { DashboardLeads } from "./DashboardLeads";
import DashboardNewLead from "./DashboardNewLead";
import { Marketplace } from "./Marketplace";
import { CompleteProfile } from "./CompleteProfle";
import { SingleProduct } from "./SingleProduct";
import { Cart } from "./Cart";
import Blog from "./Blog";
import Post from "./post";
import { DashboardBlogsAdmin } from "./DashboardBlogsAdmin";
import { DahboardCreateBlogPosts } from "./DahboardCreateBlogPosts";
import { DasboardBlogsEditPosts } from "./DasboardBlogsEditPosts";
import { DashboardSellLead } from "./DashboardSellLead";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
      { path: "update-profile", element: <Updateprofile /> },
      { path: "marketplace", element: <Marketplace /> },
      { path: "complete-profile", element: <CompleteProfile /> },
      { path: "product/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "blog", element: <Blog /> },
      { path: "post/:id", element: <Post /> },
      {
        path: "dashboard/:id",
        element: (
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <DashboardHome /> },
          { path: "profile", element: <DashboardProfile /> },
          { path: "settings", element: <DashboardSettings /> },
          { path: "leads", element: <DashboardLeads /> },
          { path: "new-lead", element: <DashboardNewLead /> },
          { path: "sell-lead", element: <DashboardSellLead />},
          { path: "blogs", element: <DashboardBlogsAdmin /> },
          { path: "blogs/create", element: <DahboardCreateBlogPosts /> },
          { path: "blogs/edit/:id", element: <DasboardBlogsEditPosts /> },
        ],
      },

      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
