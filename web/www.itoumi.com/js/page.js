
// JavaScript Document
(function(){
	var ERRORCLASS = 'errorinput';
	var needData;
	var maxRealizationDom = $('#maxRealization');
	var amountDom = $('#result-amount');
	var revenueDom = $('#result-revenue');
	var realizationRevenueDom = $('#result-realizationRevenue');
	var annualrateDom = $('#result-annualrate');
	var diffAnnualrateDom = $('#result-diffAnnualrate');
	var calcAmountDom = $('#calcAmount');
	var calcRateDom = $('#calcRate');
	var triggerBox = $("#counterCons");


function isEmpty(value) {

	return $.trim(value) == '' || typeof(value) == "undefined";

}



function initShowCounter(event, id, x1, y1) {

	var e = event || window.event;

	var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;

	var scrollY = document.documentElement.scrollTop || document.body.scrollTop;

	var x = e.pageX || e.clientX + scrollX;

	var y = e.pageY || e.clientY + scrollY;

	var half = document.body.clientWidth/2
	if( x < half ){
		$("#" + id).css("left", x + x1);
		if( $('#arrows').hasClass('right-tip')){
			$('#arrows').removeClass('right-tip')
		}
	}else{
		$("#" + id).css("left", x - 600 - x1);
		$('#arrows').addClass('right-tip')
	}
	$("#" + id).css("top", y - y1);
}



	$('.cal-close').click(function(){
		$('#counterCons').hide();
	});

	$("#calcAmount").focus(function() {

		$(this)

			.removeClass( ERRORCLASS )

			.next().hide();

	})



	$('.list').on('click','.btnShowCounter',function(e){

		var curId = $(this).parents('.need').attr('data-id');

		needData = window.dataBridge[curId];

		showCal(e);

	});



	function showCal(e){

		$('.txt-con').removeClass(ERRORCLASS)

		$('.errortip').hide();

		triggerBox.hide();

		$('#maxRealization').html("0.00");

		$('#result-amount').html("0.00");

		$('#result-revenue').html("0.00");

		$('#result-realizationRevenue').html("0.00");

		$('#result-annualrate').html("0.00");

		$('#result-diffAnnualrate').html("0.00");

		$('#bxNextWorkDay').html("0.00")



		$('#annualRate1').html( needData['product.annualRate'] );

		$('#calculator-startTime').val( needData.calcToday );

		$('#calculator-endTime').val( needData.bxStartDate );

		$('#bxNextWorkDay').html(needData.bxNextWorkDay);

		$(calcAmountDom).val( needData['product.minAmount']);

		$('#calcRate').val( needData.calcRate );

		$('#betweenDays').html( needData.betweenDays );



		if (triggerBox.css("display") == "none") {

			initShowCounter(e, "counterCons", 20, 420);

		}

		triggerBox.show();

		handleCalculator(needData.calcCallDate,needData['product.annualRate']);

	}



	$('#calcBtn').on('click',function(){

		handleCalculator(needData.calcCallDate,needData['product.annualRate']);

	});



	$("#btnSub").click(function() {

		var val_lv = parseFloat(parseFloat($("#calcRate").val().split("%")[0]) - 0.01).toFixed(2);

		if (val_lv <= 0) {

			val_lv = 0

		}

		if (val_lv >= 100) {

			val_lv = 100

		}

		$("#calcRate").val(val_lv);

	})

	$("#btnAdd").click(function() {



		var val_lv = parseFloat(parseFloat($("#calcRate").val().split("%")[0]) + 0.01).toFixed(2);

		if (val_lv <= 0) {

			val_lv = 0

		}

		if (val_lv >= 100) {

			val_lv = 100

		}

		$("#calcRate").val(val_lv);

	})



	$("#calculator-startTime").off().on("focus", function() {

		var buyStartDate = needData.calcToday;

		var buyEndDate = needData.calcEndDate;

		WdatePicker({

			minDate: buyStartDate,

			maxDate: buyEndDate,

			onpicked: function() {

				ajaxPostJsonSync(basePath() + "/selectRealizationDate.jspx", function(data, status) {

					$("#calculator-endTime").val(data.bxStartDate);

					$('#betweenDays').html(data.days);

					$('#bxNextWorkDay').html(data.bxNextWorkDay);

				}, {

					pgId: needData.quotaId,

					spId: needData.spId,

					buyDate: $(this).val()

				});

			}

		});

	});



	$("#calculator-endTime").off().on("focus", function() {

		var startTime = $("#calculator-startTime").val();

		if (isEmpty(startTime)) {

			$("#calculator-startTime")

				.addClass( ERRORCLASS )

				.next().show()

				.html("请选择购买日期");

			return false;

		} else {

			$("#calculator-startTime")

				.removeClass( ERRORCLASS )

				.next().hide();

		}

		var sDate, eDate



		ajaxPostJsonSync(basePath() + "/selectRealizationDate.jspx", function(data, status) {

			sDate = data.bxStartDate;

			eDate = data.bxEndDate;

			WdatePicker({

				minDate: sDate,

				maxDate: eDate,

				onpicked: function() {

					ajaxPostJsonSync(basePath() + "/getBetweenDays.jspx", function(data, status) {

						$('#betweenDays').html(data.days);

						$('#bxNextWorkDay').html(data.bxNextWorkDay);

					}, {

						startTime: startTime,

						endTime: $("#calculator-endTime").val()

					});

				}

			});

		}, {

			pgId: needData.quotaId,

			spId: needData.spId,

			buyDate: startTime

		});



	});







function handleCalculator(callDate, basicRate) {

	var startTime = $("#calculator-startTime").val();

	var endtime = $("#calculator-endTime").val();

	var amount = $("#calcAmount").val();

	var rate = $("#calcRate").val();

	//TODO VALIDATE INPUT

	if (isEmpty(startTime)) {

		$("#calculator-startTime")

			.addClass( ERRORCLASS )

			.next().show()

			.html("请选择购买日期");

		return false;

	} else {

		$("#calculator-startTime")

			.removeClass( ERRORCLASS )

			.next().hide();

	}

	if (isEmpty(endtime)) {

		$("#calculator-endTime")

			.addClass( ERRORCLASS )

			.next().show()

			.html("请选择变现日期");

		return false;

	} else {

		$("#calculator-endTime")

			.removeClass( ERRORCLASS )

			.next().hide();

	}



	if(isEmpty(amount)){

		$("#calcAmount")

			.addClass( ERRORCLASS )

			.next().show()

			.html("请输入购买金额");

		return false;

	}else{

		$("#calcAmount")

			.removeClass( ERRORCLASS )

			.next().hide();

	}

	var re = /^\d+(\.\d+)?$/;   /*判断字符串是否为数字*/

	if (!re.test(amount)){

		$("#calcAmount")

			.addClass( ERRORCLASS )

			.next().show()

			.html("请输入数字");

		return false;

	 }else{

		$("#calcAmount")

			.removeClass( ERRORCLASS )

			.next().hide();

	 }

	

	if(isEmpty(rate)){

		$("#calcRate")

			.addClass( ERRORCLASS )

			.next().show()

			.html("请输入变现利率");

		return false;

	}else{

		$("#calcRate").removeClass( ERRORCLASS );

		$("#calcRate").next().hide();

	}

	if (!re.test(rate)){

		$("#calcRate")

			.addClass( ERRORCLASS )

			.next().show()

			.html("请输入数字");

		return false;

	 }else{

		$("#calcRate")

			.removeClass( ERRORCLASS )

			.next().hide();

	 }

	if ($("#calcRate").val()>100){

		$("#calcRate")

			.addClass( ERRORCLASS )

			.next().show()

			.html("变现利率不能超过100");

		return false;

	 }else{

		$("#calcRate")

			.removeClass( ERRORCLASS )

			.next().hide();

	 }



	ajaxPostJson(basePath() + "/calc.jspx", function(data, status) {

		if (data.SUCCESS) {

			$('#maxRealization').html(data.maxRealizationValue);

			$('#result-amount').html(amount);

			$('#result-revenue').html(data.diffRevenue);

			$('#result-realizationRevenue').html(data.realizationRevenue);

			$('#result-annualrate').html(data.annualrate);

			$('#result-diffAnnualrate').html(data.diffAnnualrate);

		} else {

			$("#calcAmount")

				.addClass( ERRORCLASS )

				.next().show()

				.html(data.MESSAGE);

		}

	}, {

		buyDate: startTime,

		bxDate: endtime,

		amount: amount,

		rate: rate,

		basicRate: basicRate,

		callDate: callDate,

		pid: needData.quotaId

	});
}

})();

