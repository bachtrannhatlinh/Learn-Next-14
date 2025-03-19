import { IconExplore, IconPlay } from "@/app/components/icons";
import { TMenuItem } from "@/app/types";

export const menuItem: TMenuItem[] = [
  {
    url: "/",
    title: "Home",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/explore",
    title: "Explore",
    icon: <IconExplore className="size-5" />
  },
];
