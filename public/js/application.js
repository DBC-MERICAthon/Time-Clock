$(document).ready(function() {
  // $('.question').first().toggle()
  // $('.question').first().addClass('active-question')
  // value = $('.question').first().attr('question-id')
  // $('.question_id').attr('value',value)
  //
  // $('.question-box').on('click','.next-question', function(event){
  //   event.preventDefault()
  //   console.log("You clicked the next button")
  //   active = $('.active-question')
  //   if(active.html() == $('.question').last().html()){
  //     next = $('.question').first()
  //   }
  //   else {
  //     next = $('.active-question').next()
  //   }
  //   active.toggle()
  //   next.toggle()
  //   active.removeClass('active-question')
  //   next.addClass('active-question')
  //   value = next.attr('question-id')
  //   $('.question_id').attr('value',value)
  // })

  var foo = function() {
    console.log("bug");
    var intTime = $('.start-time').text();
    console.log(intTime);
    $('.start-time').toggle();
    return intTime;
  };

  var clock = $('.your-clock').FlipClock(foo(), {
  // ... your options here
    countdown: false,
    autoStart: true,
    clockFace: "HourlyCounter"
  });

/*  var canvas = document.getElementById("canvas"),
  		context = canvas.getContext("2d"),
  		video = document.getElementById("video"),
  		videoObj = { "video": true },
  		errBack = function(error) {
  			console.log("Video capture error: ", error.code);
  		};*/

  	// Put video listeners into place/*
  	// if(navigator.getUserMedia) { // Standard
  	// 	navigator.getUserMedia(videoObj, function(stream) {
  	// 		video.src = stream;
  	// 		video.play();
  	// 	}, errBack);
  	// } else if(navigator.webkitGetUserMedia) { // WebKit-prefixed
  	// 	navigator.webkitGetUserMedia(videoObj, function(stream){
  	// 		video.src = window.URL.createObjectURL(stream);
  	// 		video.play();
  	// 	}, errBack);
  	// }
  	// else if(navigator.mozGetUserMedia) { // Firefox-prefixed
  	// 	navigator.mozGetUserMedia(videoObj, function(stream){
  	// 		video.src = window.URL.createObjectURL(stream);
  	// 		video.play();
  	// 	}, errBack);
  	// }
    //
    // // Trigger photo take
    // document.getElementById("snap").addEventListener("click", function() {
    // 	context.drawImage(video, 0, 0, 640, 480);
    // });
    //
    // var button = document.getElementById('btn-save');
    // button.addEventListener('click', function (e) {
    //     var dataURL = canvas.toDataURL('image/png');
    //     button.href = dataURL;
    //     // Photo.new(path: dataURL)
    //     var data = {path: dataURL}
    //
    //     request = $.ajax({
    //       url: '/photos',
    //       type: 'POST',
    //       data: data,
    //       // dataType: "HTML"
    //     });
    //     request.done(function(response){
    //       console.log("SUCCESS");
    //       console.log(response);
    //     });
    //     request.fail(function(response){
    //       console.log("FAIL");
    //       console.log(response);
    //     });
    // });


});
/*
var workingTime = function() {



    var today = new Date();
    var secondsElapsedInDay = 3600 * today.getHours() + 60 * today.getMinutes()
    + today.getSeconds();
    var intTime = $('.start-time').text();
    var secondsElapsedSinceStart = secondsElapsedInDay - intTime;
    seconds = secondsElapsed
    /*var m = h + 60 today.getMinutes();
    var s = today.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = "You have been clocked in for" +
    h + "hours, " + m + " minutes, and " + s + " seconds.";
    var t = setTimeout(function(){workingTime()},1000);

    function checkTime(i) {
        if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
    }
};*/
