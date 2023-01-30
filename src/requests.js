const apiKey = process.env.REACT_APP_API_KEY;

const requests = {
    fetchTrendingNow: `/trending/all/week?api_key=${apiKey}`,
    fetchUpcoming: `/movie/upcoming?api_key=${apiKey}&language=en-US`,
    fetchLatest: `/movie/latest?api_key=${apiKey}&language=en-US`,
    fetchFantasy: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=14`,
    fetchScienceFiction: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=878`,
    fetchFamily: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10751`,
    fetchRomance: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=10749`,
    fetchComedy: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=80`,
    fetchAnimation: `/discover/movie?api_key=${apiKey}&language=en-US&with_genres=16`,
    
}

export default requests;