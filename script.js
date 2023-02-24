$(document).ready(function () {
  $('.saveBtn').click(function(){
    var currentDiv = $(this).parent().attr('id');
    var savedText = $('#' + currentDiv).children('textarea').val();
    localStorage.setItem(currentDiv, savedText); 
  });

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
  
  for (i = 9; i < 18; i++) {
    var quickGet = localStorage.getItem(i);
    $("#" + i).children('textarea').val(quickGet);
  }

  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY'));
});