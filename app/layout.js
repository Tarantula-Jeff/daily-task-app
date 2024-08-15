import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Daily Task App",
  description: "For Recocrding my work task",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-fuchsia-500  flex flex-col justify-center items-center`}>{children}</body>
    </html>
  );
}
