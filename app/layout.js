import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio | Muhammad Rayhan Khadafi",
  description: "Personal Portofolio Website ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Font Awesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>

      <body className="bg-white text-black antialiased">
        {children}
      </body>
    </html>
  );
}