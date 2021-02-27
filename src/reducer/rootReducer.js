import * as type from "../actions_types/actionTypes";

const initialState = {
	status: "loading",
	movies: {
		allIds: [],
		byIds: {},
	},
};

const movies = (state, action) => {
	const responseMovies = action.payload;
	const allIds = action.payload.map((movie) => {
		return movie.id;
	});

	const moviesById = {};
	for (let item of allIds) {
		responseMovies.filter((movie) => {
			if (movie.id === item) {
				moviesById[item] = movie;
			}
		});
	}

	return {
		...state,
		status: "fetched",
		movies: {
			...state.movies,
			allIds: [...state.movies.allIds, ...allIds],
			byIds: {
				...state.movies.byIds,
				...moviesById,
			},
		},
	};
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case type.movies_fetched:
			return movies(state, action);
		default:
			return state;
	}
};

export default rootReducer;
