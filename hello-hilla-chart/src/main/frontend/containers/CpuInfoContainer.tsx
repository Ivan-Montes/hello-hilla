import { useEffect } from "react";
import { Controller } from "Frontend/generated/endpoints";
import { useSignal } from "@vaadin/hilla-react-signals";
import CpuInfoTxt from "Frontend/components/CpuInfoTxt";

const CpuInfoContainer: React.FC = () => {

	const cpuData = useSignal<string[]>([]);

	useEffect(() => {
		const fetchData = () => {
			Controller.getCpuSimple()
				.then(data =>
					cpuData.value = (data ?? []).filter((item): item is string => typeof item === 'string')
				);
		};

		fetchData();

		const intervalId = setInterval(fetchData, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return <CpuInfoTxt cpuData={cpuData.value} />;
};

export default CpuInfoContainer;