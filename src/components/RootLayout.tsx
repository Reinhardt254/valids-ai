import { Link, Outlet } from "react-router-dom";

import { ShoppingCartIcon } from "lucide-react";

import { FooterLayout } from "./footerLayout";

export function RootLayout() {

  const logo =
    "https://validleads.nyc3.digitaloceanspaces.com/images/image-1745428384179-577569817-navlogo.png";

    const isAuthenticated = false; // Replace with your authentication logic

  const MainNavbar = () => (
    <div className="relative z-10 w-full mt-5 bg-black border-gray-800 border-opacity-10 border-t-1 border-b-1">
      <div className="px-4 mx-auto min-w-screen sm:px-6 lg:px-12">
        <div className="flex justify-between w-full h-20">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                <img
                  src={logo}
                  alt="logo"
                  className="object-contain w-auto h-full"
                />
              </Link>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <Link
              to="/marketplace"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Marketplace
            </Link>

            <Link
              to="/pricing"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Pricing
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              About Us
            </Link>

            <Link
              to="/blog"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Blogs
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Contact Us
            </Link>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              to="/cart"
              className="inline-flex items-center px-1 pt-1 mr-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              {/* <span className="text-sm text-gray-500">{totalQuantity}</span> */}
            </Link>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">

              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="inline-flex items-center text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="button-anime"
                >
                  Register

                  <div className="button-anime-border"></div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <MainNavbar />
      <main className="py-6 mx-auto w-[90%] max-w-[1400px] sm:px-6 lg:px-8 overflow-x-visible box-border">
        <Outlet />
      </main>
      <FooterLayout />
    </>
  );
}
