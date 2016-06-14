$.fn.slidePic=function(){
			var _length=$(this).children("a").length;
			var _width=$(this).width();
			var _this=$(this);
			var timeout="";
			var Inum=0;
			_this.find(".b_e").append("<div class='control'></div>")
			for(var i=0;i<_length;i++){
					_this.find(".control").append("<a href='javascript:;'></a>");
				}
			
				_this.find(".control a").on("click",function(){
					Inum=$(this).index();
					$(this).addClass("selected").siblings().removeClass("selected");
					_this.find(".bannerBox").fadeOut();
					_this.find(".bannerBox").eq($(this).index()).fadeIn();
				})
				function auto(){
						Inum++;
						if(Inum>=_length){ Inum=0;}
						_this.find(".control a").eq(Inum).click();
					}
			var timeout=setInterval(auto,5000);
			$(this).on("mouseover",function(){
					clearInterval(timeout);
				}).on("mouseout",function(){
					timeout=setInterval(auto,5000);
					})
			_this.find(".control a").eq(0).click();
		}