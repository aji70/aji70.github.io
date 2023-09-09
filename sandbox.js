const d = new Date();
let day = d.getDay()
switch (day) {
    case 0:
        day= 'Sunday';
    case 1:
        day= 'Monday';
        break;
    case 2:
        day= 'Tuesday';
        break;
    case 3:
        day= 'Wednesday';
        break;
    case 4:
        day= 'Thursday';
        break;
    case 5:
    day= 'friday';
    break;
    case 6:
        day= 'Saturday';
        break;
    default:
        console.log('not a valid day')
}
document.getElementById("currentDayOfTheWeek").innerHTML = ` Today is ${day}`;


const gtime = function(){
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let date = (cDay + "/" + cMonth + "/" + cYear);
let time = `The time is ${currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds()}`;
//let date = currentDate.getDate();
document.getElementById("day").innerHTML = date;
document.getElementById("currentUTCTime").innerHTML = time;
}
setInterval(gtime, 1000);
