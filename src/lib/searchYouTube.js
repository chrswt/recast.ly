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
      callback(data.items);
    },
    error: (err) => { console.log(err); }
  });
};

window.searchYouTube = searchYouTube;