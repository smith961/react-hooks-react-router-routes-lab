import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsObj = directors.map((director)=>{
    const directorsMovies = (director.movies).map((movie)=>{
      return <li key={movie}>{movie}</li>
    })
    return <div key = {director.name}>
      {director.name}
      <ul>
        {directorsMovies}
      </ul>
    </div>
  })

  return <div>
    <h1>Directors Page</h1>
    {directorsObj}
  </div>;
}

export default Directors;