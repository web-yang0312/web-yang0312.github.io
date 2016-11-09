$(document).ready(function(){
	var wheight=$(window).height()
	$("#shouye").css("height",wheight);
	$(".but").eq(0).click(function(){
		$(".fixed").eq(0).addClass("active1");	
	})
	$(".nav-lis").eq(0).addClass("active2");
	$(".nav").eq(0).addClass("active3");
	$(".nav").each(function(index){
	  	$(this).click(function(){
	  		$(".nav").removeClass("active3");
		    $(".nav").eq(index).addClass("active3");
		    $(".nav-lis").removeClass("active2");
		    $(".nav-lis").eq(index).addClass("active2");
		  })
		})
    //lunbotu
    var n=0;
	var next=0;
	var flag=true;
	var t=setInterval(move,2000);
	function move(){
	next=n+1;
	if(next>=$(".turn-list").length){
		next=0;
	}
    $(".turn-list").eq(n).removeClass("turn-list-first")
    $(".turn-list").eq(next).addClass("turn-list-first");
    $(".cir").eq(n).removeClass("cir-first")
    $(".cir").eq(next).addClass("cir-first");
    n=next;
   }
	$(".cir").each(function(index){
	  	$(this).hover(function(){
		    $(".turn-list").eq(index).addClass("turn-list-first");
		    $(".nav-lis").eq(index).addClass("cir-first");
		  },function(){
		  	 $(".turn-list").eq(index).removeClass("turn-list-first");
		    $(".nav-lis").eq(index).removeClass("cir-first");
		  })
		})
})
