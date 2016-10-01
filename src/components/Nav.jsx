var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-2 col-md-offset-0">
      <h1>recast.ly</h1>
    </div>
    <div className="col-md-6 col-md-offset-3">
      <Search debouncedSearch={props.debouncedSearch.bind(props)} />
    </div>
  </nav>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Nav = Nav;
