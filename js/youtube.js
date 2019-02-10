console.log("Page loaded")
//constucting YouTube Search
  $(function(){
    $("form").on("submit", function(event){
      event.preventDefault();
      //prepare the request
      var video = $("#video-input").val().trim();
      var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=viewCount&publishedAfter=2017-01-01T00%3A00%3A00Z&q=" + video + "+recipes&safeSearch=moderate&type=video&videoDefinition=high&key=AIzaSyAxNCs1H9tUxw9laSPZpdc64rwLpMqknMs";

      $.ajax({
          url: queryURL,
          method:"GET"
      })
       .then(function(response){
           console.log(response);
       })

      });
    });
        