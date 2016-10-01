var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: options.query,
      maxResults: options.max || 5, 
      key: options.key || window.YOUTUBE_API_KEY,
      type: 'video'
    },
    type: 'GET',
    success: (data) => {
      console.log(data.items[0].id.videoId);
      callback(data.items);
    },
    error: (err) => { console.log(err); }
  });
};

var searchStatistics = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/videos',
    data: {
      part: 'statistics,snippet',
      id: options.videoId,
      key: options.key || window.YOUTUBE_API_KEY
    },
    type: 'GET',
    success: (data) => {
      callback(data.items[0].statistics);
    },
    error: (err) => console.log(err)
  });
};

window.searchStatistics = searchStatistics;
window.searchYouTube = searchYouTube;