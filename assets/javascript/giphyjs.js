var topics = ["dog", "tiger", "monkey", "ape", "armadillo"];

var apiKey = "9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd"

$(function () {
	console.log("page loaded")
	buttonMaker(topics);
})

function buttonMaker (array) {
	$("#animalButtons").empty();
	for (var i = 0; i < array.length; i++) {
		var x = $("<button>");
		x.text(array[i]);
		$("#animalButtons").append(x);
	}
}

function makeCall (searchTerm) {
	
	$.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + apiKey + "&limit=10",
        method: "get"
      })

      // set instructions for after API response is received

      .done(function(response) {

        console.log(response);

      });

}

makeCall("porg");



	// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd&limit=5"
	// var imageUrl = response.data.image_original_url;