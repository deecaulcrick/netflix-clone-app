import axios from "../axios";
import React, { useState, useEffect } from "react";
import "../css/Row.css";

const base_url = "https://image.tmdb.org/t/p/original";


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

    

    function truncate(str, n) {
         return str.length > n ? str.substr(0, n - 1) + "..." : str;
        
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
                          />
                         <h3>{truncate(movie?.title , 12)}</h3>
                         
                         
                    </main>
                    
                ))}
                
            </div>
             
    
        </div>
       

        
    )
    
}

export default Row;