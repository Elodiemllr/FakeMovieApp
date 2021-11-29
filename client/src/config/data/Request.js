const API_KEY = "fa6abf7462c6eb8d93de6267251a5b83";
const BASE_URL = "https://api.themoviedb.org/3";

const Requests = {
    //ici tout les links trouvé dans la documentation
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=28`,
    fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=35`,
    fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=10749`,
    fetchDocumentaries: `${BASE_URL}/discover/movie?api_key=${API_KEY}&width_genres=99`,
};

export default Requests;
