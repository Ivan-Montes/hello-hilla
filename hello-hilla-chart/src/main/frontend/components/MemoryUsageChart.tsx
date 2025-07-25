import React from 'react';
import { Chart } from 'react-google-charts';

interface MemoryUsageProps {
	memoryData: Record<string, string>;
}

const roundToTwoDecimals = (value: number): number => {
	return Math.round(value * 100) / 100;
};

const MemoryUsageChart: React.FC<MemoryUsageProps> = ({ memoryData }) => {
	const totalMem = roundToTwoDecimals(parseFloat(memoryData["totalMem"] ?? "0"));
	const avaiMem = roundToTwoDecimals(parseFloat(memoryData["avaiMem"] ?? "0"));
	const usedMem = roundToTwoDecimals(parseFloat(memoryData["usedMem"] ?? "0"));
	const totalSwapMem = roundToTwoDecimals(parseFloat(memoryData["totalSwapMem"] ?? "0"));
	const usedSwapMem = roundToTwoDecimals(parseFloat(memoryData["usedSwapMem"] ?? "0"));
	const avaiSwapMem = roundToTwoDecimals(parseFloat(memoryData["avaiSwapMem"] ?? "0"));

	const data = [
		["Kind", "Memory", { role: "style" }],
		["Total", totalMem, "cyan"],
		["Available", avaiMem, "green"],
		["Used", usedMem, "yellow"],
		["Total Swap", totalSwapMem, "blue"],
		["Available Swap", avaiSwapMem, "#9EEB47"],
		["Used Swap", usedSwapMem, "#F0BF4C"],
	];

	return (
		<div>
			<Chart
				chartType="ColumnChart"
				chartVersion="51"
				width="100%"
				height="400px"
				data={data}
			/>
		</div>
	);
};

export default MemoryUsageChart;
