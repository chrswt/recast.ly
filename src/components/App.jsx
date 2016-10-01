class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { // placeholder for current video state
      video: {
        kind: '',
        etag: '',
        id: {
          kind: '',
          videoId: ''
        },
        snippet: {
          publishedAt: '',
          channelId: '',
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
              width: '',
              height: ''
            },
            medium: {
              url: '',
              width: '',
              height: ''
            },
            high: {
              url: '',
              width: '',
              height: ''
            }
          },
          channelTitle: '',
          liveBroadcastContent: ''
        }
      },
      results: []
    };
  }

  onVideoClick(i, data) {
    this.setState({video: data[i]});
  }

  componentDidMount() {
    this.props.searchYouTube({
      query: 'thats absurd',
      key: window.YOUTUBE_API_KEY
    }, (dataItems) => {
      console.log(dataItems);
      this.setState({
        video: dataItems[0],
        results: dataItems
      });
    });

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
