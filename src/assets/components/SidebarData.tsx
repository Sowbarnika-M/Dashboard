import { AiOutlineHome, AiOutlineTable, AiOutlinePieChart, AiOutlineBarChart } from "react-icons/ai";
import { SidebarItem } from "../../model/Sidebaritem";

export const SidebarData: SidebarItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    title: "Piechart",
    path: "/piechart",
    icon: <AiOutlinePieChart />
  },
  {
    title: "Barchart",
    path: "/barchart",
    icon: <AiOutlineBarChart />
  },
  {
    title: "Table",
    path: "/table",
    icon: <AiOutlineTable />,
  },
];
