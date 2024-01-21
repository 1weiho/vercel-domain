'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Loader2, Search } from 'lucide-react';
import { checkDomainExist } from '@/action/check-domain';
import { useState } from 'react';
import { toast } from 'sonner';

interface SearchFormProps {
  className?: string;
}

const SearchForm = ({ className }: SearchFormProps) => {
  const [searchAppName, setSearchAppName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);

  const handleSubmit = async () => {
    if (!searchAppName) {
      toast.error('Please enter app name');
      return;
    }
    setIsLoading(true);
    try {
      const result = await checkDomainExist(searchAppName);
      setIsAvailable(!result);
    } catch (error) {
      toast.error('Something went wrong');
    }
    setIsLoading(false);
  };

  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="flex items-center relative">
        <Input
          value={searchAppName}
          onChange={(e) => setSearchAppName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit();
            }
          }}
          className="bg-white"
        />
        <span className="text-lg lg:text-xl ml-2">.vercel.app</span>
        {isAvailable !== null &&
          (isAvailable ? (
            <span className="bg-green-200 text-xs font-medium whitespace-nowrap px-1 py-0.5 rounded-lg text-foreground absolute -bottom-7">
              🎉 Available
            </span>
          ) : (
            <span className="bg-red-200 text-xs font-medium whitespace-nowrap px-1 py-0.5 rounded-lg text-foreground absolute -bottom-7">
              ❌ Unavailable
            </span>
          ))}
      </div>
      <Button
        className="mt-12 w-fit"
        onClick={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        ) : (
          <Search className="h-4 w-4 mr-2" />
        )}
        Check
      </Button>
    </div>
  );
};

export default SearchForm;
