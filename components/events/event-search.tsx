import React, { FC, useRef } from 'react';
import Button from '../common/button/button';
import classes from './event-search.module.css';

interface EventSearchProps {
  findEvent: (year: string, month: string) => void;
}

const EventSearch: FC<EventSearchProps> = (props) => {
  const yearInputRef = useRef<HTMLSelectElement | null>(null);
  const monthInputRef = useRef<HTMLSelectElement | null>(null);

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    props.findEvent(yearInputRef.current.value, monthInputRef.current.value);
  };

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" ref={yearInputRef}>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" ref={monthInputRef}>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="12">November</option>
            <option value="11">December</option>
          </select>
        </div>
        <Button>Find Event</Button>
      </div>
    </form>
  );
};

export default EventSearch;
