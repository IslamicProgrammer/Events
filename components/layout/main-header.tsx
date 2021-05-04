import Link from 'next/link';
import classes from './main-header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">NextEvens</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/events">Brovse All Events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
