import { FC } from 'react';
import EventItem from './event-item';
import classes from './event-list.module.css';

interface Event {
  id: string;
  image: string;
  date: string;
  location: string;
  title: string;
}

interface EventListProps {
  items: Array<Event>;
}

const EventList: FC<EventListProps> = ({ items }) => {
  return (
    <ul className={classes.list}>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          image={item.image}
          date={item.date}
          location={item.location}
          title={item.title}
        />
      ))}
    </ul>
  );
};

export default EventList;
