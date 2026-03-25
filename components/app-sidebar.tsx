"use client";

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import { Plus, Play, Send, Heart, House } from "lucide-react";
import type { SidebarData } from "@/types";
import { NavHeader } from "./nav-header";
import { NavMain } from "./nav-main";
import { NavFooter } from "./nav-footer";

const data: SidebarData = {
  user: {
    name: "ephraim",
    email: "ephraim@blocks.so",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      id: "create",
      title: "Create",
      url: "/post/create",
      icon: Plus,
      isActive: true,
    },
    {
      id: "home",
      title: "Home",
      url: "/post",
      icon: House,
      isActive: true,
    },
    {
      id: "reels",
      title: "Reels",
      url: "/post",
      icon: Play,
    },
    {
      id: "messages",
      title: "Messages",
      url: "/post",
      icon: Send,
    },
    {
      id: "notifications",
      title: "Notifications",
      url: "/post",
      icon: Heart,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="">
      <NavHeader data={data} />
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <NavFooter user={data.user} />
    </Sidebar>
  );
}
