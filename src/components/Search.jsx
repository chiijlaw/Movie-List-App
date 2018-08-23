class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: ""
    };
  }
  handlSearch(e) {
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
            onChange={this.handlSearch.bind(this)}
          />
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
