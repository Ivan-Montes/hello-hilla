import React from 'react';
import { Chart } from 'react-google-charts';

interface GeneralUsageProps {
	generalData: Record<string, string>;
}

const GeneralUsageChart: React.FC<GeneralUsageProps> = ({ generalData }) => {

	const cpuLoadPer100: number = parseFloat(generalData["cpuLoadPer100"] ?? 0);
	const usedMemPer100: number = parseFloat(generalData["usedMemPer100"] ?? 0);
	const usedSwapMemPer100: number = parseFloat(generalData["usedSwapMemPer100"] ?? 0);

	const data = [
		["Label", "Value"],
		["CPU", cpuLoadPer100],
		["Memory", usedMemPer100],
		["Swap", usedSwapMemPer100],
	];

	const options = {
		width: 400,
		height: 120,
		redFrom: 90,
		redTo: 100,
		yellowFrom: 75,
		yellowTo: 90,
		minorTicks: 5,
	};

	return (
		<div>
			<Chart
				chartType="Gauge"
				width="100%"
				height="100%"
				data={data}
				options={options}
			/>
		</div>
	);
};

export default GeneralUsageChart;
