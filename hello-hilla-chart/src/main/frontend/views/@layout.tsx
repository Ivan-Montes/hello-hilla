import { Outlet } from 'react-router';
import { AppLayout } from '@vaadin/react-components';
import Header from 'Frontend/components/Header';

export default function MainLayout() {
  return (
    <AppLayout primarySection="drawer">
	  <Header />
      <Outlet />
    </AppLayout>
  );
}