import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from './requests';
import "./Banner.css";
function Hero() {
    
    const [movies, setMovies] = useState({});

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchTrendingNow);

            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData();
    }, []);

    

  return (
    <div className='banner'
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
            backgroundPosition: "center center",
            }}
    >
        <div className='banner__content'>
            <h1>{movies?.title || movies?.name || movies?.original_title}</h1>
            
            <div className=''>
                <button className='watch'>Watch Trailer</button>
                <button className='addtolist'>Add to List</button>
            </div>
        </div>
        
    </div>
    
  )
}

export default Hero
