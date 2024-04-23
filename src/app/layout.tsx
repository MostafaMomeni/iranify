import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "@/components/template/Header/Header";
import Player from "@/components/template/Player/Player";
import { MusicContextProvider } from "@/context/MuiscContext";
import Menu from "@/components/template/Menu/Menu";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <MusicContextProvider>
        <body className={inter.className}>
          <div className="parent-layout">
            <div className="header-layout">
              <Menu />
            </div>
            <div className="main-layout">
              <Header />
              {children}
            </div>
          </div>
          <Player />
        </body>
      </MusicContextProvider>
    </html>
  );
}
