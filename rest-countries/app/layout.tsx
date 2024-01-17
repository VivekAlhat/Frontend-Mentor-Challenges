import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/providers/theme-provider";
import Header from "@/components/header";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito_sans.className}>
        <ThemeProvider>
          <main className="min-h-screen bg-white dark:bg-dark-mode-bg">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
