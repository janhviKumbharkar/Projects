
function updateClock() {
	var weekday=new Array(7);
	weekday[0]="Sunday";
	weekday[1]="Monday";
	weekday[2]="Tuesday";
	weekday[3]="Wednesday";
	weekday[4]="Thursday";
	weekday[5]="Friday";
	weekday[6]="Saturday";

	const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];


  var now = new Date();
  var dname = now.getDay(),
	mo = now.getMonth(),
	dnum = now.getDate(),
	yr = now.getFullYear(),
	hou = now.getHours(),
	min = now.getMinutes(),
	sec = now.getSeconds(),
	pe = "AM";

document.getElementById("year").innerHTML= now.getFullYear();
document.getElementById("dayname").innerHTML= weekday[now.getDay()];
document.getElementById("month").innerHTML= month[now.getMonth()];
document.getElementById("time0").innerHTML=now.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true })


}
var time = new Date();
time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second: 'numeric', hour12: true })
console.log(
time.getHours()
);







window.setInterval(updateClock, 1);