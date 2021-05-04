import { FC, Fragment, ReactNode } from 'react';
import Header from './main-header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
