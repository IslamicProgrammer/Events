import Link from 'next/link';
import classes from './event-item.module.css';

const EventItem = ({ title, image, date, location, id }) => {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formmatedAddress = location.replace(',', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={'/' + image} alt={title} />
      <div>
        <div className={classes.content}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formmatedAddress}</address>
          </div>
        </div>
      </div>
      <div className={classes.actions}>
        <Link href={exploreLink}>Explore Event</Link>
      </div>
    </li>
  );
};

export default EventItem;
