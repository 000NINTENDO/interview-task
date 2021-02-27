import React from "react";
import "./BackgroundBanner.css";
import { useSelector } from "react-redux";

const BackgroundBanner = () => {
	const allIds = useSelector((state) => {
		return state.movies.allIds;
	});
	const allIds_length = allIds.length;
	// console.log(allIds_length);

	const randomId = () => {
		let id;
		let i = 0;
		for (i = 0; i >= 0; i++) {
			const randomId = parseInt(Math.random() * 100);
			if (randomId < allIds_length) {
				id = randomId;
				return id;
			}
		}
	};

	const random_id = randomId();

	const movie_id = allIds[random_id];

	const movie = useSelector((state) => {
		return state.movies.byIds[movie_id];
	});

	const image_url = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;

	console.log("random_id", random_id);
	console.log("movie", movie);

	console.log(allIds);
	return (
		<div className="backbground_banner">
			<div className="backbground_banner__image">
				<img
					src={image_url}
					className="backbground_banner__image_img"
					alt="background image"
				/>
			</div>
			<div className="backbground_banner_movie_page_banner_shadow_layer_1"></div>
			<div className="backbground_banner_movie_page_banner_shadow_layer_2"></div>
		</div>
	);
};

export default BackgroundBanner;
