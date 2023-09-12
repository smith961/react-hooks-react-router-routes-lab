import React from "react";
import { actors } from "../data";

function Actors() {

  const actorsObj = actors.map((actor)=>{
    const actorsMovies = (actor.movies).map((movie)=> {return <li key={movie}>{movie}</li>})
    return <div key={actor.name}>
      {actor.name}
      <ul>
        {actorsMovies}
      </ul>
    </div>
  })

  return <div>
    <h1>Actors Page</h1>
    {actorsObj}
  </div>;
}

export default Actors;