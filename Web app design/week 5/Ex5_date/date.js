alert("start date.js");
    var today = new Date();

    var datestring = today.toLocaleString();
    var day = today.getDay();
    var month = today.getMonth();
    var year = today.getFullYear();
    var timeMilliseconds = today.getTime();
    var hour = today.getHours();
    var minute = today.getMinutes();
    var second = today.getSeconds();
    var millisecond = today.getMilliseconds();

// display the parts
    document.write(
    "date: " + datestring + "<br />",
    "Day: " + day + "<br />",
    "Month: " + month + "<br />",
    "year: " + year + "<br />",
    "time in milliseconds: " + timeMilliseconds + "<br />",
    "hour: " + hour + "<br />",
    "minute: " + minute + "<br />",
    "second: " + second + "<br />",
    "millisecond: " + millisecond + "<br />"
    );
//time a loop
    var dum1 = 1.00149265,
    product = 1;
    var start = new Date();

    for (var count = 0; count < 10000; count++)
    product = product + (1.000002 * dum1) / 1.00001;

    var end = new Date();
    var diff = end.getTime() - start.getTime();
    document.write("<br /> The loop took" + diff + " milliseconds <br />");
