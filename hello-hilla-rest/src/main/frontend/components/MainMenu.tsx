import { createMenuItems } from '@vaadin/hilla-file-router/runtime.js';
import { useLocation, useNavigate } from 'react-router';
import { SideNav } from '@vaadin/react-components/SideNav.js';
import { SideNavItem } from '@vaadin/react-components/SideNavItem.js';
import { Icon } from '@vaadin/react-components/Icon.js';

function MainMenu() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <SideNav className="mx-m"
             onNavigate={({ path }) => path != null && navigate(path)}
             location={location}>
      {createMenuItems().map(({ to, icon, title }) => ( 
        <SideNavItem path={to} key={to}>
          {icon && 
            <Icon icon={icon} slot="prefix" />} 
          {title}
        </SideNavItem>
      ))}
    </SideNav>
  );
}

export default MainMenu;