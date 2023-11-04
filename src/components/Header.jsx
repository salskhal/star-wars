// import { useState, useEffect } from "react";
import { LoaderIcon } from "../icon";
import MovieCard from "./MovieCard";
import { useQuery } from "react-query";

const Loading = () => {
  return (
    <div className=" flex items-center justify-center min-h-[60vh]">
      <LoaderIcon
        className="animate-spin
        h-20 w-20 text-yellow-500
      "
      />
    </div>
  );
};

const Header = () => {
  const fetchMovies = async () => {
    const response = await fetch("https://swapi.dev/api/films/");
    const data = await response.json();
    return data.results;
  };
  const { data: movies, isLoading, error } = useQuery("movies", fetchMovies);

  if (isLoading) return <Loading />;
  if (error) return <div>Error fetching data</div>;

  return (
    <div className=" px-10 md:px-20 mt-10">
      {movies && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
          {movies.map((movie, index) => (
            <MovieCard key={movie.episode_id} movie={movie} index={index} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Header;
