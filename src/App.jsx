import { useState, useEffect } from "react";
import "./index.css"; // Ensure CSS is correctly linked
import MovieDisplay from "./components/MovieDisplay";
import Form from "./components/Form";

export default function App() {
  const apiKey = "248ec361"; // OMDB API Key
  const [movie, setMovie] = useState(null); // Holds movie data

  // Function to fetch movie data
  const getMovie = async (searchTerm) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );
      const data = await response.json();
      setMovie(data); // Update state with movie data
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  // Fetch random movie on first render
  useEffect(() => {
    const movies = ["Inception", "Interstellar", "Titanic", "Avatar", "Joker"];
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    getMovie(randomMovie);
  }, []);

  return (
    <div className="App">
      <h1>🎬 React Movie Search</h1>
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  );
}
