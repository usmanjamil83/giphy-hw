// creating an array of strings called `topics`. 
var topics = ["game of thrones","Arrow","The Flash","The Big Bang Theory","The Walking Dead","Westworld","Shameless","American Horror Story","Breaking Bad","House of Cards"];

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
	// pushing the new user input into the array called topics
	topics.push(topic);
	// calling the function creatingButtons
	creatingButtons();
});
// calling the function creatingButtons
creatingButtons();




// 3. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. 

// 4. When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// 5. Under every gif, display its rating (PG, G, so on). 

//    * This data is provided by the GIPHY API.
//    * Only once you get images displaying with button presses should you move on to the next step.

// 6. Add a form to your page takes the value from a user input box and adds it into your `topics` array. Then make a function call that takes each topic in the array remakes the buttons on the page.

// 7. **Rejoice**! You just made something really cool.

// - - -

function displayGiphy(){
	var topic = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
	topic + "&api_key=dc6zaTOxFJmzC&limit=10";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response){
		console.log(response);
	});
}
displayGiphy();

// still have to create an on click functionto make it work