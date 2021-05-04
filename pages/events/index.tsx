import { useRouter } from 'next/router';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../data';

const EventsPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  const findEventHandler = (year: string, month: string): void => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <>
      <EventSearch findEvent={findEventHandler} />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
