import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/SharedLayout/Header';
import PageLoader from 'components/PageLoader';

const SharedLayout = () => {
  return (
    <div>
      <Header />

      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
