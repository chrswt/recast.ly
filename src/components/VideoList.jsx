var VideoList = (props) => (
  <div className="video-list media">
    {props.videos.map((video, i) =>
      // <VideoListEntry video={video} onClick={props.onVideoClick.bind(this, i, props.videos)} key={i}>{video} />
      <VideoListEntry video={video} onVideoClick={props.onVideoClick.bind(props, i, props.videos)} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
