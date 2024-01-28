import localFont from "next/font/local";
import "./globals.css";

const yekanFont = localFont({
  src: "./YekanBakh-Medium.woff2",
});

export const metadata = {
  title: "Library management",
  description: "Manage library as easy as possible.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="rtl">
      <body className={yekanFont.className}>{children}</body>
    </html>
  );
}
