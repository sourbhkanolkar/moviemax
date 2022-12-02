import React, { useState } from "react";
import { useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
//756e5457

const API_URL='https://www.omdbapi.com?apikey=756e5457';

// const movie1={
//   "Title": "Amazing Spiderman Syndrome",
//   "Year": "2012",
//   "imdbID": "tt2586634",
//   "Type": "movie",
//   "Poster": "N/A"
// }

function App() {
  const [movies,setMovies]= useState([]);
  const [searchTerm,setSearchTerm]= useState('');

   const serchMovies= async (title)=>{
    const response= await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    setMovies(data.Search)
   }
  useEffect(()=>{
   serchMovies('Spiderman')
  },[])
 
  return (

     <div className="app">
      <h1>MovieMax</h1>
      <div className="search">
        <input
        placeholder="search for movies"
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img 
        src={SearchIcon}
        alt="search"
        onClick={()=>serchMovies(searchTerm)}
        />
      </div>
        
        {
          movies.length > 0
          ?(
            <div className="container">
            {movies.map((movie)=>(
              <MovieCard movie={movie} />
            ))}
           </div>
          ) : (
            <div className="empty">
              <h2>no movies found</h2>
            </div>
          )
        
        }
    
     </div>
  
  );
}

export default App;
