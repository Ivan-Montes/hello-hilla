import { useEffect } from "react";
import { Controller } from "Frontend/generated/endpoints";
import { useSignal } from "@vaadin/hilla-react-signals";
import GeneralUsageChart from "Frontend/components/GeneralUsageChart";

const GeneralUsageContainer: React.FC = () => {

	const generalData = useSignal<Record<string, string>>({});

	useEffect(() => {
		const fetchData = () => {

			Controller.getGeneralUsage()
				.then((data: Record<string, string | undefined> | undefined) => {
					const clean = Object.fromEntries(
						Object.entries(data ?? {}).filter(
							([_, value]) => typeof value === 'string'
						)
					) as Record<string, string>;
					generalData.value = clean;
				});
		};

		fetchData();

		const intervalId = setInterval(fetchData, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return <GeneralUsageChart generalData={generalData.value} />;
};

export default GeneralUsageContainer;
