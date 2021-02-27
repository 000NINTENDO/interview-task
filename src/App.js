import Parent from "./components/Parent";
import BackgroundBanner from "./components/BackgroundBanner";
import "./App.css";
import { useSelector } from "react-redux";
// import LoadMore from "./components/LoadMore";

function App() {
	const allIds = useSelector((state) => {
		return state.movies.allIds;
	});

	const idsLength = allIds.length;

	const content = (
		<>
			<BackgroundBanner />
		</>
	);
	return (
		<div className="App">
			<header className="app__header">
				<h1>Movie App</h1>
			</header>
			<div className="app_border"></div>
			{idsLength !== 0 ? content : "loading"}
			<Parent />
			{/* <LoadMore /> */}
		</div>
	);
}

export default App;
