import { Icon } from "@vaadin/react-components";

function Header() {
  return (
    <div className="flex p-m gap-m items-center" slot="drawer">
      <Icon icon="vaadin:dashboard" className="text-primary icon-l" />
      <span className="font-semibold text-l">Magik Dash</span>
    </div>
  );
}
export default Header;

