import { MenuBarItemSelectedEvent } from "@vaadin/react-components";
import { MenuBar } from "@vaadin/react-components";
import { Avatar } from "@vaadin/react-components";

function UserMenu() {

	  const items = [
    {
      component: (
        <>
          <Avatar theme="xsmall"
                  name="John Smith"
                  colorIndex={5} className="mr-s" />
          Jane Smith
        </>
      ),
      children: [
        { text: 'View Profile', action: () => console.log('View Profile') },
        { text: 'Manage Settings', action: () => console.log('Manage Settings') },
        { text: 'Logout', action: () => console.log('Logout') },
      ],
    },
  ];
  const onItemSelected = (event: MenuBarItemSelectedEvent) => {
    const action = (event.detail.value as any).action;
    if (action) {
      action();
    }
  };
  return (
    <MenuBar theme="tertiary-inline"
             items={items}
             onItemSelected={onItemSelected}
             className="m-m" slot="drawer" />
  );
}

export default UserMenu;
