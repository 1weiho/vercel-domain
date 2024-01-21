import { Button } from '@/components/ui/button';
import { Github, Moon, Twitter } from 'lucide-react';
import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex w-full justify-end px-4 lg:px-12 h-16 items-center space-x-2 text-muted-foreground">
      <Button asChild size="icon" variant="ghost">
        <Link
          href="https://github.com/davidho0403/vercel-domain"
          target="_blank"
        >
          <Github className="h-6 w-6" />
        </Link>
      </Button>
      <Button asChild size="icon" variant="ghost">
        <Link href="https://twitter.com/1weiho" target="_blank">
          <Twitter className="h-6 w-6" />
        </Link>
      </Button>
      {/* <Button size="icon" variant="ghost">
        <Moon className="h-6 w-6" />
      </Button> */}
    </nav>
  );
};

export default Nav;
