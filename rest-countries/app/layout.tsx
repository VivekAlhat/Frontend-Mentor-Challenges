import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import Header from "@/app/ui/header";
import "./globals.css";

const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "600", "800"],
});

export const metadata: Metadata = {
  title: "Where in the world?",
  description: "A dashboard to view different countries in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        <main className="min-h-screen bg-very-light-gray">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
