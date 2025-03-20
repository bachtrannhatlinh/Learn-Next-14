import {
  IconBook,
  IconComment,
  IconExplore,
  IconOrder,
  IconPlay,
  IconUser,
} from "@/components/icons";
import { TMenuItem } from "@/types";

export const menuItem: TMenuItem[] = [
  {
    url: "/",
    title: "Khám Phá",
    icon: <IconPlay className="size-5" />,
  },
  {
    url: "/book",
    title: "Khu vực học tập",
    icon: <IconBook className="size-5" />,
  },
  {
    url: "/manage/explore",
    title: "Quản lý khoá học",
    icon: <IconExplore className="size-5" />,
  },
  {
    url: "/manage/user",
    title: "Quản lý thành viên",
    icon: <IconUser className="size-5" />,
  },
  {
    url: "/manage/order",
    title: "Quản lý đơn hàng",
    icon: <IconOrder className="size-5" />,
  },
  {
    url: "/manage/comment",
    title: "Quản lý bình luận",
    icon: <IconComment className="size-5" />,
  },
];
