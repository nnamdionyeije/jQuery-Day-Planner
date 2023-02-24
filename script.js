// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// ask about this header thingy
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').click(function(){
    var currentDiv = $(this).parent().attr('id');
    var savedText = $('#' + currentDiv).children('textarea').val();
    // var storeEvent = [
    //   divID = currentDiv,
    //   divText = savedText,
    // ]

    localStorage.setItem(currentDiv, JSON.stringify(savedText));
  });

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  var currentHour = dayjs().format('H');
  for (i = 9; i < 18; i++) {
    if (i < currentHour) {
      $("#" + i).addClass("past");
    } else if (i > currentHour) {
      $("#" + i).addClass("future");
    } else {
      $("#" + i).addClass("present");
    }
  }
  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  console.log(localStorage.length);
  for (i = 9; i < 18; i++) {
    var quickGet = JSON.parse(localStorage.getItem(i));
    $("#" + i).children('textarea').val(quickGet);
  }



  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});