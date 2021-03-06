// creating an array of strings called `topics`.
var topics = ["game of thrones","Arrow","The Flash","The Big Bang Theory",
"The Walking Dead","Westworld","Shameless","American Horror Story",
"Breaking Bad","House of Cards"];

// creating buttons in HTML using jQuery.
// creating a function to create buttons.
function creatingButtons(){
	$("#giphy-view").empty();
	// using a for loop to appends a button for each string in the array.
	for (var i = 0; i < topics.length; i++){
		// creating a new button tag
		var button = $("<button>");
		// adding a new class to button tag
		button.addClass("topic");
		// adding a new data attribute to the button tag
		button.attr("data-name", topics[i]);
		// assigning the string values from the array to the button tag 
		button.text(topics[i]);
		// appending the button tag and all of its new properties to the "giphy-view" id
		$("#giphy-view").append(button);
	}
}

// creating on click event for the button to populate the array of topics
$("#add-giphy").on("click", function(event) {
	event.preventDefault();
	
	// assigning the new user input to the variable topic
	var topic = $("#giphy-input").val().trim();

	if (topic !== ""){
		// pushing the new user input into the array called topics
		topics.push(topic);
	}
	// calling the function creatingButtons which will also create the button
	// for user input too
	creatingButtons();
});
// Adding a click event to all elements with a class of "topic
$(document).on("click", ".topic", displayGiphy);
// Calling the creatingButtons function
creatingButtons();

// creating a function called displayGiply which will carry the URl and
// the ajax call to get the gaphy from the gaphi api
function displayGiphy(){
	var topic = $(this).attr("data-name");
	$.ajax({
		url: "http://api.giphy.com/v1/gifs/search?q=" + topic +
		"&api_key=dc6zaTOxFJmzC",
		method: "GET"
	}).done(function(response) {
		console.log(response);

	// Storing an array of results in the results variable
	var results = response.data;

	//Looping over every result item
	for (var i = 0; i < results.length; i++) {

	// Creating a div with the class "item"
	var gifDiv = $("<div class='item'>");

	// Storing the result item's rating
	var rating = results[i].rating;

	// Creating a paragraph tag with the result item's rating
	var p = $("<p>").text("Rating: " + rating);

	// Creating an image tag
	var giphyImage = $("<img>");

	// Giving the image tag an src attribute of a proprty pulled off the result item
	giphyImage.attr({"src": results[i].images.fixed_height_still.url,
		"data-still": results[i].images.fixed_height_still.url,
		"data-animate": results[i].images.fixed_height.url,
		"data-state": "still"});

	// Appending the paragraph and personImage we created to the "gifDiv" div we created
	gifDiv.append(p , giphyImage);

	// Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
	$("#images").prepend(gifDiv);
}
});
}

$("#images").on("click", "img", function(){
	var state = $(this).attr("data-state");
// If the clicked image's state is still, update its src attribute to what its data-animate value is.
// Then, set the image's data-state to animate
// Else set src to the data-still value
if (state === "still") {
	var farhan = $(this).attr("data-animate");
	$(this).attr("src", farhan);
	$(this).attr("data-state", "animate");
} else {
	var usman =  $(this).attr("data-still");
	$(this).attr("src", usman);
	$(this).attr("data-state", "still");
}
});