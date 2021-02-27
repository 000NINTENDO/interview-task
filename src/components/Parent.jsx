import React from "react";
import Child from "./Child";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const Parent = () => {
	const status = useSelector((state) => {
		return state.status;
	});
	const allIds = useSelector((state) => {
		return state.movies.allIds;
	});
	const Movies = allIds.map((id) => {
		return <MovieCard id={id} key={id} />;
	});
	// console.log(allIds);
	return (
		<>
			<Child />
			{status === "fetched" ? <MovieList Movies={Movies} /> : "loading"}
		</>
	);
};

export default Parent;
