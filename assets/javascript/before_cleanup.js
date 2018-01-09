var topics = ["dog", "tiger", "monkey", "ape", "armadillo"];

// var apiKey = "9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd"

$(function () {
	// console.log("page loaded")
	buttonMaker(topics, "callButton");
})

// function addToTopics {

// }

$("#addAnimal").click (function() {
	var nowQuery = $("#animal-input").val().trim();
	topics.push(nowQuery);
	buttonMaker(topics, "callButton");
	// console.log("you clicked it, alright");
	event.preventDefault();
});

function buttonMaker (array, newClass) {
	$("#animalButtons").empty();
	for (var i = 0; i < array.length; i++) {
		var x = $("<button>");
		x.text(array[i]);
		x.attr("data-animal", array[i]);
		x.addClass(newClass);
		$("#animalButtons").append(x);
	}
}


$(document).on("click", ".callButton", function (){

	$("#animals").empty();

	var queryTerm = $(this).data("animal");

// function callAndRender (searchTerm) {

	$.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + queryTerm + "&api_key=9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd&limit=10",
        method: "get"
      })

      .done(function(response) {

        console.log(response);

        for (var i = 0; i < response.data.length; i++) {
        	var forStillGIF  = response.data[i].images.fixed_height_still.url;
        	var forMovingGIF  = response.data[i].images.fixed_height.url;
        	var renderGIF = $("<img>");
        	renderGIF.attr("src", forMovingGIF);
        	var theRating = response.data[i].rating;
        	var showRating = $("<span>").text("rating: " + theRating);
        	$("#animals").append(renderGIF);
        	$("#animals").append(showRating);
        }

        // var imageUrl = response.data.image_original_url;

        // var displayGIF = $("<img>");

        // // using attribute methods to change sourcing, and the alt (what's displayed if there's no image to use)

        // displayGIF.attr("src", imageUrl);
        // displayGIF.attr("alt", "missing image");

        // adding the image to the DOM, before the specified div (prepending, rather than appending)

      })

});

// callAndRender("dogs");


        // setting up a new image 'spot' for the 'incoming' GIF, for display via the DOM, here



	// var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd&limit=5"
	// var imageUrl = response.data.image_original_url;