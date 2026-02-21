import React from "react";

export default function ProfilPok({ pokemon }) {
  return (
    <>
      <h1>Name : {pokemon.name}</h1>
      <div>Height : {pokemon.height}</div>
      <div>weight : {pokemon.weight}</div>
      <ul>
        {pokemon.stats.map((stat, i) => (
          <li key={i}>{stat.base_stat}</li>
        ))}
      </ul>
    </>
  );
}
