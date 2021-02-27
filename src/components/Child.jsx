import React, { useEffect } from "react";
import { fetchMovies } from "../thunk_functions/fetchMovies";
import { useDispatch } from "react-redux";

const Child = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies(1));
	}, []);

	return <div></div>;
};

export default Child;
