$(document).ready(function() {
	//样式调整。
    $(".nav,.use").find("li:first").css("margin-left","0px");
	$(".pp_7").css("height","83px");
	//导航
	$("#nav_1").click(function(){
		$(".nav_line").stop().animate({"left":"0px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav2_1").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"0px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav2_1").click(function(){
		$(".nav_line").stop().animate({"left":"0px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav_1").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"0px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav_2").click(function(){
		$(".nav_line").stop().animate({"left":"150px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav2_2").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"2600px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav2_2").click(function(){
		$(".nav_line").stop().animate({"left":"150px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav_2").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"2600px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav_3").click(function(){
		$(".nav_line").stop().animate({"left":"292px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav2_3").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"2980px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav2_3").click(function(){
		$(".nav_line").stop().animate({"left":"292px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav_3").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"2980px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav_4").click(function(){
		$(".nav_line").stop().animate({"left":"432px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav2_4").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"4200px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav2_4").click(function(){
		$(".nav_line").stop().animate({"left":"432px"},500);
		$(this).addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("#nav_4").addClass("nav_clicked").siblings().removeClass("nav_clicked");
		$("html,body").animate({"scrollTop":"4200px"}, {duration: 2000, easing: 'easeInOutQuint'});
		});
	
	$("#nav_1").hover(function(){
		$(".nav_line").stop().animate({"left":"0px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
	
	$("#nav2_1").hover(function(){
		$(".nav_line").stop().animate({"left":"0px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
			
	$("#nav_2").hover(function(){
		$(".nav_line").stop().animate({"left":"150px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
	
	$("#nav2_2").hover(function(){
		$(".nav_line").stop().animate({"left":"150px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
			
	$("#nav_3").hover(function(){
		$(".nav_line").stop().animate({"left":"292px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
	
	$("#nav2_3").hover(function(){
		$(".nav_line").stop().animate({"left":"292px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
	
	$("#nav_4").hover(function(){
		$(".nav_line").stop().animate({"left":"432px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});
	
	$("#nav2_4").hover(function(){
		$(".nav_line").stop().animate({"left":"432px"},500);
		},function(){
			if($("#nav_1").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"0px"},500);
			}
			if($("#nav_2").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"150px"},500);
			}
			if($("#nav_3").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"292px"},500);
			}
			if($("#nav_4").hasClass("nav_clicked")){
			$(".nav_line").stop().animate({"left":"432px"},500);
			}
			});


});