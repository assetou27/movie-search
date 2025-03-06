export default function MovieDisplay({ movie }) {
    // Function to return loaded JSX
    const loaded = () => (
      <>
        <h2>{movie.Title}</h2>
        <h3>{movie.Genre}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        <p>{movie.Plot}</p>
        <h4>Year: {movie.Year}</h4>
        <h4>IMDb Rating: {movie.imdbRating}</h4>
      </>
    );
  
    // Function to return loading JSX
    const loading = () => <h2>No Movie Selected</h2>;
  
    // Show movie details only if data exists
    return movie ? loaded() : loading();
  }
  