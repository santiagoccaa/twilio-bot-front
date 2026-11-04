"use client";

import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { ListOrdered } from "lucide-react";

export const AppSidebar = () => {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarHeader>
          <Link
            href={"/dashboard"}
            className="flex flex-row items-center gap-2"
          >
            {state === "expanded" && (
              <span className="text-xl font-semibold tracking-wide text-nowrap">
                Social Club
              </span>
            )}
          </Link>
        </SidebarHeader>

        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarMenu className="space-y-2">
            <SidebarMenuButton render={<Link href={"/pedidos"} />}>
              <div className="p-1 rounded-lg text-white bg-primary">
                <ListOrdered />
              </div>
              {state === "expanded" && (
                <span className="text-md capitalize">Pedidos</span>
              )}
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  );
};
