import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="w-full realative flex items-center justify-between max-w-5xl mx-auto py-5 px-4 md:px-0">
      <Link href={'/'} className="font-bold text-4xl">
        Elland<span className="text-primary">Blog</span>
      </Link>
      <div className="flex flex-row gap-2">
        <ModeToggle />
        <Button>Site Elland</Button>
      </div>
    </nav>
  );
}
