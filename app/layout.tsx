import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Navbar from '@/app/ui/components/Navbar'
import Footer from '@/app/ui/components/Footer'
import Script from 'next/script';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Brightminds School of Learning</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="mt-[67px] md:mt-[115px]">
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