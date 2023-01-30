const API_KEY = "518b801ef9844172220e59fb6f668ea3";

const requests = {
    fetchTrendingNow: `/trending/all/week?api_key=${API_KEY}`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchFantasy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=14`,
    fetchScienceFiction: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=878`,
    fetchFamily: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10751`,
    fetchRomance: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=10749`,
    fetchComedy: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=80`,
    fetchAnimation: `/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=16`,
    
}

export default requests;