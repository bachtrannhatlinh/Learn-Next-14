import React from "react";
import { menuItem } from "@/constants";
import ActiveLink from "@/components/common/ActiveLink";
import { TMenuItem } from "@/types";

export default function Sidebar() {
  function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
    return (
      <li>
        <ActiveLink url={url}>
          {icon}
          {title}
        </ActiveLink>
      </li>
    );
  }

  return (
    <div className="p-5 border-r border-gray-200 bg-white">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        Ucademy
      </a>
      <ul>
        {menuItem.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
}
