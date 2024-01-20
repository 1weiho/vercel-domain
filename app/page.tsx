import SearchForm from '@/components/search-form';
import VercelLogo from '@/components/vercel-logo';

const Home = () => {
  return (
    <main className="flex flex-col h-screen items-center">
      <VercelLogo className="h-16 w-16 mt-80" />
      <h1 className="text-3xl font-bold mt-4">Vercel Domain Checker</h1>
      <SearchForm className="mt-6" />
    </main>
  );
};

export default Home;
