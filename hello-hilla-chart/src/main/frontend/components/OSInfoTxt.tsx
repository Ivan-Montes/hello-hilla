import React from 'react';

interface OsUsageProps {
	osData: string[];
}

const OsInfoTxt: React.FC<OsUsageProps> = ({ osData }) => {

	return (
		<div>
			<p>OS</p>
			<div>
				<ul>{osData.map((item) => (
					<li key={item}>{item}</li>
				))}</ul>
			</div>

		</div>
	);
};

export default OsInfoTxt;
