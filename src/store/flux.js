const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			nba: [],
			nflGames: [],
		},
		actions: {
			nba: async () => {
				const url = "https://allfansports.herokuapp.com/nba";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nba: results });
			},
			loadNflGames: async () => {
				const url = "https://interfaceroy.herokuapp.com/nfl";
				const response = await fetch(url);
				const results = await response.json();
				setStore({ nflGames: results });
			},
		}
	};
};

export default getState;
