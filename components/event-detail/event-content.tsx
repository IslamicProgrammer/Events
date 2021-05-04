import React, { FC, JSXElementConstructor, ReactNode } from 'react';
import classes from './event-content.module.css';

interface EventContentProps {
  children: ReactNode;
}

const EventContent: FC<EventContentProps> = (props) => {
  return (
    <>
      <section className={classes.content}>{props.children}</section>
    </>
  );
};

export default EventContent;
