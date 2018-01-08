$(function () {
	console.log("page loaded")
	buttonMaker(topics);
})

var topics = ["dog", "tiger", "monkey", "ape"];

function buttonMaker (array) {
	$("#animalButtons").empty();
	for (var i = 0; i < array.length; i++) {
		var x = $("<button>");
		x.text(array[i]);
		$("#animalButtons").append(x);
	}
}