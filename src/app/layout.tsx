"use client";

import { useEffect, useState } from "react";
import "@/app/styles/global.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          {mounted ? (
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>
          ) : (
            <>{children}</>
          )}
        </body>
      </html>
    </ClerkProvider>
  );
}
