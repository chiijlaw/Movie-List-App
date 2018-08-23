var MovieListEntry = props => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{props.movie.title}</h5>
      <p className="card-text text-left">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
);

//<div className="container">
//     <p className="col">
//       {props.movie.title}
//       !!!!
//     </p>
//   </div>
