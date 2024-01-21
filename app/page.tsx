import Nav from '@/components/nav';
import SearchForm from '@/components/search-form';
import VercelLogo from '@/components/vercel-logo';

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
