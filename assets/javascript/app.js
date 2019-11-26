
  //person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
var searchTerm = "dog"
    
  let queryURL = "https://www.googleapis.com/youtube/v3/search";
  queryURL += '?' + $.param({
      part: 'snippet',
      key:  'AIzaSyCseckqrVUANRmqyCts4FqdDZ2U6LE-vVk',
      q: searchTerm
  });
  $.ajax({
      url: queryURL,
      method: 'GET'
  }).done(function(response){
    console.log('my youtube video response ' , response);
  })