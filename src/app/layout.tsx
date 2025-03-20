"use client";

import "@/app/styles/global.css";
import { ClerkProvider } from "@clerk/nextjs";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
