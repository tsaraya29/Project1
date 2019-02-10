console.log("Main loaded");

$("#find-food").on("click", function(event) {
    event.preventDefault();
    // Here we grab the text from the input box
    var myfood = $("#food-input").val().trim();          
    var queryURL = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + myfood +"&max=1&offset=0&api_key=ymSDKlrPsi4IE3TGXxHGSy9tcM7TZiHsMqa72FZc";
        $.ajax({
            url: queryURL,
            method:"GET"
            })
            .then(function(response) {
                // console.log(response);
            var nutrional = $("<div>"); 
            var foodName = response.list.item[0].name;
            var ndbno = response.list.item[0].ndbno;
            console.log(ndbno); 
                         
            $("#foodInfo").html("<strong>USDA Food Name: </strong>" + foodName );
                   

                $.ajax({
                    url:"https://api.nal.usda.gov/ndb/nutrients/?ndbno=" + ndbno + "&format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208&nutrients=269",
                    method:"GET"})

                    .then(function(response) {
                        console.log("This is the 2nd Ajax request: ", response); 
                        var sugars = response.report.foods[0].nutrients[1].value;
                        console.log ("This is the calories: ", calories);
                        var fats  = response.report.foods[0].nutrients[2].value;                       
                        var calories = response.report.foods[0].nutrients[0].value;
                        var carbs  = response.report.foods[0].nutrients[3].value;
                        
                        $("#calories").html("<strong>Calories: </strong>" + calories);
                        $("#fats").html("<strong>Fats (g): </strong>"+ fats);
                        $("#sugars").html("<strong>Sugars (g): </strong>" + sugars);
                        $("#carbs").html("<strong>Carbohydrates (g): </strong>" + carbs)
                    });

                });
                      
        });