'use client'

import "@/app/styles/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import { manrope } from "./components/fonts";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [fontClass, setFontClass] = useState("");

  useEffect(() => {
    setFontClass(manrope.className); // Chỉ cập nhật sau khi render trên client
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={fontClass || ""}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
