import { fullBlog } from '@/app/lib/interface';
import { client, urlFor } from '@/app/lib/sanity';
import { Skeleton } from '@/components/ui/skeleton';
import { PortableText } from 'next-sanity';
import Image from 'next/image';

export const revalidate = 30; // revalidate at most 30 seconds

async function getData(slug: string) {
  const query = `
  *[_type == 'blog' && slug.current == '${slug}'] {
    "currentSlug": slug.current,
      title,
      content,
      titleImage
  }[0]
  `;

  const data = await client.fetch(query);
  return data;
}

export default async function BlogArticle({
  params,
}: {
  params: { slug: string };
}) {
  const data: fullBlog = await getData(params.slug);
  return (
    <div className="mt-8 flex flex-col items-center">
      <h1>
        <span className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
          Elland - Blog
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-bold tracking-tight sm:text-4xl">
          {data.title}
        </span>
      </h1>
      {urlFor(data.titleImage).url().length !== 0 ? (
        <Image
          priority
          src={urlFor(data.titleImage).url()}
          alt="title-image"
          width={400}
          height={400}
          className="rounded-lg mt-8 border"
        />
      ) : (
        <Skeleton className="w-[400px] h-[400px] rounded-lg mt-8 border" />
      )}

      <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
  );
}
