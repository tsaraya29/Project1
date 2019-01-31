 

 
 
 // constructing a queryURL variable we will use instead of the literal string inside of the ajax method

var queryURL = "https://api.nal.usda.gov/ndb/reports/?ndbno=01009&type=s&format=json&api_key=ymSDKlrPsi4IE3TGXxHGSy9tcM7TZiHsMqa72FZc" 

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.report.food.name);
  });

  $.ajax({
    url: "https://api.nal.usda.gov/ndb/reports/?ndbno=01094&type=s&format=json&api_key=ymSDKlrPsi4IE3TGXxHGSy9tcM7TZiHsMqa72FZc", 
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(response.report.food.name);
  });


 