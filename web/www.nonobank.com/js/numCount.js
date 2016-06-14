$.fn.numCount = function(Number) {
				if(typeof Number == "number") {var newNumber=Number;}else{ return};
				var specialCode=arguments.length>1?arguments[1]:"";
				var _this=$(this);
				var totalCount=0;//计数器
				var sum=0;//添加数
				var changeTime = 1;//滚动时间
				var	changeSpeed= 20; //滚动间隔
				var plength=pointLength(Number);
				
				var unitNum=parseFloat(Number/(changeTime*1000/changeSpeed)).toFixed(plength);
				
				function pointLength(Num){   //计算小数点后位数 默认2个
					return parseInt(String(Num).indexOf(".")>0?String(Num).split(".")[1].length+2:2);
				}
				
				var Timeout=setTimeout(function(){
					
					sum+=parseFloat(parseFloat(unitNum).toFixed(plength));
					switch(specialCode){
						case "":_this.html(parseFloat(sum.toFixed(plength-2)).formatMoney(plength-2)); //为了解决JS 小数点加减的BUG
						break;
						case "cn":_this.html(parseFloat(sum.toFixed(plength-2)).formatMoney((plength-2),"","","",4,1))
						break;
					}
					totalCount++;
					if(totalCount<(changeTime*1000/changeSpeed)){
						setTimeout(arguments.callee,changeSpeed)
					}
				},changeSpeed)
			}