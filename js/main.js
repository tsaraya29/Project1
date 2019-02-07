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
                    url:"https://api.nal.usda.gov/ndb/nutrients/?ndbno=" + ndbno + "&format=json&api_key=DEMO_KEY&nutrients=205&nutrients=204&nutrients=208",
                    method:"GET"})

                    .then(function(response) {
                        console.log("This is the 2nd Ajax request: ", response); 
                        $("#link").html("<strong>Nutrional Info: </strong>");
                        $("#calories").html("Calories: ");
                        $("#fats").html("Fats (g): ");
                        $("#sugars").html("Sugars (g): ");
                        $("#carbs").html("Carbohydrates (g): ")
                    });

                });
                      
                        });