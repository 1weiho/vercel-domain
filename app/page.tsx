import Nav from '@/components/nav';
import SearchForm from '@/components/search-form';
import VercelLogo from '@/components/vercel-logo';
import { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  metadataBase: new URL('https://vercel-domain.vercel.app/'),
  title: 'Vercel Domain Checker',
  description: 'Check if a *.vercel.app domain is available on Vercel',
  openGraph: {
    title: 'Vercel Domain Checker',
    description: 'Check if a *.vercel.app domain is available on Vercel',
    url: 'https://vercel-domain.vercel.app/',
    type: 'website',
    images: '/og-image.png',
  },
};

const Home = () => {
  return (
    <main className="flex flex-col h-dvh items-center">
      <Nav />
      <div className="flex flex-col items-center min-h-0 grow justify-center">
        <VercelLogo className="h-16 w-16 -mt-16" />
        <h1 className="text-2xl lg:text-3xl font-bold mt-4">
          Vercel Domain Checker
        </h1>
        <SearchForm className="mt-6" />
      </div>
    </main>
  );
};

export default Home;
