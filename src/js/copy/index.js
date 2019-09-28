$(document).ready(function(){
	//榧犳爣婊氳疆浜嬩欢
	function wheel(event){
		var delta = 0;
		if (!event) event = window.event;
		if (event.wheelDelta) {
			delta = event.wheelDelta/120; 
			if (window.opera) delta = -delta;
		} else if (event.detail) {
			delta = -event.detail/3;
		}
		if (delta && !isMobile){
			mouseWheel(delta);
		}
	}
	 
	if (window.addEventListener)
	window.addEventListener('DOMMouseScroll', wheel, false);
	window.onmousewheel = document.onmousewheel = wheel;
	
	//閿洏鎸夐敭浜嬩欢
	$(document).keydown(
		function(e){keyDown(e);
	});
	
	//榧犳爣婊氳疆浜嬩欢
	function mouseWheel(delta) {
		var dir = delta > 0 ? "up" : "down";
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		var numOfChildren = $(".row").length;
		if( dir == "down" && activeIndex<numOfChildren && canRoll) {
			jumpPage(false);
		} else if( dir =="up" && activeIndex>1 && canRoll) {
			jumpPage(true);
		} 
	}
	
	//閿洏浜嬩欢
	function keyDown(e) {
		var keycode = e.which || e.keyCode;
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		var numOfChildren = $(".row").length;
		if ((keycode == 65 || keycode == 38 || keycode ==87 || keycode ==33 ) && activeIndex>1 && canRoll){
			jumpPage(true);
			return false;
		} else if ((keycode == 40 || keycode == 83 || keycode ==68 || keycode ==34 && canRoll) && activeIndex<numOfChildren && canRoll){
			jumpPage(false);
			return false;
		} 
	}
	
	function downBtnDown(){
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		var numOfChildren = $(".row").length;
		if (activeIndex<numOfChildren && canRoll){
			jumpPage(false);
		}else{
			jumpPage(true);
		}
	}
	//鏄剧ず涓婁竴涓獆|涓嬩竴涓猻ection
	function jumpPage(up) {
		var $actived = $(".row.active");
		var activeIndex = parseInt($actived.attr('index'));
		showPage(activeIndex + (up?-1:1));
	}			
});
	var curIndex = 1,
		canRoll = true,
		ci = 1;
	function showPage(index){	
		if ( curIndex == index ) return; 
		if ( canRoll == false ) return;
		canRoll = false;
		// if (index==1||index==6) {
		// 	$('.row-controls').addClass('hide');
		// } else {
		// 	$('.row-controls').removeClass('hide');
		// }
		if(index==4){
			$("#s3").addClass('active2');
		}else{
			$("#s3").removeClass('active2');
			// var moveh = $('#move').height();
			// $('#move').stop().animate({top: (index-1)*moveh},800);
			// $('.row-controls li').removeClass('act').eq(index-1).addClass('act');
		}	
		$("#s"+curIndex).removeClass("active").addClass("disappear");
		$("#boxsider").attr('class','');
		$("#boxsider").addClass("pagesider"+index);
		$("#s"+index).removeClass("disappear").addClass("active");
		var t = -(index-1)*w_height;
		if(index==4){
			var hnum=$("#s4").innerHeight();
			t=(-2*w_height)-hnum;
		}
		ci = index;
		$(".content").stop().animate({top:t},800,"easeInOutCirc");
		setTimeout(function(){
			canRoll = true;
		},1000);
		curIndex = index;
	}
	// $('.row-controls li').click(function() {
	// 	$('.row-controls li').removeClass('act');
	// 	$(this).addClass('act');
	// 	var index = $(this).index();
	// 	var moveh = $('#move').height();
	// 	$('#move').stop().animate({top: index*moveh},800);
	// 	showPage(index+1);
	// });
	$(window).resize(function(){
		init();
	});
	function init(){
		if(!isMobile){
			// $('.banner .item').css({height:w_height});
			setImgMax($('.content .pic2'),1920,850,w_width,w_height);
			$('.content').css({top:-(ci-1)*w_height});
			$('.rowh').css({height:w_height});
		}else{
			$('.rowh').css({height:"auto"});
			$('.content').attr('style', '');
			// $('.banner .item').css({height:"auto"});
			// $('.banner .pic2').attr('style', '');
		}
	}
	init();
	$('#s1').addClass('active');

	// $('.banner').on('init', function(event, slick, currentSlide, nextSlide) {
	// 	$('.banner .item').first().addClass('ba-active');
	// });
	// $('.banner').slick({
	// 	speed: 1000,
	// 	arrows: true,
	// 	dots: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 5000,
	// 	fade: true,
	// 	pauseOnHover: false
	// }).on('beforeChange', function(event, slick, currentSlide, nextSlide){
	// 	$('.banner .item').removeClass('ba-active');
	// 	$('.banner .item').eq(nextSlide).addClass('ba-active');
	// });

	// $('.in-res-list').slick({
	// 	arrows: false,
	// 	dots: true,
	// 	autoplay: true,
	// 	autoplaySpeed: 5000
	// });