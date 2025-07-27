import { useNavigate } from "react-router";
import { Button } from '@vaadin/react-components/Button.js';
import { HorizontalLayout } from "@vaadin/react-components";

export default function HomeView() {

	const navigate = useNavigate();

	const handleClickGridBasic = () => {
		navigate('/grid-basic');
	};

	const handleClickGridSort = () => {
		navigate('/grid-sort');
	};

	const handleClickGridFilter = () => {
		navigate('/grid-filter');
	};

	const handleClickGridLazy = () => {
		navigate('/grid-lazy');
	};

	const handleClickGridDetail = () => {
		navigate('/grid-detail');
	};

	const handleClickGridDrag = () => {
		navigate('/grid-drag');
	};

	return (
		<main className="p-m">
			<h1>Main View</h1>
			<h3>Welcome to your new application</h3>
			<p>This is the home view.</p>
			<HorizontalLayout theme="wrap spacing padding" style={{ justifyContent: 'center' }}>
				<Button theme="primary success" onClick={handleClickGridBasic}>
					Go to Grid Basic View
				</Button>
				<Button theme="primary success" onClick={handleClickGridSort}>
					Go to Grid Sort View
				</Button>
				<Button theme="primary success" onClick={handleClickGridFilter}>
					Go to Grid Filter View
				</Button>
				<Button theme="primary success" onClick={handleClickGridLazy}>
					Go to Grid Lazy View
				</Button>
				<Button theme="primary success" onClick={handleClickGridDetail}>
					Go to Grid Detail View
				</Button>
				<Button theme="primary success" onClick={handleClickGridDrag}>
					Go to Grid Drag View
				</Button>
			</HorizontalLayout>
		</main>
	);
}
