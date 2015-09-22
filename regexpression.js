/*1.Write a JavaScript program to validate cell phone number.*/
function check(phone){
    var patt = /^(98)[0-9]{8}$/; //The number at the start must be 98 and other number may be from 0 to 9.
    if (phone.match(patt) && phone.length == 10) 
		{ //check the pattern and length
            document.write("The number " + phone + " is the valid phone number")
        }
    else
	{
        document.write("The number you entered is invalid phone number")
    }
}

/*2. Write a JavaScript function to check whether a given value represents a domain or not.*/
function check_Domain(str)
{
    pattern = /^(w{3}[\.])?([a-z0-9\-])+\.((com)|(org)|(net))$/i;   //The domain should starts with www and ends with com, net or org

    if (pattern.test(str)) 
    {
        document.write("The domain " + str + "is the correct domain");
    }
    else
    {
        document.write("The domain " + str + "is not a correct domain, Please try again");
    }
}

/*3. Write a JavaScript function to check a given value contains alpha, dash and underscore.*/
function is_alphaDash(str)
{
    regexp = /[a-zA-Z_\-]/;

    if (regexp.test(str))
    {
        alert("Great, The pattern is correct.");
    }
    else
    {
        alert("Sorry, The pattern is incorrect");
    }
}

/*4. Write a JavaScript	program	to check if a given string is a	date.*/
function valid_Date(str)
{
   var pattern = /^(1[0-2]|0[1-9])\/(3[01]|[12][0-9]|0[1-9])\/[0-9]{4}$/; //input pattern must be mm/dd/yyyy
     var t = str.match(pattern);

    if(t)
	{
        document.write("Nice, the date string is correct");
    }
    else
	{
        document.write("Sorry, the date string is incorrect");
    }
}

/*5. Function to check whether a given value is time string or not.*/
function check_time()
{
    var time = prompt("Please enter the time:");
    var regexp = /^(2[0-3]|[01]?[0-9]):([0-5]?[0-9]):([0-5]?[0-9])$/;   //time pattern regular expression

    if (regexp.test(time))
    {
        alert("Congrats, the time format is right.")
    }
    else
    {
        alert("Sorry, the time format is wrong.")
    }
}

/*6. Write a JavaScript	function to check whether a given value	is hexcolor value or not.*/
function check_hex(inp)
{
    var hexPatt  = /^#[0-9A-F]{6}$/i; 
    if(hexPatt.test(inp))
	{
        document.write("The Hex color is correct");
    }
    else
	{
        document.write("Sorry, The Hexcolor is incorrect.");
    }
}

