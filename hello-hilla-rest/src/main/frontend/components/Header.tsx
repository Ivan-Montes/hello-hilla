import { Icon } from "@vaadin/react-components";

function Header() {
  return (
    <div className="flex p-m gap-m items-center" slot="drawer">
      <Icon icon="vaadin:cubes" className="text-primary icon-l" />
      <span className="font-semibold text-l">Walking Skeleton</span>
    </div>
  );
}
export default Header;

