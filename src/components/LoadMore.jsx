import React, { useState, useEffect } from "react";
import { fetchMovies } from "../thunk_functions/fetchMovies";
import { useDispatch } from "react-redux";
import "./LoadMore.css";

const LoadMore = () => {
	const [page, setPage] = useState({
		number: 1,
	});
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovies(page.number));
	}, [page]);

	const increasePageNumber = () => {
		setPage({
			...page,
			number: page.number++,
		});
	};

	return (
		<div className="loadmore">
			<button onClick={increasePageNumber} className="loadmore__button">
				Load More
			</button>
		</div>
	);
};

export default LoadMore;
