$(document).ready(function() 
{
	hiddenx();
	if(isMobile1()){
		$('#leftBox').unbind();
		$('#LeftThreeLine').bind("click",function(){
			showx();
		})
	}
	else{
		$('#leftBox').bind("mouseout",function(){
			hiddenx();
		})
		$('#leftBox').bind("mouseover",function(){
			showx();
		})
	}
});

function hiddenx()
{
	$('#LeftThreeTab').css("display","none");
	$('#LeftThreeLine').css("display","");
}

function showx()
{
	$('#LeftThreeTab').css("display","");
	$('#LeftThreeLine').css("display","none");
	
	$.removeCookie("hiddenx");
}

function showleft(obj)
{
	if(obj=="shortCutList1")
	{
		other="shortCutList2";
	}
	else
	{
		other="shortCutList1";
	}
	hiddenleft(other);
	$('#leftBox').unbind();
    $('#'+obj).css('display','');
    $('#'+obj).animate({width:"380px"});
	
}

function hiddenleft(obj)
{
	 $('#'+obj).animate({width:"0px"},'fast',function (){$('#'+obj).css('display','none');});
	 $("#con1").hide();
	 $("#con2").hide();
	 $('#caculatemsg').html("");
	 $('#feedbackmsg').html("");
	 $('#suggestion').val('');
	 if(isMobile1()){
		 $('#leftBox').unbind();
			$('#LeftThreeLine').bind("click",function(){
				showx();
			})
	 }
	 else{
		 $('#leftBox').bind("mouseout",function(){
				hiddenx();
			})
			$('#leftBox').bind("mouseover",function(){
				showx();
			})
		
		 
	 }
}

