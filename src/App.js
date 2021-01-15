import React, { useState, useEffect, useMemo } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from "./components/Home/Home";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [text, setText] = useState("");
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
      .then((res) => res.json())
      .then((data) => {
        const results = data.results.map((pokemon, idx) => {
          return { ...pokemon, idx: idx + 1 };
        });
        setPokemon({ ...data, results });
      });
  }, []);
  useMemo(() => {
    if (!text) {
      setFilteredPokemon([]);
      return;
    }

    setFilteredPokemon(() =>
      pokemon.results?.filter((pokemon) => pokemon.name.includes(text))
    );
  }, [pokemon.results, text]);
  return (
    <>
      <div className="p-14">
        <div className="flex flex-col items-center">
          <Link to="/">
            <header className="text-4xl text-yellow-700">Pokemon Picker</header>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/about/:slug">
          <AboutUs />
        </Route>

        <Route path="/">
          <div className="w-full flex justify-center">
            <input
              type="text"
              placeholder="Enter Pokemon Here.."
              className="mt-10 p-2 border-blue-500 border-2"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          {pokemon && <Home pokemon={filteredPokemon} />}
        </Route>
      </Switch>
    </>
  );
}

export default App;
