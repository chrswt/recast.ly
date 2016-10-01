class App extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    console.log(props);
    // console.log(props.searchYouTube({query: 'wedidit', max: 10, key: window.YOUTUBE_API_KEY}, function() { console.log('success'); } ));
    this.state = {
      video: exampleVideoData[0],
      results: exampleVideoData
    };
  }

  onVideoClick(i, data) {
    this.setState({video: data[i]});
  }

  componentDidMount() {
    this.props.searchYouTube({query: 'wedidit', max: 10, key: window.YOUTUBE_API_KEY},
      (dataItems) => {
        this.setState({
          video: dataItems[0],
          results: dataItems
        });
      });
    // console.log(results);
    // this.setState({
  }



  render() {
    return (
      <div>
        <Nav />
        
        <div className="col-md-7">
          <VideoPlayer video={this.state.video} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.results} onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
