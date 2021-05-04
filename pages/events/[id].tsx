import { useRouter } from 'next/router';
import { getEventById } from '../../data';
import EventContent from '../../components/event-detail/event-content';
import EventLogistics from '../../components/event-detail/event-logistics';
import EventSummary from '../../components/event-detail/event-summary';
import { FC } from 'react';

const AllEventsPage: FC = () => {
  const router = useRouter();

  const eventId = router.query.id;
  const event = getEventById(eventId);

  if (!event) {
    return (
      <p
        style={{
          textAlign: 'center',
          lineHeight: '100vh',
          fontWeight: 'bold',
          fontSize: '30px',
          margin: 0,
        }}
      >
        Event not found
      </p>
    );
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        image={event.image}
        imageAlt={event.title}
        address={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
};

export default AllEventsPage;
