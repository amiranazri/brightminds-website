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
        <title>Brightminds School of Learning</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap"
          rel="stylesheet" // Use rel="stylesheet" for importing external CSS
        />
      </head>
      <body className={`${open_sans.className} antialiased`}>
        <ToastContainer position="top-center" />
        <div className="mt-[67px] md:mt-[115px]">
          <Navbar />
          <div className="min-h-screen">{children}</div>
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
