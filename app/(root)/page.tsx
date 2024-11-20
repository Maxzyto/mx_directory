/* eslint-disable @typescript-eslint/no-unused-vars */
import SearchForm from "@/components/SearchForm"
import StartupCard from '@/components/StartupCard';
import { title } from 'process';
import { StartupTypeCard } from '@/components/StartupCard';
import {STARTUPS_QUERY} from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query

  const posts = await client.fetch(STARTUPS_QUERY);

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _Id: 1, name:"Maxwell" },
  //     _id: 1,
  //     description: "This is a description.",
  //     image:
  //       "https://www.istockphoto.com/photo/robot-assistant-vacuuming-gm1924607771-555584833?utm_campaign=srp_photos_bottom&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fwe-roboots&utm_medium=affiliate&utm_source=unsplash&utm_term=we+roboots%3A%3A%3A",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

  return (
    <>
      <section className='pink_container'>
        <h1 className='heading'>Pitch your Startup, <br /> Connect with Entrepreneurs</h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className='section_container'>
        <p className='text-30-semibold'>
            {query ? `Search results for "${query}"` : `All Startups`}
        </p>

        <ul className='mt-7 card_grid'>
          {
            posts?.length > 0 ? (
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              posts.map((post: StartupTypeCard) => (
                <StartupCard key={post?._id} post={post} />
              ))
            ):(
              <p className='no-results'>No startups found</p>
            )}
        </ul>
      </section>
     
    </>
  );
}
