import { FC } from 'react';
import Button from '../common/button/button';
import classes from './results-title.module.css';

interface ResultsTitleProps {
  date: Date;
}

const ResultsTitle: FC<ResultsTitleProps> = (props) => {
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link="/events">Show all events</Button>
    </section>
  );
};

export default ResultsTitle;
