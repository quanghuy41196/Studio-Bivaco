$(function(){
  $('.slider').bxSlider({
  	infiniteLoop: false,
	slideMargin: 20,
    auto: true,
    speed: 500,
  });
});


$(document).ready(function(){
	var owl = $('#slide-sv');
	owl.owlCarousel({
	    items:3,
	    loop:false,
	    autoPlay: 3000,
	    autoplayHoverPause:true,
    });
});


$(document).ready(function(){
	var owl = $('#slide-album');
	owl.owlCarousel({
	    items:4,
	    loop:false,
	    autoPlay: 3000,
	    autoplayHoverPause:true,
    });
});



$(document).ready(function(){
	var owl = $('#slide-kh');
	owl.owlCarousel({
	    items:2,
	    loop:false,
	    autoPlay: 4000,
	    autoplayHoverPause:true,
    });
});


function backToTop(){
	var  scrollTop = $(window).scrollTop();
		if(scrollTop>100){
			$('.back-to-top').addClass('show');
		}else{
			$('.back-to-top').removeClass('show');
		}
};


$(document).ready(function(){
	backToTop();
	$(window).on('scroll', function () {
        backToTop();
    });
	$('.back-to-top').click(function(event){
		$('html,body').animate({
			scrollTop: 0},1400);
	})
})












    