jQuery.noConflict();
jQuery(document).ready(function(){
	jQuery('#dowebok').fullpage({
		anchors: ['page1', 'page2', 'page3', 'page4','page5', 'page6',],
		menu: '.nav',
	    afterLoad: function(anchorLink, index){
			if(index == 2){
				jQuery("#about").find('.xinxi').addClass("active4")
			}
			if(index == 3){
				jQuery('#skill').find('p').delay(500).animate({
					bottom: '0'
				}, 1500);
			}
			if(index == 4){
				jQuery('#portfolio').find('p').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				jQuery('#about').find('.xinxi').removeClass("active4")
			}
			if(index == '3'){
				jQuery('#skill').find('p').delay(500).animate({
					bottom: '-120%'
				}, 1500);
			}
			if(index == '4'){
				jQuery('#portfolio').find('p').fadeOut(2000);
			}
		}
	});
	jQuery(".caidan").on("click",function(){
		jQuery(".nav2").toggleClass("active1");
	});
	jQuery(".xinxi li div").on("touchstart",function(){
		var index=jQuery(this).index()
		jQuery(".xinxi li div").eq(index).addClass("active3")
	});
	//轮播图
	var n=0;
	var next=0;
	jQuery(".lunbo .bo").eq(0).css({ "opacity": "1","display":"block"});
	jQuery(".content1").eq(0).addClass("active6")
	var t=setInterval(move,3000)
	var lun=jQuery(".lunbo .bo");
	function move(){
		next=n+1;
		if(next>lun.length-1){
			next=0
		}
		lun.eq(n).animate({opacity:0},1000,function(){
			jQuery(".con1").removeClass("active6")
			jQuery(".con2").removeClass("active6")
			jQuery(".con3").removeClass("active6")
		})
		lun.eq(next).animate({opacity:1},1000,function(){
			jQuery(".con1").addClass("active6")
			jQuery(".con2").addClass("active6")
			jQuery(".con3").addClass("active6")
		})
		n=next;
	}
	jQuery("lunbo").hover(
	  function () {
	    clearInterval(t);
	  },
	  function () {
	    t=setInterval(move,4500);
	  }
	);
	 jQuery('.callBtn').on('click',function(){
        jQuery('.call a').toggleClass('active');
    });
});