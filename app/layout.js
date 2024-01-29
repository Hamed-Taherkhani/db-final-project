import { Roboto } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Library management",
  description: "Manage library as easy as possible.",
};

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
