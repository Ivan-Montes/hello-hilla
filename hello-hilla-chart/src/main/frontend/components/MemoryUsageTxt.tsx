import React from 'react';
import { Chart } from 'react-google-charts';

interface MemoryUsageProps {
  memoryData: Record<string, string>;
}

const MemoryUsageTxt: React.FC<MemoryUsageProps> = ({ memoryData }) => {
  
  return (
    <div>
      <p>Memory</p>
      <ul>
        {Object.entries(memoryData).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
	  
    </div>
  );
};

export default MemoryUsageTxt;
