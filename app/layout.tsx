import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400","500"],
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400","600", "500"],
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "National Reforms Ambassadors",
  description: "Build to Mobilze Nigerians for the Reform Continuity Agenda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
