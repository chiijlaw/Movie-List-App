var movies = [
  { title: "Mean Girls" },
  { title: "Hackers" },
  { title: "The Grey" },
  { title: "Sunshine" },
  { title: "Ex Machina" }
];

var App = () => (
  <div className="container">
    <div>
      <Search />
    </div>
    <div>
      <MovieList movies={movies} />
    </div>
  </div>
);

window.App = App;
