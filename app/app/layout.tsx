import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import type { ReactNode } from "react";

export const metadata = {
  title: "UrbanCare",
  description: "Smart Citizen Complaint Portal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
