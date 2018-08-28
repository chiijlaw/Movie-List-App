class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
  }
  searchBox(e) {
    this.setState({
      val: e.target.value
    });
  }
  render() {
    return (
      <form>
        <div className="container">
          <input
            className="form-control col"
            id="exampleInputMovieTitle"
            aria-describedby="emailHelp"
            placeholder="Movie Title"
            value={this.state.value}
            onChange={this.searchBox.bind(this)}
          />
        </div>
        <div className="col-sm">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => this.props.handleSearch(this.state.val)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}
