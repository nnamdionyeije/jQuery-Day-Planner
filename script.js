$(document).ready(function () {
  //saves the text in a div
  $('.saveBtn').click(function(){
    var currentDiv = $(this).parent().attr('id');
    var savedText = $('#' + currentDiv).children('textarea').val();
    localStorage.setItem(currentDiv, savedText); 
  });

  // changes the color of the divs
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
  
  // places the text into the divs from local storage
  for (i = 9; i < 18; i++) {
    var quickGet = localStorage.getItem(i);
    $("#" + i).children('textarea').val(quickGet);
  }

  //sets the day
  $('#currentDay').text(dayjs().format('dddd, MMMM Do, YYYY'));
});