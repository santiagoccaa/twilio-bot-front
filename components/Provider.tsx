// React Imports
import type { ReactNode } from "react";
import { SidebarProvider } from "./ui/sidebar";
import { TooltipProvider } from "./ui/tooltip";
import { AppSidebar } from "./layout";

type Props = {
  children: ReactNode;
  sidebarDefaultOpen?: boolean;
};

const Providers = ({ children, sidebarDefaultOpen }: Props) => {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={sidebarDefaultOpen}>
        <AppSidebar />
        {children}
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default Providers;
