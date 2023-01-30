import axios from "./axios";
import React, { useState, useEffect } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original";
const API_KEY = "518b801ef9844172220e59fb6f668ea3";



function Row({title, fetchUrl}){

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request =  await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); 


    /*const movieId = movies.map(movie => (
         movie.id
    ))*/

    const [trailerUrl, setTrailerUrl] = useState("");

    //const videoUrl= `/movie/550/videos?api_key=${API_KEY}&language=en-US`;

    /*const [videos, setVideos] = useState([]);

    useEffect(() => {
        async function fetchVideoData() {
            const videoRequest =  await axios.get(videoUrl);
            setVideos(videoRequest.results);
            return videoRequest;
        }
        fetchVideoData();
        
    }, [videoUrl]); 

    console.log(fetchVideoData)*/
    

    function truncate(str, n) {
         return str.length > n ? str.substr(0, n - 1) + "..." : str;
        
    };

    const [overview, setOverview] = useState("");

    function clickFunc(desc, title, release, movieName) {


            movieTrailer(movieName || "" )
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error))
        

    
        console.log(trailerUrl)


        if (overview){
            setOverview("")
        }else{

        
        setOverview(
            <div className="overview">
                <div className="backdrop">
                   <iframe
                        src={`https://www.youtube.com/embed/${trailerUrl}`}
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                        width="100%"
                        height ="300px"
                    />
                </div>
                <div className="details">
                    <h2>{title}</h2>
                <p>{release}</p>
                <h4>{desc}</h4>
                <button className='addtolist'>Add to List</button>
                </div>
                
            </div>
            
        )

        }
        
      };


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };


    return(
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <main>
                         <img 
                         key={movie.id}
                         src={`${base_url}${movie.poster_path}`} 
                         alt={movie.title} 
                         onClick={() => clickFunc(movie.overview, movie.title, movie.release_date, movie.title)}
                          />
                         <h3>{truncate(movie?.title , 12)}</h3>
                         
                         
                    </main>
                    
                ))}
                
            </div>
             
            {overview}
        </div>
       

        
    )
    
}

export default Row;