import { useRouter } from 'next/router';
import Button from '../../components/common/button/button';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import ErrorAlert from '../../components/common/error-alert/error-alert';
import { getFilteredEvents } from '../../data';

const FilteredEvents = () => {
  const router = useRouter();
  const filterDate = router.query.slug;

  const filteredYear = +filterDate?.[0];
  const filteredMonth = +filterDate?.[1];

  if (!filterDate) {
    return (
      <p className="center" style={{ lineHeight: '90vh' }}>
        Loading...
      </p>
    );
  }

  if (
    isNaN(filteredYear) ||
    isNaN(filteredMonth) ||
    filteredYear > 2030 ||
    filteredMonth < 1 ||
    filteredMonth > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p className="center" style={{ lineHeight: '10vh' }}>
            Invalid Filter! Please ajust your values !!!
          </p>
        </ErrorAlert>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <Button link="/events">All evets</Button>
        </div>
      </>
    );
  }

  const filteredEvnts = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvnts || filteredEvnts.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p className="center" style={{ lineHeight: '10vh' }}>
            No Events for this date!
          </p>
        </ErrorAlert>
        <div style={{ width: '90%', margin: '0 auto' }}>
          <Button link="/events">All evets</Button>
        </div>
      </>
    );
  }

  const date = new Date(filteredYear, filteredMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvnts} />
    </>
  );
};

export default FilteredEvents;
