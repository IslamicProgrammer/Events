import Link from 'next/link';
import { ReactNode, FC } from 'react';
import calsses from './button.module.css';

interface ButtonProps {
  chidling: ReactNode;
  link: string;
}

const Button: FC<ButtonProps> = ({ children, link }) => {
  return (
    <Link href={link}>
      <a className={calsses.btn}>{children}</a>
    </Link>
  );
};

export default Button;
