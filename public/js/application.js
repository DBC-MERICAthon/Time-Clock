$(document).ready(function() {

// We have three questions
// Grab and display (toggle) first .question inside the .question-box

$('.question').first().toggle()
$('.question').first().addClass('active-question')


$('.question-box').on('click','.next-photo', function(event){
  event.preventDefault()
  console.log("You clicked the next button")
  active = $('.active-question')
  if(active.html() == $('.question').last().html()){
    next = $('.question').first()
  }
  else {
    next = $('.active-question').next()
  }
  console.log(next)
  active.toggle()
  next.toggle()
  active.removeClass('active-question')
  next.addClass('active-question')
})


});
