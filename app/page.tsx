import { simpleBlogCard } from './lib/interface';
import { client } from './lib/sanity';
import { BlogList } from './components/BlogList';

export const revalidate = 30; // revalidate at most 30 seconds

async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt desc) {
    title, 
      smallDescription,
      "currentSlug": slug.current,
      titleImage
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();

  return (
    <div className="flex flex-col w-full h-screen items-center">
      <BlogList data={data} />
      {/* <Footer /> */}
    </div>
  );
}
