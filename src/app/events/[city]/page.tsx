import EventList from '@/components/event-list';
import H1 from '@/components/h1';
import { Suspense } from 'react';
import { capitalize } from '@/lib/utils';
import { Metadata } from 'next';
import LoadingCity from '@/components/loading-city';
import { z } from 'zod';

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: {
    page: string | string[] | undefined;
  };
};

const parseNumberSchema = z.coerce.number().int().positive().optional();

export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  return {
    title: city === 'all' ? 'All Events' : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  // const page = searchParams.page || 1;
  const parsedPage = parseNumberSchema.safeParse(searchParams.page);
  if (!parsedPage.success) {
    throw new Error('Invalid page number');
  }

  return (
    <main className='flex flex-col items-center py-24 px-[20px] min-h-[110vh]'>
      <H1 className='mb-28'>
        {city === 'all' && 'All Events'}
        {city !== 'all' && `Events in ${capitalize(city)}`}
      </H1>

      <Suspense key={city + parsedPage.data} fallback={<LoadingCity />}>
        <EventList city={city} page={parsedPage.data} />
      </Suspense>
    </main>
  );
}
