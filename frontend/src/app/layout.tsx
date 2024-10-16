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
                {/* Modified background container for better responsive behavior */}
                <div className="w-full h-full md:min-w-[768px] lg:min-w-[1440px] min-h-[500px] md:min-h-[700px] lg:min-h-[918px]">
                  <BgSlider className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="relative z-10 flex flex-col min-h-screen w-full">
                <Header2 />
                {/* Adjusted padding for different screen sizes */}
                <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto 
                  md:max-w-[720px] lg:max-w-[960px] xl:max-w-7xl">
                  {children}
                </main>
                {/* Adjusted footer margin for different screen sizes */}
                <Footer className="mt-[-45px] md:mt-[-35px] sm:mt-[-25px]" />
              </div>
            </div>
          ) : (
            <div className="flex flex-col min-h-screen w-full">
              <Header1 />
              {/* Adjusted padding and max-width for different screen sizes */}
              <main className="flex-grow w-full px-4 sm:px-6 lg:px-8 
                max-w-7xl mx-auto md:max-w-[720px] lg:max-w-[960px] xl:max-w-7xl">
                {children}
              </main>
              {/* Adjusted footer margin for different screen sizes */}
              <Footer className="mt-[-35px] md:mt-[-45px] sm:mt-[-25px]" />
            </div>
          )}
          <ScrollTop />
        </Providers>
      </body>
    </html>
  );
}