function Calculation() 
{

     var borrowPrice = $("#borrowPrice").val(); //借款金额
     var borrowRate = $("#borrowRate").val(); //年利率
     var borrowExpires = $("#borrowExpires").val(); //借款期限
     var aim = $('input[name="aim"]:checked').val();
     var type = $("#type").val(); //还款方式
     var dislist = 1; //显示还款计划
     if (document.getElementById("tableType").checked == false) 
     {
         dislist = 0;
     }
     if (borrowPrice == '') 
     {
    	 $("#caculatemsg").html("借款金额不能为空！");
         return false;
     }
     if (isNaN(borrowPrice)) 
     {
    	 $("#caculatemsg").html("请输入正确的借款金额！");
         return false;
     }
     if (borrowRate == '') 
     {
    	 $("#caculatemsg").html("年利率不能为空！");
         return false;
     }
     if (isNaN(borrowRate))
     {
    	 $("#caculatemsg").html("请输入正确的利率！");
         return false;
     }
     if (borrowExpires == '') 
     {
    	 $("#caculatemsg").html("借出期限不能为空！");
         return false;
     }
     if (isNaN(borrowExpires)) 
     {
    	 $("#caculatemsg").html("请输入正确的期限！");
          return false;
     }

     var content = [];
     var monthRate = borrowRate / 100 / 12; //月利率
     var list_ul = '<li class="title">' +
     				'<div>' +
					'<div class="label1">月份</div>' +
					'<div class="label2">月本息</div>' +
					'<div class="label2">月本金</div>' +
					'<div class="label2">借款余额</div>' +
					'</div>' +
					'	<div style="clear:left;"></div>' +
                    '</li>';

     var b_repayed = 0; //已归还的本金
     for (var i = 1; i <= borrowExpires; i++) 
     {
          	if (type == 1) {
                //等额本息每月的本息额：Ａ×Ｃ×［（１＋Ｃ）^Ｂ］／（（１＋Ｃ）^Ｂ－１）
                //等额本息每月的利息额：Ａ×Ｃ×［（１＋Ｃ）^Ｂ－（１＋Ｃ）^(ｎ－１)］／（（１＋Ｃ）^Ｂ－１）
                var bx = borrowPrice * monthRate * Math.pow(1 + monthRate, borrowExpires) / (Math.pow(1 + monthRate, borrowExpires) - 1);
                var x = borrowPrice * monthRate * (Math.pow(1 + monthRate, borrowExpires) - Math.pow(1 + monthRate, i - 1)) / (Math.pow(1 + monthRate, borrowExpires) - 1);
                var b = bx - x;
            }
            else if (type == 2) {
                var b = borrowPrice / borrowExpires;
                var x = borrowPrice * monthRate;
            } else {
                if (i == borrowExpires) {
                    var b = borrowPrice;
                } else {
                    var b = 0;
                }
                var x = borrowPrice * monthRate;
            }

            b_repayed += b;
            
            var bx = parseFloat(b) + parseFloat(x);
            var y = borrowPrice - b_repayed;

            //alert('月偿还'+bx+'本金还款'+b+'月综合费'+x);
            list_ul = list_ul +
			'<li>' +
			'	<div>' +
			'		<div class="label1">' + i + '</div>' +
			'		<div class="label2">￥' + parseFloat(bx).toFixed(2) + '</div>' +
			'		<div class="label2">￥' + parseFloat(b).toFixed(2) + '</div>' +
			'		<div class="label2">￥' + Math.abs(y.toFixed(2)) + '</div>' +
			'	</div>' +
			'	<div style="clear:left;"></div>' +
			'</li>';

    }
    if (dislist == 1) 
    {
        $("#con2").show();
        $(".list_ul").html(list_ul);
    } 
    else 
    {
        $("#con2").hide();
    }

    var info = [];
   if (type == 1) 
   {
            info['month'] = borrowPrice * monthRate * Math.pow(1 + monthRate, borrowExpires) / (Math.pow(1 + monthRate, borrowExpires) - 1);
            info['monthRate'] = monthRate * 100;
            info['totalPrice'] = info['month'] * borrowExpires;
            var resultval = '<div class="w220">每月本息: <b>￥' + info['month'].toFixed(2) + '</b></div>' +
				'<div class="w620"><b>' + borrowExpires + '</b> 个月后收回所有本息　　　</div>' +
				'<div class="w220">月利率: <b>' + info['monthRate'].toFixed(2) + '%</b></div>' +
				'<div class="w620">收款总额 <b>￥' + info['totalPrice'].toFixed(2) + '</b></div>';
   }
   else if (type == 2) 
   {
            info['month'] = borrowPrice / borrowExpires + borrowPrice * monthRate;
            info['monthRate'] = monthRate * 100;
            info['totalPrice'] = info['month'] * borrowExpires;
            var resultval = '<div class="w220">每月本息: <b>￥' + info['month'].toFixed(2) + '</b></div>' +
				'<div class="w620"><b>' + borrowExpires + '</b> 个月后收回所有本息　　　</div>' +
				'<div class="w220">月利率:<b> ' + info['monthRate'].toFixed(2) + '%</b></div>' +
				'<div class="w620">收款总额 <b>￥' + info['totalPrice'].toFixed(2) + '</b></div>';
   } 
   else 
   {
            info['month'] = borrowPrice * monthRate;
            info['lastmonth'] = borrowPrice * monthRate + parseFloat(borrowPrice);
            info['monthRate'] = monthRate * 100;
            info['totalPrice'] = (borrowPrice / borrowExpires + borrowPrice * monthRate) * borrowExpires;
            var resultval = '<div class="w620">每月利息: <b>￥' + info['month'].toFixed(2) + '</b><br>(最后一个月将收取: <b>￥' + info['lastmonth'].toFixed(2) + '</b>)</div>' +
				'<div class="w620"><b>' + borrowExpires + '</b> 个月还清</div>' +
				'<div class="w620">月利率: <b> ' + info['monthRate'].toFixed(2) + '%</b></div>' +
				'<div class="w220">收款总额 <b>￥' + info['totalPrice'].toFixed(2) + '</b></div>';

    }
   if (document.getElementById("tableType").checked)
   {
		$('#shortCutList1').animate({width:"890",height:"315"});
   }
   else
   {
		$('#shortCutList1').animate({width:"530",height:"315"});
   }
   $("#con1").show();
   $("#result").html(resultval);
        
}

function round(a, b) 
{
	    var s = a.toString().indexOf(".");
	    a0 = a.toString().substr(0, s + b + 1);
	    a1 = Math.round(a.toString().substr(s + b + 1, 1) * 0.1) * Math.pow(10, -b);
	    return (a0 * 1 + a1);
}


function feedback()
{
	$('#feedbackmsg').html("您的反馈正在提交，请稍候......");
	 $.ajax({
         type: "POST",
         url: "/User/AjaxFeedBack",
         data:$("#feedbankform").serialize(),
         dataType: "json",
         success: function(data) 
         {
        	 $('#feedbackmsg').html(data.msg);
         }
	 });
}