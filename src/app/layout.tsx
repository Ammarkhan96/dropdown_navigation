import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${epilogue.className}  ${
          process.env.NODE_ENV == "development" ? "debug-screens" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}