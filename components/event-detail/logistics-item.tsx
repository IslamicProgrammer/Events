import { ReactNode } from 'react';
import classes from './logistics-item.module.css';

interface LogisticsItemProps {
  icon: React.FC;
  children: ReactNode;
}

function LogisticsItem(props: LogisticsItemProps) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
