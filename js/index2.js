$(document).ready(function(){
	$('#box').fullpage({
		navigation:"true",
		navigationColor:"#02BDD5",
		anchors: ['page1', 'page2', 'page3', 'page4'],
		menu: '#menu',
		navigationTooltips:['Home',"基本资料","专业技能","作品集"]
	});
	//top chuxian
	  $(window).on("scroll",function(){
        var top=$(window).scrollTop()
        if(top>=200){
            $(".top").css("display","block")  
        } else{
            $(".top").css("display","none")  
        }
     })
})