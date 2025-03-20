"use client";

import "@/app/styles/global.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ClerkProvider>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
