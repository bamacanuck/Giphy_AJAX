var topics = ["dog", "tiger", "monkey", "ape", "armadillo", "x", "jasgdkjsgkjhdfklg", "z", "Lion-O", "MummRaa the EVER LIVING"];

// var apiKey = "9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd"

$(function () {
	console.log("page loaded")
	buttonMaker(topics);
})

// function addToTopics {

// }

function buttonMaker (array) {
	$("#animalButtons").empty();
	for (var i = 0; i < array.length; i++) {
		var x = $("<button>");
		x.text(array[i]);
		x.attr("data-animal", array[i]);
		$("#animalButtons").append(x);
	}
}

function callAndRender (searchTerm) {
	
	$.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd&limit-10",
        method: "get"
      })

// 	var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
// xhr.done(function(data) { console.log("success got data", data); });

      // set instructions for after API response is received

      .done(function(response) {

        console.log(response);

        var imageUrl = response.data.image_original_url;

        var displayGIF = $("<img>");

        // using attribute methods to change sourcing, and the alt (what's displayed if there's no image to use)

        displayGIF.attr("src", imageUrl);
        displayGIF.attr("alt", "missing image");

        // adding the image to the DOM, before the specified div (prepending, rather than appending)

		$("#animals").append(displayGIF);

      });

}

callAndRender("dogs");


        // setting up a new image 'spot' for the 'incoming' GIF, for display via the DOM, here



	// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd&limit=5"
	// var imageUrl = response.data.image_original_url;