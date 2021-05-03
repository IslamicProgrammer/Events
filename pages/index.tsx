import { FC } from 'react';
import EventList from '../components/events/event-list';
import { getFeaturedEvents } from '../data';

const Home: FC = () => {
  const items = getFeaturedEvents();

  return (
    <>
      <EventList items={items} />
    </>
  );
};

export default Home;
