import React, {useState, useEffect} from 'react';
import axios from "../axios";
import requests from '../requests';
import "../css/Banner.css";
import playIcon from '../images/play-icon.svg'

export default function Banner() {

    const [movies, setMovies] = useState({});

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchUpcoming);

            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData();
    }, []);

  return (
    <div className='hero'>
        <div className='banner'
        style = {{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
            backgroundPosition: "center center",
            }}
    >
        <div className='banner__content'>
            <h1>{movies?.title || movies?.original_title}</h1>
            <p>{movies?.overview}</p>
            <div className='buttons'>
                <button className='watch'><img src ={playIcon} className='play-icon' alt='play-icon'/>Watch Trailer</button>
            </div>
        </div>
        
        
    </div>
    </div>
    
    
  )}

