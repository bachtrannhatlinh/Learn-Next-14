import React from "react";
import Sidebar from "../components/layout/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="wrapper grid grid-cols-[300px_minmax(900px,_1fr)] h-screen">
      <Sidebar />
      <main>{children}</main>
    </div>
  );
};

export default layout;
