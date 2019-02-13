console.log("Page loaded")
//constucting YouTube Search
  $(function(){
    $("form").on("submit", function(event){
      event.preventDefault();
      //prepare the request
      var video = $("#video-input").val().trim();
      var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&order=viewCount&publishedAfter=2017-01-01T00%3A00%3A00Z&q=" + video + "+recipes&safeSearch=moderate&type=video&videoDefinition=high&key=AIzaSyAxNCs1H9tUxw9laSPZpdc64rwLpMqknMs";      

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
           var thumbnail = response.items[0].snippet.thumbnails.default.url;
           console.log(thumbnail);  

          //run results loop
           resultsLoop();



           function mainVid(id) {
            $('#video').html(`
              <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            `);
        }         
        
         //loop thru items array and bring back thumbnail, video title and description for each item using jquery .each
           function resultsLoop(){
            $("#main").empty();              
            $.each(response.items, function(i,item) {

                var thumb = item.snippet.thumbnails.default.url;
                var title = item.snippet.title;
                var description = item.snippet.description.substring(0,100);
              
                $("#main").append(`
                <article>
              <img src="${thumb}" alt = "" class="thumb">
              <div class="details">
                 <strong>${title}</strong>
                <p>${description}</p>
              </div>
            </article>`
            );      
             });
              };             
              $('#main').on('click', 'article', function () {
                var id = $(this).attr('data-key');
                mainVid(videoId);
            });   
          
            });  //closing .then         
       }); //closing ajax request      
      }); // closing main function

      

        