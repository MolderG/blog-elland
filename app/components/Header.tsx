import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { urlFor } from '../lib/sanity';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';

interface HeaderBlogpPros {
  title: string;
  smallDescription: string;
  currentSlug: string;
  titleImage: any;
}

export function HeaderBlog({
  smallDescription,
  title,
  currentSlug,
  titleImage,
}: HeaderBlogpPros) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6 items-center">
      <div className="w-full rounded-md">
        {urlFor(titleImage).url().length !== 0 ? (
          <Image
            src={urlFor(titleImage).url()}
            alt="image"
            width={500}
            height={500}
            className="rounded-lg h-[300px] object-cover shadow-md"
          />
        ) : (
          <Skeleton className="rounded-lg h-[300px] object-cover shadow-md" />
        )}
      </div>
      <div className="w-full flex flex-col">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-lg">{smallDescription}</p>
        <Button asChild className="w-full mt-7">
          <Link href={`/blog/${currentSlug}`}>Ler mais</Link>
        </Button>
      </div>
    </div>
  );
}
