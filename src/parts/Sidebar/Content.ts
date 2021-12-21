//  Data Sidebar
import { ButtonSidebarProps } from "../../components/ButtonSidebar";
const SidebarContent: ButtonSidebarProps[] = [
  {
    icon: "/icons/DASHBOARD.svg",
    text: "Dashboard",
    isActive: true,
    isExpand: false,
  },
  {
    icon: "/icons/TRANSACTION.svg",
    text: "Transaction",
    isActive: false,
    isExpand: false,
  },
  {
    icon: "/icons/NOTE.svg",
    text: "Note",
    isActive: false,
    isExpand: false,
  },
  {
    icon: "/icons/GEAR.svg",
    text: "Gear",
    isActive: false,
    isExpand: false,
  },
  {
    icon: "/icons/BOOKMARKS.svg",
    text: "Bookmarks",
    isActive: false,
    isExpand: false,
  },
];

export default SidebarContent;
