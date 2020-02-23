//Truncate text (used for blog post max content)
export function textTruncate(str, length, ending) {
    //Set default length if null
    if(length == null){
        length = 100;
    }
    //Default ending
    if(ending == null){
        ending = '...';
    }
    //Truncate string
    if(str.length > length){
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
}

//Make dates from JSON
export function makeDate(jsonDate) {
    //Pass in date
    var date = new Date(jsonDate);

    //Find day number of the week and set day name
    const dayNo = date.getDay();
    var days = ["SUN","MON","TUE","WED","THU","FR","SAT"];
    const day = days[dayNo];

    //Find month number and set month name
    const monthNo = date.getMonth();
    var months = ["JAN","FEB","MAR","APR","MAY","JUN","JULY","AUG","SEP","OCT","NOV","DEC"];
    const month = months[monthNo];

    //Set date string
    var fullDate = `${day} ${date.getDate()} ${month} ${date.getFullYear()}`;

    return `${fullDate}`;
}

export function workDays(){
    var firstDate = new Date("03-18-2019");
    var secondDate = new Date();
    var ans =  Math.round((secondDate-firstDate)/(1000*60*60*24));
    // console.log(ans);
    return ans;
}

export function getYears(){
    var dt1 = new Date("11-23-1996");
    var dt2 = new Date();
    var diff =(dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff/365.25));
}