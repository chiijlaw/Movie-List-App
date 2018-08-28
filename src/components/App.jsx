var movies = [
  { title: "Mean Girls" },
  { title: "Hackers" },
  { title: "The Grey" },
  { title: "Sunshine" },
  { title: "Ex Machina" }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies
    };
  }
  handleSearch(query) {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title === query) {
        alert("movie found");
      }
    }
  }
  render() {
    return (
      <div className="container">
        <div>
          <Search handleSearch={this.handleSearch.bind(this)} />
        </div>
        <div>
          <MovieList movies={movies} />
        </div>
      </div>
    );
  }
}

window.App = App;
