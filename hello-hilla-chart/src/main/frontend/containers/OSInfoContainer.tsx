import { useEffect } from "react";
import { Controller } from "Frontend/generated/endpoints";
import { useSignal } from "@vaadin/hilla-react-signals";
import OSInfoTxt from "Frontend/components/OSInfoTxt";

const OSInfoContainer: React.FC = () => {

	const osData = useSignal<string[]>([]);

	useEffect(() => {
		const fetchData = () => {
			Controller.getOperatingSystemSimple()
				.then(data =>
					osData.value = (data ?? []).filter((item): item is string => typeof item === 'string')
				);
		};

		fetchData();

		const intervalId = setInterval(fetchData, 10000);

		return () => clearInterval(intervalId);
	}, []);

	return <OSInfoTxt osData={osData.value} />;
};

export default OSInfoContainer;