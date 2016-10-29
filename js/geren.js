$(document).ready(function(){
	var wheight=$(window).height()
	$("#shouye").css("height",wheight);
	$(".section").css("height",wheight);
	$(".fixed").eq(0).css("border-radius","0 0 0 100%")
	$(".but").eq(0).click(function(){
		$(".fixed").eq(0).addClass("active1");	
		$(".active1").eq(0).css("border-radius","0 0 0 0");
		$("#about").addClass("active2");
	})
})
