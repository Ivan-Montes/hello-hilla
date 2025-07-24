import { useEffect } from "react";
import { Controller } from "Frontend/generated/endpoints";
import { useSignal } from "@vaadin/hilla-react-signals";
import MemoryUsageChart from "Frontend/components/MemoryUsageChart";

const MemoryUsageChartContainer: React.FC = () => {

	const memoryData = useSignal<Record<string, string>>({});

	useEffect(() => {
		const fetchData = () => {

			Controller.getMemorySimple()
				.then((data: Record<string, string | undefined> | undefined) => {
					const clean = Object.fromEntries(
						Object.entries(data ?? {}).filter(
							([_, value]) => typeof value === 'string'
						)
					) as Record<string, string>;
					memoryData.value = clean;
				});
		};

		fetchData();

		const intervalId = setInterval(fetchData, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return <MemoryUsageChart memoryData={memoryData.value} />;
};

export default MemoryUsageChartContainer;
