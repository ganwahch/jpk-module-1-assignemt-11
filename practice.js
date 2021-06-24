//==========[chapter 26-30 JS]==========> 

//==========[Q no-:] ===========>  
// Write a program that takes a positive integer from user &
// display the following in your browser.

var a = Math.floor(3.42214);
document.write(a,"<br>");

var b = Math.ceil(4);
document.write(b ,'<br>');

var c = Math.round(3);
document.write(c ,"<br>");

//============[Q no-2:]=============>
// Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

function pos_to_neg(num)
{
return -Math.floor(num);
}

document.write(pos_to_neg(15));

var number = Math.ceil(-3.333);
document.write(number);

var secondNum =Math.round(-3.42214)
document.write(secondNum);

//============[Q no-3:]=============>
// Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

var value = Math.abs(-4);
document.write("First Test Value : " + value );
var value = Math.abs(null);
document.write("<br />Second Test Value : " + value );
var value = Math.abs(5);
document.write("<br />Third Test Value : " + value );

//============[Q no-4:]=============>
// Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.

var diceRoll = Math.floor( Math.random() * 6 ) +1;
document.write(diceRoll);

//============[Q no-5:]=============>
// Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
var head = 1;
var tail = 2;

var toss = Math.random() * 2;
var floor = Math.floor(toss)
if(floor === 0){
    document.write("0 <br> Random Coin Value: Head")
} else if(floor === 1)
{
    document.write("1 <br> Random Coin Value: Tails")
}
//============[Q no-6:]=============>
// Write a program that shows a random number between 1
// and 100 in your browser.

var num = Math.random() * 100;
document.write("random number between 1 and 100 :" + " " + Math.round(num));

//============[Q no-7:]=============>
//  Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

 var weight = prompt("Enter your weight")
        var value = "";

        document.write("The weight of user is" + " ");

        for (i = 0; i <= weight.length - 1; i++) {
            if (weight.charCodeAt(i) >= 48 && weight.charCodeAt(i) <= 57 || weight.charCodeAt(i) == 46) {
                value = weight[i];
                document.write(value);
            }

        }
        document.write(" " + "kilograms");


        document.write("<br>" + "<br>");

//============[Q no-8:]=============>
// Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user

var num = +prompt("Enter any number from 1 to 10")
        if (secretNum == num) {
            alert("congratulate you win")
        }
        else {
            alert("try again")
        }

//==========[chapter 31-34 JS]==========> 

//==========[Q no-:1] ===========> 
// Write a program that displays current date and time in
// your browser.

var now = new Date();
alert(now);
//==========[Q no-:2] ===========> 
// Write a program that alerts the current month in words.
// For example December.
var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var c = new Date();
document.write("Month is: " +arr[c.getMonth()]);

//==========[Q no-:3] ===========> 
// Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun
var arr=['Sun','Mon','Tue','Wed','Thurs','Fri','Sat'];
var c = new Date();
document.write("Day is: " +arr[c.getDay()]);

//==========[Q no-:4] ===========> 
// Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
var arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
var c = new Date();
var s = arr[c.getDay()];
document.write("Day is: " + s);
if (s == 'Sun' || s == 'Sat') {
    document.write("<br>It's fun day.");
}
else { document.write("<br>Normal days"); }

//==========[Q no-:5] ===========> 
// Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
var c = new Date();
var s =c.getDay();
if(s<15)
document.write("First fifteen days of the month");
else
document.write("Last fifteen days of the month")

//==========[Q no-:6] ===========>
// Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object
var c= new Date();
document.write("Current date: "+c);
document.write("<br>Elapsed milliseconds since Jun 1, 1970: "+c.getTime());
document.write("<br>Elapsed minutes since Jun 1, 1970: "+ (c.getTime()/(1000*60*60)));

//==========[Q no-:7] ===========>
// Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
var c = new Date();
var hrs = c.getHours();
if (hrs < 12)
    document.write("It's AM");
else
    document.write("It's PM")

//==========[Q no-:8] ===========>
// Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate
var laterDate = new Date("June 23,2021");
document.write(laterDate);


//==========[Q no-:9] ===========>
// Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
var d = new Date();
var d2 = new Date("June 18, 2015");
var diff = d.getTime() - d2.getTime();
var days = Math.floor(diff / (1000 * 24 * 60 * 60));
document.write(days + " days have passed since 1st Ramadan,2015");

//==========[Q no-:10] ===========>
// Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
var d = new Date("January 01,2015");
var d2 = new Date("December 05, 2015");
var diff = d2.getTime() - d.getTime();
var days = Math.floor(diff / ( 1000 ));
document.write("On reference date: "+d2 +" ");
document.write(days + " seconds have passed since beginning of 2015")

// ==========[Q no-:11] ===========>
// Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser
var d = new Date();
document.write("Current date: " + d);
var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();
document.write("<br>Hours are: " + h + ":" + m + ":" + s);
var laterh= h-1;
d.setHours( laterh);
document.write("<br>1 hour ago ,it was "+d);

// ==========[Q no-:12] ===========>
// Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?
var d = new Date();
document.write("Current date: " + d);
d.setFullYear(1920);
alert("100 years back, it was "+d);

// ==========[Q no-:13] ===========>
// Write a program to ask the user about his age. Calculate
// and show his birth year in your browser
var age=prompt("Enter your age:");
document.write("Your age is <b>: "+age+"</b>");
var today=new Date();
var t=today.getUTCFullYear()
var dob = t-age;
document.write("<br>Date of birth is: <b>"+dob +"</b>");

// ==========[Q no-:14] ===========>
// Write a program to generate your K-Electric bill in your
// browser. All the amounts should be rounded off to 2
// decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
document.write("<h1>K-Electric Bill</h1>");
var cus = prompt("Enter your name");
document.write("<br>Customer Name: <b>" + cus + "</b>");
var arr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var d = new Date();
document.write("<br>Month : <b>" + arr[d.getMonth()] + "</b>");
var nou = 410, cpu = 16, l = 350;
document.write("<br>Number of units: <b>" + nou + "</b>")
document.write("<br>Charges per units: <b>" + cpu + "</b><br>")
var net = nou * cpu;
document.write("<br>Net Amount Payable (within Due Date): <b>" + net + "</b>");
document.write("<br>Late Payment surcharge: <b>" + l + "</b>");
document.write("<br>Gross Amount Payable (after Due Date): <b>" + (+net + +l) + "</b>");


//===================[END]===================















