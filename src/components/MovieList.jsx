var MovieList = props => (
  <div className="card-header text-center">
    Movies go here!
    {props.movies.map(movie => (
      <MovieListEntry movie={movie} key={movie.title} />
    ))}
  </div>
);

window.MovieList = MovieList;
