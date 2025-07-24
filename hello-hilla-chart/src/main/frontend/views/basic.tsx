import MemoryUsageChartContainer from "Frontend/containers/MemoryUsageContainer"
import MemoryUsageTxtContainer from "Frontend/containers/MemoryUsageTxtContainer"
import OSInfoContainer from "Frontend/containers/OSInfoContainer"
import CpuInfoContainer from "Frontend/containers/CpuInfoContainer"
import { HorizontalLayout, VerticalLayout } from "@vaadin/react-components";
import GeneralUsageContainer from "Frontend/containers/GeneralUsageContainer";


export default function MainView() {
  return (
    <VerticalLayout theme="spacing padding" style={{ width: '100%', alignItems: 'stretch' }}>
      <h1 style={{ textAlign: 'center' }}>Main</h1>

      <OSInfoContainer />
	  <HorizontalLayout theme="spacing padding" style={{ justifyContent: 'center' }}>
        <GeneralUsageContainer />
	  </HorizontalLayout>

      <HorizontalLayout theme="spacing padding">
        <CpuInfoContainer />
        <MemoryUsageTxtContainer />
      </HorizontalLayout>

      <MemoryUsageChartContainer />
    </VerticalLayout>
  );
}

