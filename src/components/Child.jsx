import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../thunk_functions/fetchMovies";
import { useDispatch } from "react-redux";

const Child = () => {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies(page));
	}, []);

	return <div></div>;
};

export default Child;
