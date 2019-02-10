 

 
 
//  // constructing a queryURL variable we will use instead of the literal string inside of the ajax method

// var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=s&format=json&api_key=ymSDKlrPsi4IE3TGXxHGSy9tcM7TZiHsMqa72FZc" 

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     console.log(response.report.food.name);
//   });

//   $.ajax({
//     url: "https://api.nal.usda.gov/ndb/reports/?ndbno=01094&type=s&format=json&api_key=ymSDKlrPsi4IE3TGXxHGSy9tcM7TZiHsMqa72FZc", 
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//     console.log(response.report.food.name);
//   });

  //constucting YouTube Search
  $(function( ){
    $("form").on("submit", function(event){
      event.preventDefault();
      //prepare the request
      var request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        q: encodeURIComponent($("#food-input").val()).replace(/%20/g, "+"),
        maxResults: 3,
        order: "viewCount",
        publishedAfter: "2017-01-01T00:00:00Z"
      });
        /// excute request
        request.execute(function(response){
          console.log(response);
        })
    });
  });

  function init() {
    gapi.client.setApiKey("AIzaSyAxNCs1H9tUxw9laSPZpdc64rwLpMqknMs");
    gapi.client.load("youtube", "v3", function() {
       //Youtube is ready
    });
  };


 