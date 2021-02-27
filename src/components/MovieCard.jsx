import React from "react";
import "./MovieCard.css";
import { useSelector } from "react-redux";

const MovieCard = ({ id }) => {
	const movie = useSelector((state) => {
		return state.movies.byIds[id];
	});

	const poster_url = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
	const title = movie.title;
	const date = movie.release_date;
	const new_date = new Date(date);
	const releaseDate = new_date.toDateString().slice(4);
	// console.log();

	// console.log(movie);
	return (
		<div className="moviecard">
			<div className="moviecard__movie_poster">
				<img
					src={poster_url}
					className="moviecard__movie_poster__image"
					alt="movie poster"
				/>
			</div>
			<div className="moviecard__movie_details">
				<div className="moviecard__movie_details__title">
					<h4 className="moviecard__movie_details__title__text">{title}</h4>
				</div>
				<div className="moviecard__movie_details__release_date">
					<p className="moviecard__movie_details__release_date">
						{releaseDate}
					</p>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
