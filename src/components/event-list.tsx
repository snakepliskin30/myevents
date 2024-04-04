import EventCard from './event-card';
import { getEvents } from '@/lib/server-utils';
import PaginationControl from './pagination-control';

type EventListProps = {
  city: string;
  page?: number;
};

export default async function EventList({ city, page = 1 }: EventListProps) {
  const { events, totalCount } = await getEvents(city, page);
  const previousPath = page > 1 ? `/events/${city}/?page=${page - 1}` : '';
  const nextPath =
    totalCount > 6 * page ? `/events/${city}/?page=${page + 1}` : '';

  return (
    <section className='flex gap-10 flex-wrap justify-center max-w-[1100px] px-[20px]'>
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <PaginationControl previousPath={previousPath} nextPath={nextPath} />
    </section>
  );
}
