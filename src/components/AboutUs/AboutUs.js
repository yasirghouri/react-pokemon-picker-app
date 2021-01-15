import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AboutUs = (props) => {
  const { slug } = useParams();
  const [pokemon, setPokemon] = useState();
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}/`)
      .then((res) => res.json())
      .then((data) => {
        setPokemon(data);
      });
  }, [slug]);
  return (
    <>
      {pokemon && (
        <div className="w-3/12 m-auto bg-purple-100 mt-4 shadow-2xl flex justify-center flex-col items-center">
          <h3 className="text-2xl text-green-900 uppercase">{pokemon.name}</h3>
          <div className="flex justify-center">
            <img className="w-48" src={pokemon.sprites["front_shiny"]} alt="" />
            <img className="w-48" src={pokemon.sprites["back_shiny"]} alt="" />
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;
