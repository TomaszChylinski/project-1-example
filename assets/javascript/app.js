

//person + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
var searchTerm = "catch me if you can"
var firstVideoVideoId = '';
var id = "KAeAqaA0Llg";


let queryURL = "https://www.googleapis.com/youtube/v3/search";
queryURL += '?' + $.param({
  part: 'snippet',
  key: 'AIzaSyCseckqrVUANRmqyCts4FqdDZ2U6LE-vVk',
  q: searchTerm
});
$.ajax({
  url: queryURL,
  method: 'GET'
}).done(function (response) {


  firstVideoVideoId = response.items[0].id.videoId;
  console.log('my youtube video response ', response);

  console.log('my youtube video response ', response.items[0].etag);

  console.log('show the id of the first video ' + firstVideoVideoId)

})


  // Load the IFrame Player API code asynchronously.
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/player_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  var playerInfoList = [{ id: 'player', height: '390', width: '640', videoId: id },];

  // Replace the 'ytplayer' element with an <iframe> and
  // YouTube player after the API code downloads.

  function onYouTubeIframeAPIReady() {
    if (typeof playerInfoList === 'undefined')
      return;

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

