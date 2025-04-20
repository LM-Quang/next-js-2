import type { Metadata } from "next";
import "./globals.css";
import MainHeader from "@/components/MainHeader";

export const metadata: Metadata = {
   title: "Next App",
   description: "Next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body>
            <div id="page">
               <MainHeader />
               {children}
            </div>
         </body>
      </html>
   );
}
