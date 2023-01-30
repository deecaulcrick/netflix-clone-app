import React, {useState, useEffect} from 'react';
import axios from "./axios";
import requests from './requests';
import "./Banner.css";

export default function Banner() {

    const [movies, setMovies] = useState({});

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchUpcoming);

            setMovies(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
        }
        fetchData();
    }, []);

    function truncate(str, n) {
        return str.length > n ? str.substr(0, n - 1) + "..." : str;
   }

  return (
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
                <button className='watch'>Watch Trailer</button>
                <button className='addtolist'>Add to List</button>
            </div>
        </div>
        <div className='fade'></div>
        
    </div>
    
  )}

