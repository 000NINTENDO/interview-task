import { instance } from "../axios_config/axios";
import * as type from "../actions_types/actionTypes";

export const fetchMovies = (page) => {
	return async (dispatch, getState) => {
		const response = await instance.get(
			`popular?api_key=1cccfd6a1490af361de2b3d2efe39861&language=en-US&page=${page}`
		);
		console.log(response);
		const movies = await response.data.results;

		dispatch({ type: type.movies_fetched, payload: movies });
	};
};
