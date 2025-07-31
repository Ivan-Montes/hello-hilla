import { NavLink, useNavigate } from "react-router";

export default function MainView() {  
  const navigate = useNavigate();
  
  const handleClick = () => {
	navigate('/about');
  };
  
  return (
	<main className="p-m">
	  <h1>Main View</h1>
	  <NavLink to="/about">Link to About View</NavLink>
	  <button onClick={handleClick}>
	    Go to About View
	  </button>
	</main>
  );
}

function HomeViewOriginal() {
  return (
    <div>
      <h1>Welcome to your new application</h1>
      <p>This is the home town view.</p>
      <p>
        You can edit this view in <code>src/main/frontend/views/@index.tsx</code> or by
        activating Copilot by clicking the icon in the lower right corner
      </p>
    </div>
  );
}
