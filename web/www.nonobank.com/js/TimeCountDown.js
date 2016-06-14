

$.fn.TimeLock=function(t,callback,format,startTime){
var timerID = null;
var timerRunning = false;
var ctrl = $(this);
var format=format||null;
var Today="";
if(startTime){
	var TodayDateTime=startTime.split(" ");
	var TodayDates = TodayDateTime[0].split("-");
	var TodayTimes = TodayDateTime[1].split(":");
	Today=new Date(TodayDates[0],TodayDates[1]-1,TodayDates[2],TodayTimes[0],TodayTimes[1],TodayTimes[2]);
}
else{
	Today=new Date();
}
function showtime(endDate) {
var endDateTime = endDate.split(" ");
var endDates = endDateTime[0].split("-");
var endTimes = endDateTime[1].split(":");

var endDateTemp = new Date(endDates[0],endDates[1]-1,endDates[2],endTimes[0],endTimes[1],endTimes[2]);
var times = Math.floor((endDateTemp.getTime() - Today.getTime())/1000);
Today.setSeconds(Today.getSeconds()+1);
if(times<=-1){callback&&callback(); return;}
Dateleft=Math.floor(times/(24*60*60));//天
Hourleft=Math.floor((times-Dateleft*24*60*60)/(60*60));//小时
Minuteleft=Math.floor((times-Dateleft*24*60*60-Hourleft*60*60)/60);//分
if(Minuteleft<=9){
	Minuteleft="0"+Minuteleft;
}
Secondleft=times-Dateleft*24*60*60-Hourleft*60*60-Minuteleft*60;//秒
if(Secondleft<=9){
	Secondleft="0"+Secondleft;
}
if(format=="financefestivaltype"){
	Temp = '<span id="day">'+Dateleft+' </span><span id="hour">' + Hourleft + '</span><span id="minutes">' + Minuteleft + '</span><span id="seconds">' + Secondleft+'</span>';
}
else{
Temp = Dateleft + '天' + Hourleft + '小时' + Minuteleft + '分' + Secondleft + '秒';
}
ctrl.html(Temp);
/* if (typeof (ctrl.val()) == "string"){
    ctrl.val(Temp);
    }
else if (typeof (ctrl.html()) == "string"){
    ctrl.html(Temp);
} */
timerID = setTimeout(function(){
	showtime(endDate)
}, 1000);
timerRunning = true;
}

function stopclock() {
if (timerRunning)
    clearTimeout(timerID);
timerRunning = false;
}
function startclock(endDate) {
	stopclock();
	showtime(endDate);
	}
if(ctrl != null) startclock(t);
}

