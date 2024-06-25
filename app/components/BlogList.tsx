import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { simpleBlogCard } from '../lib/interface';
import { HeaderBlog } from './Header';
import { urlFor } from '../lib/sanity';
interface BlogList {
  data: simpleBlogCard[];
}
export function BlogList({ data }: BlogList) {
  const mostRecentPost = data[0];
  return (
    <div className="w-full h-full flex flex-col gap-24 max-w-5xl items-center px-4 md:px-0">
      <HeaderBlog
        currentSlug={mostRecentPost.currentSlug}
        smallDescription={mostRecentPost.smallDescription}
        title={mostRecentPost.title}
        titleImage={mostRecentPost.titleImage}
      />
      <div className="flex flex-col w-full gap-4">
        <div className="w-full flex flex-col">
          <p className="text-2xl font-bold">Últimos posts</p>
          <p className="text-lg">
            Explore os melhor conteúdos a respeito do univero Elland
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 pb-12 gap-5">
          {data.map((post, index) => {
            return (
              <Card key={index}>
                <Image
                  src={urlFor(post.titleImage).url()}
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-t-lg h-[200px] object-cover"
                />
                <CardContent className="mt-5">
                  <h3 className="text-lg line-clamp-2 font-bold">
                    {post.title}
                  </h3>
                  <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                    {post.smallDescription}
                  </p>
                  <Button asChild className="w-full mt-7">
                    {/* <Link href={`/blog/${post.currentSlug}`}> */}
                    Read More
                    {/* </Link> */}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
