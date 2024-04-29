import "@/app/ui/global.css";
import { open_sans } from "@/app/ui/fonts";
import Navbar from "@/app/ui/components/Navbar";
import Footer from "@/app/ui/components/Footer";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Brightminds Edu</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${open_sans.className} antialiased`}>
        <ToastContainer position="top-center" />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/flowbite@2.3.0/dist/flowbite.min.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
