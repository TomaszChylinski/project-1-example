// Start of OMDB API Call

$("img.navImage").on("click", function() {
	event.preventDefault();

	var movie = $(this).attr("id");
	console.log("helo " + movie);
	var queryURL =
		"https://www.omdbapi.com/?t=" + movie + "&apikey=330307b2&plot=full";

	$("#home").tab("show");
	$("#homeBtn").click();
	//ajax call  to GET API

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(movieResponse) {
		//set variables that will populate page with movie data

		var movieTitle = movieResponse.Title;
		var moviePlot = movieResponse.Plot;
		var movieActors = movieResponse.Actors;
		var movieGenre = movieResponse.Genre;
		var ageRated = movieResponse.Rated;
		var prodYear = movieResponse.Year;
		var runTime = movieResponse.Runtime;
		var relDate = movieResponse.Released;

		//display movie data
		$("#movieTitle").text(movieTitle);

		$("#moviePlot").text(moviePlot);

		$("#movieGenre").text(movieGenre + " | ");

		$("#movieActors").text(movieActors);

		$("#ageRated").text(ageRated + " | ");

		$("#runTime").text(runTime + " | ");

		$("#yearDate").text(prodYear);

		$("#movieYear").text(" (" + prodYear + ")");

		$("#relDate").text(relDate);

		//$(".imgHolder").prepend(movieImgHolder)

		//var movieImgHolder =  $("<div class='movieImg'>");

		var imgURL = movieResponse.Poster;
		var movieImage = $("<img>").attr("src", imgURL);

		//prepend image to our new div

		$(".imgHolder").html(movieImage);
	});
});

//End of Nav click

//Start of submit button funtionality

$("#submitBtn").on("click", function() {
	event.preventDefault();
	// videoCall();
	movieInfoAPI();
	$("#homeBtn").click();
});

function movieInfoAPI() {
	var movie = $("#movieSearch")
		.val()
		.trim();
	var queryURL =
		"https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy&plot=full";

	//ajax call  to GET API

	$.ajax({
		url: queryURL,
		method: "GET"
	}).then(function(movieResponse) {
		//set variables that will populate page with movie data
		console.log(movieResponse);
		var movieTitle = movieResponse.Title;
		var moviePlot = movieResponse.Plot;
		var movieActors = movieResponse.Actors;
		var movieGenre = movieResponse.Genre;
		var ageRated = movieResponse.Rated;
		var prodYear = movieResponse.Year;
		var runTime = movieResponse.Runtime;
		var relDate = movieResponse.Released;

		//display movie data
		$("#movieTitle").text(movieTitle);

		$("#moviePlot").text(moviePlot);

		$("#movieGenre").text(movieGenre + " | ");

		$("#movieActors").text(movieActors);

		$("#ageRated").text(ageRated + " | ");

		$("#runTime").text(runTime + " | ");

		$("#yearDate").text(prodYear);

		$("#movieYear").text(" (" + prodYear + ")");

		$("#relDate").text(relDate);

		var imgURL = movieResponse.Poster;
		var movieImage = $("<img>").attr("src", imgURL);

		//prepend image to our new div

		$(".imgHolder").html(movieImage);
	});
}

//START OF YOUTUBE API CALL

//person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

var searchTerm = "catch me if you can";
var firstVideoId = "";
var id = "KAeAqaA0Llg";
var videoIdArrary = [];

let queryURL = "https://www.googleapis.com/youtube/v3/search";
queryURL +=
	"?" +
	$.param({
		part: "snippet",
		key: "AIzaSyCseckqrVUANRmqyCts4FqdDZ2U6LE-vVk",
		q: searchTerm
	});
$.ajax({
	url: queryURL,
	method: "GET"
}).done(function(response) {
	firstVideoId = response.items[0].id.videoId;
	videoIdArrary.push(firstVideoId);
	console.log("testing my arrary " + videoIdArrary);

	console.log("my youtube video response ", response);

	console.log("my youtube video response ", response.items[0].etag);

	console.log("show the id of the first video " + firstVideoId);
});
//person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var playerInfoList = [
	{ id: "player", height: "390", width: "640", videoId: videoIdArrary }
];

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.

function onYouTubeIframeAPIReady() {
	if (typeof playerInfoList === "undefined") return;

	for (var i = 0; i < playerInfoList.length; i++) {
		var curplayer = createPlayer(playerInfoList[i]);
	}
}

function createPlayer(playerInfo) {
	return new YT.Player(playerInfo.id, {
		height: playerInfo.height,
		width: playerInfo.width,
		videoId: playerInfo.videoId
	});
}

// END OF YOUTUBE CALL
