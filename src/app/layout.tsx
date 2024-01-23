import type { Metadata } from 'next';
import { Bebas_Neue, Noto_Sans } from 'next/font/google';
import { CSSReset } from '../lib/chakra/css-reset';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Providers } from './providers';

const noto = Noto_Sans({ subsets: ['latin'], variable: '--font-noto' });
const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' });

export const metadata: Metadata = {
  title: 'Philip Yun',
  description: 'Philip Yun dot com',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${noto.variable} ${bebas.variable}`} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <CSSReset />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
