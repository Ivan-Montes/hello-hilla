import { useNavigate } from "react-router";
import { Button } from '@vaadin/react-components/Button.js';
import { HorizontalLayout } from "@vaadin/react-components";

export default function HomeView() {
	
	const navigate = useNavigate();

	const handleClickGrid = () => {
		navigate('/grid');
	};

	const handleClickBasic = () => {
		navigate('/basic');
	};

	return (
		<main className="p-m">
			<h1>Main View</h1>
			<h3>Welcome to your new application</h3>
			<p>This is the home view.</p>
			<HorizontalLayout theme="spacing padding" >
			  <Button theme="primary success" onClick={handleClickGrid}>
				Go to Auto Grid View
			  </Button>
			  <Button theme="primary success" onClick={handleClickBasic}>
				Go to Auto basic View
			  </Button>
			</HorizontalLayout>
		</main>
	);
}
