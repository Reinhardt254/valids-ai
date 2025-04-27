import { Calendar, Home, Plus, Search, Settings, User, File } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import { useParams } from "react-router-dom";
export function AppSidebar() {
  
  const { id } = useParams();
  
  // Menu items.
  const items = [
    {
      title: "Home",
      url: `/dashboard/${id}`,
      icon: Home,
    },
    {
      title: "Profile",
      url: `/dashboard/${id}/profile`,
      icon: User,
    },
    {
      title: "Leads",
      url: `/dashboard/${id}/leads`,
      icon: Calendar,
    },
    {
      title: "Sell Lead",
      url: `/dashboard/${id}/sell-lead`,
      icon: Plus,
    },
    {
      title: "New Lead",
      url: `/dashboard/${id}/new-lead`,
      icon: Plus,
    },
    {
      title: "Blog Posts",
      url: `/dashboard/${id}/blogs`,
      icon: File,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ];

  return (
    <Sidebar className="h-full pr-0 mr-0">
      <SidebarGroupContent className="absolute z-10 mt-auto bottom-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a href="/dashboard/${id}/settings">
                <Settings />
                <span>Settings</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroupContent>
        <SidebarContent className="relative">
          <SidebarGroup className="flex flex-col h-full gap-2">
            <SidebarGroupLabel className="mt-20 text-sm font-bold">Application Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
    </Sidebar>
  );
}
