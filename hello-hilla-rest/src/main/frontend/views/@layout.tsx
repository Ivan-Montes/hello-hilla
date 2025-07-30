import Header from '../components/Header';
import MainMenu from 'Frontend/components/MainMenu';
import UserMenu from 'Frontend/components/UserMenu';
import { Outlet } from 'react-router';
import {
  AppLayout,
  ProgressBar,
  Scroller,
} from '@vaadin/react-components';
import { Suspense } from 'react';

export default function MainLayout() {
  return (
    <AppLayout primarySection="drawer">
      <Header />
      <Scroller slot="drawer">
        <MainMenu />
      </Scroller>
      <UserMenu />
      <Suspense fallback={<ProgressBar indeterminate={true}
                className="m-0" />}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}