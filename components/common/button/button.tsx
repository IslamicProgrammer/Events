import Link from 'next/link';
import { ReactNode, FC } from 'react';
import calsses from './button.module.css';

interface ButtonProps {
  children: ReactNode;
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={calsses.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={calsses.btn}>
      {children}
    </button>
  );
};

export default Button;
