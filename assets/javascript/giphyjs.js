// $(document).ready() {}

	$(function () {
		console.log("page loaded")
		buttonMaker();
	})

	var topics = ["dog", "tiger", "monkey", "ape"];

	function buttonMaker (topics) {
		$("#animalButtons").empty();
		for (var i = 0; i < topics.length; i++) {
			var x = $("<button>");
			x.text(topics[i]);
			$("#animalButtons").append(x);
		}
	}