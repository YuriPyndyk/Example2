define(['jquery'], function() {
        var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
               
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).addClass("plays"); 
            $(this).removeClass("paused");
        } else {
            video.pause();
            $(this).addClass("paused");
            $(this).removeClass("plays");
        }       
    });
    
       $("#playpause").click(function () {
        $(".howWorks").toggleClass("invisible");
       $(".video__overlay").toggleClass("invisible");
   });
    
  });