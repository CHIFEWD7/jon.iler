// Create a global variable for the total
// Create a function you can run when you submit the field Hint: .submit() in jQuery

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "dollars friendly" format (HINT: create an additional function to format your number into a "dollars friendly" format)

var total = 0;

$('#entry').submit(enter);

function enter(event) {
  var entry, dollars;
  event.preventDefault();
  entry = $('#newEntry').val();
  entry = parseFloat(entry);
  dollars = dollarsFormat(entry);
  $('#entries').append('<tr><td></td><td>' + dollars + '</td></tr>');
  total = total + entry;
  $('#total').html(dollarsFormat(total));
  $('#newEntry').val(''); 
}

function dollarsFormat(number) {
  var dollars = parseFloat(number);
  dollars = dollars.toFixed(2);
  dollars = '$' + dollars;
  return dollars; 
}