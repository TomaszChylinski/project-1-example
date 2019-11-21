function displayMovieData() {
  var movie = "300";
  var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";

  //ajax call  to GET API

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    // var movieName = will get input value from html page
    console.log("movie data ", response);
    console.log("movie Actors ", response.Actors);
    console.log("movie Genre ", response.Genre);
    console.log("movie Plot ", response.Plot);
    console.log("movie Poster ", response.Poster);
    console.log("movie Rated ", response.Rated);
    console.log("movie Production ", response.Production);
    console.log("movie Title ", response.Title);
    console.log("movie Year ", response.Year);
    
  });
}

displayMovieData();
