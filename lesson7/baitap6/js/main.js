$(document).ready(function () {
    openNav();
    openVideo();
    
    
    
/*======function=======*/
    function openNav(){
        $("#nav__open").on("click", function () {
            $(".nav-list").toggleClass("display");
        });
    }
    
function openVideo(){
    $("#video__play").on("click", function () {
        $(".section-video").html('<div class="video-display"><div class="video-control"><img src="images/play.png" alt="" class="video-control__start" id="video__play"></div> <video src="video/city_view.mp4"  preload="auto" controls id="video" class="video-display__main"></video><i class="fa fa-times fa-2x" aria-hidden="true" id="video__close"></i></div>');
        play();
        closeVideo();
    });
}
function closeVideo(){
    $("#video__close").on("click", function () {
        $(".section-video").html('<div class="video-control"><img src="images/play.png" alt="" class="video-control__start" id="video__play"></div>');
        openVideo();
    });
};
function play(){
    $(".video-control").on("click",function(){
        $("#video").get(0).play();
        $(this).css("display","none");
       pause();
    })
}
function pause(){
    $("#video").on("click",function(){
        $("#video").get(0).pause();
         $(".video-control").css("display","block");
       play();
    });
}
});
