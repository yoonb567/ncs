$(function() {
	$('.gnb>li').hover(function() {
		//mouse enter
		$(this).children('ul').show();
	}, function() {
		//mouse leave
		$('.gnb ul').hide();
	});

	//css
	for(var i=0;i<5;i++) {
		$('.rolling_banner li').eq(i).children('a').css({
			'background-image' : 'url(img/rollingBanner_'+(i+1)+'.jpg)'
		})
	}
	for(var i=0;i<3;i++) {
		$('.key_visual li').eq(i).children('a').css({
			'background-image' : 'url(img/key_visual_'+(i+1)+'.png)'
		})
	}

	//visual rolling
	var vis_num = 0;
	var vis_auto = setInterval(vis_roll, 1000)
	
	function vis_roll() {
		if(vis_num >= $('.key_visual li').length-1) {vis_num = 0}
		else {vis_num++}
		$('.key_visual li').fadeOut();
		$('.key_visual li').eq(vis_num).fadeIn()
		
		$('.visual_btn button').removeClass('visual_on');
		$('.visual_btn button').eq(vis_num).addClass('visual_on');		
	}
	$('.visual_btn button').click(function() {
		if($(this).attr('class') == 'pause' || $(this).attr('class') == 'play') {}
		else {
			vis_num = $(this).index()-1;
			vis_roll()
		}
	});
	$('.visual_btn .pause').click(function() {
		clearInterval(vis_auto);
		$(this).hide()
		$('.visual_btn .play').show()
	})
	$('.visual_btn .play').click(function() {
		vis_auto = setInterval(vis_roll, 1000)
		$(this).hide()
		$('.visual_btn .pause').show()
	})
	
	//rolling_banner
	var ban_pos = $('.slider li').width();
	var ban_num = 0;
	var roll_auto = setInterval(roll_ban, 1000)
	
	$('.control_btn button').click(function() {
		if($(this).attr('class') == 'pause' || $(this).attr('class') == 'play') {}
		else {
			ban_num = $(this).index()-1;
			roll_ban()
		}
	});
	$('.control_btn .pause').click(function() {
		clearInterval(roll_auto);
		$(this).hide()
		$('.control_btn .play').show()
	})
	$('.control_btn .play').click(function() {
		roll_auto = setInterval(roll_ban, 1000)
		$(this).hide()
		$('.control_btn .pause').show()
	})
	function roll_ban() {
		if(ban_num >= 4) {ban_num = 0}
		else {ban_num++}
		$('.slider').animate({'margin-left' : -ban_pos}, function() {
			$('.slider li:first-child').insertAfter($('.slider li:last-child'))
			$(this).css({'margin-left' : 0})
		})
		$('.control_btn button').css({
			'background' : 'none'	
		})
		$('.control_btn button').eq(ban_num).css({
			'background' : 'url(img/bgPaging.gif)'
		})
	}

	$('.family_site button').click(function() {
		$('.family_site ul').show();
	})
	$('.family_site li').click(function() {
		$('.family_site ul').hide();
	})
});//ready()