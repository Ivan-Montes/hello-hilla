import React from 'react';

interface CpuUsageProps {
	cpuData: string[];
}

const CpuInfoTxt: React.FC<CpuUsageProps> = ({ cpuData }) => {

	return (
		<div>
			<p>CPU</p>
			<div>
				<ul>{cpuData.map((item) => (
					<li key={item}>{item}</li>
				))}</ul>
			</div>

		</div>
	);
};

export default CpuInfoTxt;
