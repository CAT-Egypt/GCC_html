$(document).ready(function(){
	var isDevice = (/android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent.toLowerCase()));
	if (isDevice) {
		interactionUp = "touchend";
		interactionDown = "touchstart";
		interactionOver = interactionDown;
		interactionMove = 'touchmove';
	} else {
		interactionUp = "click";
		interactionDown = "mousedown";
		interactionOver = "mouseover";
		interactionMove = 'mousemove';
	};
	
	setTimeout(function(){
		var wind = $('.wind');
		var sBtn = $('.startBtn');
		$(wind).animate({left:-2000,opacity:0},2000).hide(setTimeout(600));
	},100);
	
	$('.startBtn').on(interactionUp,function(){
		$('.startBtn').fadeOut(200).fadeIn(200);
		$('.page2').show().animate({left:0},700);
	});

//btns icons navigate to the own pages	
	$('#agendaBtn').on(interactionUp, function(){
		$('.page2').animate({left:2000},700).hide(setTimeout(100));
		$('.page3_agenda').show().animate({left:0},700);
	});
	
	$('#alarmBtn').on(interactionUp, function(){
		$('.page2').animate({left:2000},700).hide(setTimeout(100));
		$('.page4_alarm').show().animate({left:0},700);
	});
	
	$('#voiceBtn').on(interactionUp, function(){
		$('.page2').animate({left:2000},700).hide(setTimeout(100));
		$('.page5_voice').show().animate({left:0},700);
	});
	
	$('#noteBtn').on(interactionUp, function(){
		$('.page2').animate({left:2000},700).hide(setTimeout(100));
		$('.page6_note').show().animate({left:0},700);
	});
	
	$('#messageBtn').on(interactionUp, function(){
		$('.page2').animate({left:2000},700).hide(setTimeout(100));
		$('.page7_message').show().animate({left:0},700);
	});
//end btns icons
	
//hide pages and show icons page	
	$('.page3_agenda,.page4_alarm,.page5_voice,.page6_note,.page7_message').on(interactionUp, function(){
		$('.page2').show().animate({left:0},700);
		$('.page3_agenda,.page4_alarm,.page5_voice,.page6_note,.page7_message').animate({left:2000},700).hide(setTimeout(100));
	});
});