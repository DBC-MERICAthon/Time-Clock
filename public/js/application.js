$(document).ready(function() {
  workingTime();
$('.question').first().toggle()
$('.question').first().addClass('active-question')
value = $('.question').first().attr('question-id')
$('.question_id').attr('value',value)

$('.question-box').on('click','.next-question', function(event){
  event.preventDefault()
  console.log("You clicked the next button")
  active = $('.active-question')
  if(active.html() == $('.question').last().html()){
    next = $('.question').first()
  }
  else {
    next = $('.active-question').next()
  }
  active.toggle()
  next.toggle()
  active.removeClass('active-question')
  next.addClass('active-question')
  value = next.attr('question-id')
  $('.question_id').attr('value',value)
})


});

var workingTime = function() {
    var newDate = $('.start-time').text().prettyDate();
    console.log(newDate);
    $('.start-time').text(newDate);
};
//prettyDate("2008-01-28T20:24:17Z")
