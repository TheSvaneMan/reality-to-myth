import { Inter } from "next/font/google";
import "./globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Reality to Myth",
  description: "A friendly webapp used to help people empathise with plants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <section>
          <nav className='grid grid-cols-4 gap-2 w-screen bg-[#355835] text-white px-4 py-2 text-sm'>
            <a href='/' className='flex items-center justify-center border border-white'>Home</a>
            <a href='/experience' className='flex items-center justify-center border border-white'>Experience</a>
            <a href='/about' className='flex items-center justify-center border border-white'>About</a>
            <a href='/plant/1' className='flex items-center justify-center border border-white'>Sample</a>
          </nav>
          <main className='min-h-screen '>
            {children}
          </main>
        </section>

        <footer className='bg-[#355835] h-[240px] w-screen grid grid-cols-1 text-white p-8  sm:grid-cols-3 gap-4'>
          <div>
            <a href="/references">References</a>
          </div>
          <div>
            <a href="/research">Research</a>
          </div>
          <div>
            <a href="/about">About</a>
          </div>
        </footer>
      </body>

    </html>
  );
}
