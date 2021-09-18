const BASE_URL = "https://restcountries.eu/rest/v2/";

const searchAPI = {
	resultBySearch: async (searchTerm = "") => {
		const url = `${BASE_URL}${searchTerm ? "name/" + searchTerm : "all"}`;
		return await (await fetch(url)).json();
	},

	resultByRegion: async (searchTerm = "") => {
		const url = `${BASE_URL}${searchTerm ? "region/" + searchTerm : "all"}`;
		return await (await fetch(url)).json();
	},
};

export default searchAPI;
