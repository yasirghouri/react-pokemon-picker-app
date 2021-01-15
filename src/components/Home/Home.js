import React from "react";
import { Link } from "react-router-dom";

const Home = ({ pokemon: results }) => {
  return (
    <div className="mt-10 p-4 flex flex-wrap">
      {results &&
        results.map((result, idx) => {
          return (
            <div className="ml-4 text-2xl text-blue-400" key={idx}>
              <Link to={`/about/${result.idx}`}>{result.name}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default Home;
