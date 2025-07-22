import { useNavigate } from "react-router";
import { Button } from '@vaadin/react-components/Button.js';
import { HorizontalLayout } from "@vaadin/react-components";

export default function HomeView() {
	
	const navigate = useNavigate();

	const handleClickGrid = () => {
		navigate('/auto-grid-basic');
	};

	const handleClickCrud = () => {
		navigate('/auto-crud-basic');
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
			  <Button theme="primary success" onClick={handleClickCrud}>
				Go to Auto CRUD View
			  </Button>
			</HorizontalLayout>
		</main>
	);
}
