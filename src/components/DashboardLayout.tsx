import { Outlet } from "react-router-dom";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sideBar";

export const DashboardLayout = () => {
  return (
    <div className="w-full flex flex-col justify-items-start gap-0 p-0 m-0">
      <SidebarProvider className="w-full relative p-0 m-0">
        <div className="flex flex-col  mr-0">
          <AppSidebar  />
        </div>
          <main className="flex flex-col mt-20 pr-0 w-full justify-start p-0 m-0">
            <SidebarTrigger />
          <div className="box-border pl-0 w-auto">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </div>
  );
};
