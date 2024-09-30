'use client'

import { usePathname } from 'next/navigation';
import { Poppins } from 'next/font/google';
import "./globals.css";
import Header1 from "./components/common/Header/Header1";
import Header2 from "./components/common/Header/Header2";
import Footer from "./components/common/Footer/Footer";
import ScrollTop from "./components/common/ScrollTop";
import BgSlider from "./components/home2/MainSlider/BgSlider";
import { Providers } from './Providers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400', '500', '600','700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isHome2 = pathname === '/home2';

  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased w-full overflow-x-hidden`}>
        <Providers>
          {isHome2 ? (
            <div className="relative min-h-screen w-full">
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="w-full h-full" style={{ minWidth: '1440px', minHeight: '918px' }}>
                  <BgSlider className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="relative z-10 flex flex-col min-h-screen w-full">
                <Header2 />
                <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                  {children}
                </main>
                <Footer className="mt-[-45px]" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col min-h-screen w-full">
              <Header1 />
              <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
              </main>
              <Footer className="mt-[-45px]" />
            </div>
          )}
          <ScrollTop />
        </Providers>
      </body>
    </html>
  );
}