import { Link, Outlet, useLocation } from "react-router-dom";
import {  MenuIcon, XIcon } from "lucide-react";
import { FooterLayout } from "./footerLayout";
import { useState } from "react";
 
export function RootLayout() {
  const location = useLocation();

  const isAuthenticated = false;
  
  const isDashboard = location.pathname.startsWith("/dashboard");

  const [toggle, setToggle] = useState(false);      

  const DashboardNavbar = () => (
    <div className="fixed top-0 left-0 right-0 bg-black z-700">
      <div className="px-4 mx-auto min-w-screen sm:px-6 lg:px-12">
        <div className="flex justify-between h-20 border-b border-indigo-600">
          <div className="flex">
            <div className="flex items-center flex-shrink-0">
              <Link
                to="#"
                className="text-xl font-bold text-white"
              >
                Dashboard
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2 border-transparent hover:border-white hover:text-white"
              >
                Leads
              </Link>
              <Link
                to="#"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-100 border-b-2 border-transparent hover:border-white hover:text-white"
              >
                Settings
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-white">Welcome, Client</span>
              <button
                className="inline-flex items-center px-3 py-1.5 border border-white text-xs font-medium rounded-md text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const logo =
    "https://validleads.nyc3.digitaloceanspaces.com/images/image-1745428384179-577569817-navlogo.png";

  const MainNavbar = () => (
    <div className="box-border z-10 w-full px-10 mt-5 bg-black border-gray-800 border-opacity-10 border-t-1 border-b-1 max-w-screen max-sm:px-5">
      <div className="box-border px-0 mx-0 sm:px-6 lg:px-12 sm:min-w-auto max-lg:px-5">
        <div className="flex justify-between w-full h-20 gap-10">
          <div className="flex items-center justify-center w-auto">
            <div className="flex items-center flex-shrink-0 w-auto">
              <Link to="/" className="text-xl font-bold text-indigo-600">
                <img
                  src={logo}
                  alt="logo"
                  className="object-contain w-auto h-full max-sm:w-1/2 "
                />
              </Link>
            </div>
          </div>

          <div className="box-border hidden sm:ml-0 xl:flex sm:space-x-8 max-xl:hidden">
              <Link
                to="#"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Marketplace
            </Link>

            <Link
              to="#"
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
              to="#"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Blogs
            </Link>

            <Link
              to="#"
              className="inline-flex items-center px-1 pt-1 text-sm font-medium text-white border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              Contact Us
            </Link>
          </div>

          <div className="box-border hidden w-auto sm:ml-6 sm:flex sm:items-center">
            {/* <Link
              to="/cart"
              className="inline-flex items-center px-1 pt-1 mr-4 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
            >
              <ShoppingCartIcon className="w-5 h-5" />
              <span className="text-sm text-gray-500">{totalQuantity}</span>
            </Link> */}
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="#"
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Go to Dashboard
                </Link>
                <button
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-transparent"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="#"
                  className="inline-flex items-center text-white"
                >
                  Login
                </Link>
                <Link
                  to="#"
                  className="button-anime"
                >
                  Register

                  <div className="button-anime-border"></div>
                </Link>
              </div>
            )}
          </div>

          <div className="box-border flex items-center space-x-4 xl:hidden">
            <MenuIcon  onClick={() => setToggle(!toggle)} className="w-10 h-10 text-xl text-white" /> 
          </div>

        </div>
      </div>
          {toggle && (
            <div className="fixed inset-0 top-0 left-0 flex flex-col items-center justify-start w-screen h-screen overflow-y-auto bg-black z-500000 bg-opacity-95">
              <div onClick={() => setToggle(!toggle)} className="box-border flex justify-end w-full p-4">
                  <XIcon  className="w-8 h-8 text-white" />
              </div>
              <div className="flex flex-col items-center justify-start w-full h-full gap-3 pt-32">
                <Link to="#" className="text-white">Home</Link>
                <Link to="#" className="text-white">About</Link>
                <Link to="#" className="text-white">Contact</Link>
                <Link to="#" className="text-white">Pricing</Link>
                <Link to="#" className="text-white">Marketplace</Link>
                <Link to="#" className="text-white">Blogs</Link>
              </div>
            </div>
          )}
    </div>
  );
 
  return (
    <>
      {isDashboard ? <DashboardNavbar /> : <MainNavbar />}
      <main className="py-0 mx-0 w-[100%] max-w-[100%] sm:px-0 lg:px-0  box-border max-sm:max-w-[100vw] flex flex-col items-center justify-center max-sm:overflow-x-hidden">
        <Outlet />
      </main>
      <FooterLayout />
    </>
  );
}
