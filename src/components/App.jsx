class App extends React.Component {
  constructor() {
    super();

    this.state = {
      video: exampleVideoData[0]
    };
  }

  onVideoClick(i, data) {
    // debugger;
    // console.log('clicked', data, a, b);
    this.setState({video: data[i]});
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={exampleVideoData} onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
