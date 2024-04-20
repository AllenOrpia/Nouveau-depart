import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import ThemeProvider from "@/providers/theme-provider";
import AuthProvider from "@/providers/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nouveau depart",
  description: "Blogs of allen's journey transitioning into a career in tech",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 min-w-[100vw] `}
      >
        <AuthProvider>
          <ThemeContextProvider>
            <ThemeProvider>
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
