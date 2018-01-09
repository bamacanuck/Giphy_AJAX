//Yeah, I stuck with animals.

var topics = ["dog", "tiger", "monkey", "ape", "armadillo", "gila monster"];

var apiKey = "9Vbhzo58898EDFt3Wz5NL1r0dNbCo0Vd"

$(function () {
	// console.log("page loaded")
	buttonMaker(topics, "callButton");
});

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
};


$(document).on("click", ".callButton", function (){

	$("#animals").empty();

	var queryTerm = $(this).data("animal");

// This next bit lacks a small structural element, yet. It seems a matter of HTML or CSS, really. This is the in-window placement of the associated rating in relation to each GIF image.

	$.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + queryTerm + "&api_key=" + apiKey + "&limit=10",
        method: "get"
      })

      .done(function(response) {

        console.log(response);

        for (var i = 0; i < response.data.length; i++) {
        	var forStillGIF  = response.data[i].images.fixed_height_still.url;
        	var forMovingGIF  = response.data[i].images.fixed_height.url;
        	var renderGIF = $("<img>");
        	renderGIF.attr("src", forStillGIF);
        	var theRating = response.data[i].rating;
        	var showRating = $("<span>").text("rating: " + theRating);
        	$("#animals").append(renderGIF);
        	$("#animals").append(showRating);
        	renderGIF.addClass("clickable");
        	renderGIF.attr("data-state", "forStillGIF")
        	renderGIF.attr("data-moving", forMovingGIF)
        	renderGIF.attr("data-still", forStillGIF)
        }

      })

});

$(document).on ("click", ".clickable", function () {
	var mvmt = $(this).attr("data-state");
	if (mvmt == "still") {
		$(this).attr("src", $(this).data("moving"));
		$(this).attr("data-state", "moving");
	}
	else {
		$(this).attr("src", $(this).data("still"));
		$(this).attr("data-state", "still");
	}
	// console.log ("you clicked... yep")
});