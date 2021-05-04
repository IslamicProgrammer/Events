import { ReactNode } from 'react';
import classes from './error-alert.module.css';

interface ErrorAlertProps {
  children: ReactNode;
}

function ErrorAlert(props) {
  return <div className={classes.alert}>{props.children}</div>;
}

export default ErrorAlert;
