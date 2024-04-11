import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nouveau depart",
  description: "Blogs of allen's journey transitioning into a career in tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50 text-gray-950 min-w-[100vw] pt-24`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}