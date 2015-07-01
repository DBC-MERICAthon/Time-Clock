$(document).ready(function() {
  questionListener();
  snapPhoto();
  savePhoto();

  $('.your-clock').FlipClock(calculateTime(), {
    countdown: false,
    autoStart: true,
    clockFace: "HourlyCounter"
  });
});

var snapPhoto = function(){
  if ($('#canvas').length > 0){
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
      $('.snap-wrap').toggle();
      $('.save-wrap').toggle();
    });
  }
};

var savePhoto = function() {
  if ($('#photo-box').length > 0) {
    var button = document.getElementById('btn-save');
    button.addEventListener('click', function (e) {
        var dataURL = canvas.toDataURL('image/png');
        button.href = dataURL;
        var data = {path: dataURL}

        request = $.ajax({
          url: '/photos',
          type: 'POST',
          data: data
        });
        request.done(function(response){
          $('#btn-save').toggle();
          $('.save-wrap').append("<button class='disabled center-block btn btn-success'>Saved!</button>");
        });
        request.fail(function(response){

        });
    });
  }
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
  });
};

var calculateTime = function() {
  console.log("bug");
  var intTime = $('.start-time').text();
  console.log(intTime);
  $('.start-time').toggle();
  return intTime;
};
