$(document).ready(function() {

  questionListener();
  snapPhoto();
  savePhoto();
});

var workingTime = function() {
  var newDate = $('.start-time').text().prettyDate();
  console.log(newDate);
  $('.start-time').text(newDate);
};

var snapPhoto = function(){
  var canvas = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      video = document.getElementById("video"),
      videoObj = { "video": true },
      errBack = function(error) {
        console.log("Video capture error: ", error.code);
      };

  // Put video listeners into place
  if(navigator.getUserMedia) { // Standard
    navigator.getUserMedia(videoObj, function(stream) {
      video.src = stream;
      video.play();
    }, errBack);
  } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
    navigator.webkitGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  }
  else if(navigator.mozGetUserMedia) { // Firefox-prefixed
    navigator.mozGetUserMedia(videoObj, function(stream){
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, errBack);
  };
  $('#photo-box').on('click','#snap', function(event){
    context.drawImage(video, 0, 0, 640, 480);
    $('#video').toggle();
    $('#snap').toggle();
  });
  // document.getElementById("snap").addEventListener("click",
  //   function() {
  //     context.drawImage(video, 0, 0, 640, 480);
  //     $('#video').toggle();
  //     $('#snap').text('Retake')
  //     $('#snap').addClass('retake')
  //   });

  $('#photo-box').on('click','.retake', function(event){
    console.log('Clicked on retake button')
  });

};

var savePhoto = function() {
  var button = document.getElementById('btn-save');
  button.addEventListener('click', function (e) {
      var dataURL = canvas.toDataURL('image/png');
      button.href = dataURL;
      // Photo.new(path: dataURL)
      var data = {path: dataURL}

      request = $.ajax({
        url: '/photos',
        type: 'POST',
        data: data
      });
      request.done(function(response){

      });
      request.fail(function(response){

      });
  });
};

var questionListener = function() {
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
};
