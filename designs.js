
// All variables are defined here
var color, canvas, cell, gridHeight, gridWidth, rows, submit;


function makeGrid() {
	console.log("makeGrid is running!") //For debugging sake
	
	// Select size input 
	canvas = $('#pixel_canvas');
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	
	canvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
    rows = $('tr');

    var y = 0
    while (y < gridWidth ) {
        rows.append('<td></td>');
        y++; 
    }
	
	cell = canvas.find('td');
	
	// When td is clicked by the user, change color of td
	cell.click(function() {
		// Select color input
		console.log("changeColor is running!"); // for debugging sake
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()

submit = $('input[type="submit"]')

submit.click(function(event) {
  event.preventDefault();
  makeGrid();
});


  
