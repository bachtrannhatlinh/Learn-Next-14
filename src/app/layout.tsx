"use client";

import "@/app/styles/global.css";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { ToastContainer } from 'react-toastify';

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
            <ToastContainer 
              autoClose={2000}
              hideProgressBar={true}
              className="text-sm font-medium"
              position="top-right"
            />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
