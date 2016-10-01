var searchYouTube = (options, callback) => {
  //  making a get request to youtube with given options parameters
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      q: options.query, 
      maxResults: options.max || 25, 
      key: options.key,
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