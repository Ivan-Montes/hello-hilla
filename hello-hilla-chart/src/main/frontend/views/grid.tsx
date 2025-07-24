import MemoryUsageChartContainer from "Frontend/containers/MemoryUsageContainer"
import MemoryUsageTxtContainer from "Frontend/containers/MemoryUsageTxtContainer"
import OSInfoContainer from "Frontend/containers/OSInfoContainer"
import CpuInfoContainer from "Frontend/containers/CpuInfoContainer"
import GeneralUsageContainer from "Frontend/containers/GeneralUsageContainer";

export default function MainView() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#ccc' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Grid</h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        <div style={cardStyle}>
          <OSInfoContainer />
        </div>

        <div style={cardStyle}>
          <CpuInfoContainer />
        </div>

        <div style={cardStyle}>
          <MemoryUsageTxtContainer />
        </div>

		<div style={{ ...cardStyle, gridColumn: '1 / -1', display: 'flex', justifyContent: 'center' }}>
		  <div style={{ width: '100%', maxWidth: '400px' }}>
		    <GeneralUsageContainer />
		  </div>
		</div>

        <div style={{ ...cardStyle, gridColumn: '1 / -1' }}>
          <MemoryUsageChartContainer />
        </div>
		
      </div>
    </div>
  );
}

const cardStyle = {
  backgroundColor: '#ffffff',
  padding: '1rem',
  borderRadius: '8px',
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
};
