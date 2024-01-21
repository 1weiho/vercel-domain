import Nav from '@/components/nav';
import SearchForm from '@/components/search-form';
import VercelLogo from '@/components/vercel-logo';
import { Metadata } from 'next';

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
    <main className="flex flex-col h-screen items-center">
      <Nav />
      <VercelLogo className="h-16 w-16 mt-56 lg:mt-72" />
      <h1 className="text-2xl lg:text-3xl font-bold mt-4">
        Vercel Domain Checker
      </h1>
      <SearchForm className="mt-6" />
    </main>
  );
};

export default Home;
