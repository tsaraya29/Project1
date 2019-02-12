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
           var title = response.items[0].snippet.title;
           console.log("Title: ", title);
           var description = response.items[0].snippet.description; 
           console.log("Description: ",description);
           var videoId = response.items[0].id.videoId;
           console.log("This is the video id: ", videoId); //need to append this to https://www.youtube.com/watch?v= WARNING: There may also be a snipped ID preferred
            function loadVids(){
          
            }
       })
       //need to create a function that will display the videos and call that function in the .then
      })

      
    });
        