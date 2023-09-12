import React from "react";
import { movies } from "../data";

function Movies() {

  const moviesObj = movies.map((movie)=>{

    const movieGenres = (movie.genres).map((genre)=>{
      return <li key={genre}>{genre}</li>
    })

    return <div key={movie.title}>
      {movie.title}
      <br></br>
      {movie.time}
      <br></br>
      <ul>
        {movieGenres}
      </ul>
    </div>
  })

  return <div>
    <h1>Movies Page</h1>
    {moviesObj}
  </div>;
}

export default Movies;