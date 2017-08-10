/*
   File Name: shared.js
   Authors: Cody Leytham & Avery Norris	Date:8/1/17
   Purpose: helper functions for the  html javscript functions.
   */


//helper functions used in all many files

function isFloat(src){
    //this will determine if the input is a floating point number
    var dec;
    dec = 0;
    for(i = 0; i < src.length; i++){
        //makind a decimal count, it will only allow 1 decimal in the input
        //looping through the string seeing if there are any non-numeric or '.' elements
        if(isNaN(parseInt(src[i], 10)) && src[i] != "."){
            //if the first character is a - then permitting it for negative numbers
            if(i == 0 && src[i] == '-')
                break;
            return 0;	
        }
        if(isNaN(parseInt(src[i], 10)) && src[i] == "."){
            /*
               counting the decimals in the number, if it is more than 1, then rejecting I am american,
               so I designed this to follow the paradigm that , are are put inbetween sets of 3 numbers
               aka the radix character.
               ex: 1,000,000. is 1 million, not 1.000.000,
               */
            //
            dec++;
            if(dec > 1){
                return 0;
            }
        }
    }
    return 1;
}

function isInt(src){
    //this will determine if the input is a whole point number
    for(i = 0; i < src.length; i++){
        //looping through the string seeing if there are any non-numeric elements
        if(isNaN(parseInt(src[i], 10))){
            //if the first character is a - then permitting it for negative numbers
            if(i == 0 && src[i] == '-')
                break;
            return 0;	
        }
    }
    return 1;
}

function checkLen(src, lim){
    //check to see if the length is at or bellow the allowed length (lim)
    if(src.length >= lim){
        return 0;
    }
    return 1;
}

function scrubInt(src, lim){
    //this will scrub integer input to make sure its an int of the right length
    //lim is used to specify the length 
    if(!checkLen(src, lim) && !isInt(src))
        //the input is not an int
        return 3;
    else if(checkLen(src, lim) && isInt(src))
        //the input is an int the right size
        return 0;
    else if(!isInt(src))
        //the input is not an int
        return 1;
    else if(!checkLen(src, lim))
        //the input is to long
        return 2;
    else
        return 4;
}

function scrubFloat(src, lim){
    //this will scrub integer input to make sure its an int of the right length
    //lim is used to specify the length 
    if(!checkLen(src, lim) && !isFloat(src))
        //the input is to large and not a float
        return 3;
    else if(checkLen(src, lim) && isFloat(src))
        //the input is a float and the right size
        return 0;
    else if(!isFloat(src))
        //the input is not a float
        return 1;
    else if(!checkLen(src, lim))
        //the input is to long
        return 2;
    else
        //i hope this will not be reached
        return 4;
}

function testEmpty(src){
    if(src.length == 0){
        alert("There is an empty field.");
        return 1;
    }
    return 0;
}

function dryConv(mass, from, to){
    //  1 pound = 16oz| 1 kg = 16pounds|  1 kg = 35.2oz| 1 pound = .4545 kg (rounded to .455)|
    var res;
    if(from == 1 && to == 2){
        //kg to pounds
        res = mass*2.2;
    }
    else if(from == 1 && to == 3){
        //kg to oz
        res = mass*35.2;
    }
    else if(from == 2 && to == 1){
        //pounds to killograms
        res = mass*.455;
    }
    else if(from == 2 && to == 3){
        //pounds to ounces
        res = mass*16;
    }
    else if(from == 3 && to == 1){
        //ounces to kg
        res = mass/35.2;
    }
    else if(from == 3 && to == 2){
        //pounds to ounces
        res = mass/16;
    }
    else
        return mass;
    return (Math.trunc(res*100))/100;
}

function wetConv(vol, from, to){
    if(from == 1 && to == 2)
        res =  vol*.264;
    else if(from == 2 && to == 1)
        res = vol/.264;
    else
        return vol;
    return (Math.trunc(res*100))/100;
}

function scrub(src, len){
    var check = scrubFloat(src, 10);
    if(check == 1)
        alert("Some input is not a number...");
    else if(check == 2)
        alert("Some input is to large");
    else if(check == 3)
        alert("Some input is too long and not a number");
    return check;
}


//These are the main functions used in the web pages. Chrome does not allow inline javascript

var unitConvButton = document.getElementById("unitconv")
if(unitConvButton) {
    unitConvButton.addEventListener("click", unit_conv);
}

function unit_conv(){
    //getting the data from the html
    var value = document.getElementById("g1").value; 
    var gf1 = document.getElementById("gf1").value; 
    var gt1 = document.getElementById("gt1").value;
    var fname = document.getElementById('gf1').options[document.getElementById('gf1').selectedIndex].text;
    var tname = document.getElementById('gt1').options[document.getElementById('gt1').selectedIndex].text;
    var res = 1;
    //this will check to make sure that the input is a float at most 10 long (decimal included).
    var check = scrub(value, 10);
    //if the check does not return an error, then checking if it is positive.
    if(check == 0){
        if(value > 0){
            //if the there is no error and it is a positive numer, doing the calculations and returning the results.
            res = dryConv(value, gf1, gt1);
            document.getElementById("grain1").innerHTML = value + " " + fname + " is " + res + " " + tname;
        }
        else if(value < 0)
            alert("Please only use positive number. NO SPATIAL SINGULARITIES!!!.");
    }

    //getting the data from the html
    var value = document.getElementById("l1").value; 
    var fname = document.getElementById('lf1').options[document.getElementById('lf1').selectedIndex].text;
    var tname = document.getElementById('lt1').options[document.getElementById('lt1').selectedIndex].text;
    var lf1 = document.getElementById("lf1").value; 
    var lt1 = document.getElementById("lt1").value;
    var res = 1;
    //this will check to make sure that the input is a float at most 10 long (decimal included).
    var check = scrub(value, 10);
    //if the check does not return an error, then checking if it is positive.
    if(check == 0){
        if(value > 0){
            //if the there is no error and it is a positive numer, doing the calculations and returning the results.
            res = wetConv(value, lf1, lt1);
            document.getElementById("liquid1").innerHTML = value + " " + fname + " is " + res + " " + tname;
        }
        else if(value < 0)
            alert("Please only use positive number. NO SPATIAL SINGULARITIES!!!.");
    }
}

//Functions for the IBU calculator

var ibuButton = document.getElementById("IBU")
if(ibuButton) {
    ibuButton.addEventListener("click", ibu_calculate);
}

function ibu_calculate() {
    //Get data from webpage
    var oz_hops = document.getElementById("oz").value;
    var alpha_acid = document.getElementById("aa").value;
    var volume = document.getElementById("vol").value;
    var time = document.getElementById("time").value;
    var gravity = document.getElementById("gravity").value;

    //check for valid input
    if(oz_hops == 0 || alpha_acid == 0 || volume == 0 || time == 0) {
        alert("Invalid values!");
        return false;
    }

    //if no gravity entered, give a generic, middle-of-the-road gravity
    if(!gravity) {
        gravity = 0.080;
    }
    else {
        gravity = gravity - 1;
    }

    alpha_acid = alpha_acid * 0.01;

    //variables for calculations
    var IBUs = 0;
    var acid_utilization = 0;
    var added_acids = 0;
    var bigness = 0;
    var boil_factor = 0;

    //Run IBU calculations
    added_acids = (alpha_acid * oz_hops * 7490) / volume;
    bigness = 1.65 * Math.pow(0.000125, gravity);
    boil_factor = (1 - Math.exp(-0.04 * time)) / 4.15;
    acid_utilization = bigness * boil_factor;
    IBUs = added_acids * acid_utilization;


    //Output result to page
    //if all fields are filled
    document.getElementById("ibu_output").innerHTML = (Math.round(IBUs * 10) / 10) + " IBUs";

    return true;
}

var hydroButton = document.getElementById("hydro")
if(hydroButton) {
    hydroButton.addEventListener("click", hydro_corr);
}


function hydro_corr(){
/*-
	The equation for the correction was taken from a post in brewery.org/librry/HydromCorr0992.html by Christopher Lyons who cited
	the "Handbooks of chemistry and Physics (CRC)". I could not find the equation (i found a 2400 page pdf) in the book but this
	posted equation's outputs are close to charts i have found (possible rounding errors in the 10,000ths place, so very small
	difference and the equation agrees with other ones I have found on the internet.
*/
	//getting the data from the html
  var temp = document.getElementById("temp").value; 
  var cal = document.getElementById("cal").value;
  var grav = document.getElementById("grav").value;
  testEmpty(temp);
  testEmpty(cal);
  testEmpty(grav);
  
  var c = document.getElementById("c").checked; 
  var f = document.getElementById("f").checked; 
    //validating information, 0 will mean failure since positive numbers are desired output.
  if(c == true && f == true){
    //alerting the user that they have chosen both celsius an fahrenheit as their units.
    if(temp == -40)
      alert("OK this temperature is the same in fahrenheit and celsius, but we both know this beer would be a solid at that point....liquids only...");
    else
      alert("I cant...it's impossible to use two different units for the temperature...");
    return 0;
  }
  else if(!isInt(temp)){
    alert("Temp is invalid, please enter a whole numbmer.");
    return 0;
  }
  else if(!isInt(cal)){
    alert("Calibration is not a number.");
    return 0;
  }
  else if(!isFloat(grav)){
    alert("Gravity is not a numer.");
    return 0;
  }
  else if(temp < 40 || temp > 120){
    alert("Please choose a temperature between 40F and 120F degrees");
    return 0;
  }
  else if(cal < 50 || cal > 75){
    alert("Hydrometers are usually calibrated in the 50F-70F range, I cannot use ths calibration.");
    return 0;
  }
  else if(!checkLen(grav,15)){
    alert("The gravity is not a valid number");
    return 0;
  }
  else if(c != true && f != true){
    //alerting the user that they have used neither celsius or farhenheit as their units
    alert("...so, not celsius, not fahrenheit...Im not doing kelvin for you...");
    return 0;
  }
  else{
    if(c == true)
      temp = (temp *(9/5)+32);
    
    grav = grav * (1.00130346 -.000134722124 * temp + .00000204052596 * Math.pow(temp,2) - .00000000232820948 * Math.pow(temp,3)) / (1.0013036 - .000134722124 * cal + .00000204052596 * Math.pow(cal, 2) - .0000000023280948 * Math.pow(cal, 3));
    grav = grav*10000;
    grav = Math.round(grav);
    grav = grav/10000;
    document.getElementById("hydro_ans").innerHTML ="The corrected (rounded to the 1/10000th place) is  " +  grav;
    return grav;
  }
  //incase i missed some cases
  return 0;
}


var primeButton = document.getElementById("prime")
if(primeButton) {
    primeButton.addEventListener("click", carbCalc);
}


function carbCalc(){
  //getting the data from the html
  var carbTarg = document.getElementById("carbTarg").value; 
  var vol = document.getElementById("vol").value; 
  var temp = document.getElementById("temp").value; 
  var c = document.getElementById("c").checked; 
  var f = document.getElementById("f").checked;
  
  if(!isFloat(carbTarg)){
    alert("The target carbonation does not appear to be a number.");
    return 0; 
  }
  if(!isInt(vol) || !isInt(temp)){
    alert("Please whole numer values for volume and temperature please.");
    return 0;
  }  
  if(carbTarg == 0){
    alert("Your target is flat beer...you need no sugar additions.");
    return 0;
  }
  if(carbTarg < 0){
    alert("You cannot have negative carbonation in the beer, PHYSICS PEOPLE!!! PHYSICS!!!!.");
    return 0;
  }

  if(vol <= 0){
    alert("You need to have some volume of beer.");
    return 0;
  }
  
  if(temp < 40 || temp > 120){
    alert("Please test your beer between the temperatures of 40F and 120F.");
    return 0;
  }

  if(c != true && f != true){
    //alerting the user that they have used neither celsius or farhenheit as their units
    alert("...so, not celsius, not fahrenheit...Im not doing kelvin for you...");
    return 0;
  }
  else if(c == true && f == true){
    if(temp == -40){
      alert("Yeah, yeah, fahrenheit and celsius are the same right not but do you realy want to work with a solid?");
      return 0;
    }
    else{
      alert("both temps...No...celcius and fahrenheit are only the same at -40....are you in that cold of climate?");
      return 0;
    }
  }
  else
    if(c == true)
      temp = (temp *(9/5)+32);

  sugar = 15.195*vol*(carbTarg - 3.0378 + .050062 * temp - .00026555 * Math.pow(temp, 2));
  sugar = Math.round(sugar); 
  if(sugar <= 0){
    alert("It seems that your target amount of CO2 is less that or equal to the initial for this temperature, please refer to an CO2 solubility chart.");
    return 0;
  }
  document.getElementById("prime_ans").innerHTML ="You will need to add " +  sugar + " grams of corn sugar (dextrose) to get this.**";
  return sugar;
}


var phButton = document.getElementById("pH")
if(phButton) {
    phButton.addEventListener("click", pH_diff);
}



function pH_diff(){
  var o_ph = document.getElementById("o_ph").value; 
  var t_ph = document.getElementById("t_ph").value;
  var m_mass = document.getElementById("m_mass").value;
  var h_count = document.getElementById("h_count").value;

  
  if(!isFloat(o_ph)){
    alert("The original pH is not a valid number format.");
    return;
  }
  if(!isFloat(t_ph)){
    alert("The target pH is not a valid number format.");
    return;
  }
  if(!isFloat(m_mass)){
    alert("The Molar Mass pH is not a valid number format.");
    return;
  }

  if(!isInt(h_count)){
    alert("The hydrogen number is invalid, whole numbers please.");
    return;
  }

  if(t_ph > o_ph){
    alert("This calculator is designed for lowering pH not raising it.");
    return;
  } 

  if(o_ph < 0){
	alert("Only positive pH please. The original pH is face melting low, contact your water company.");
	return;
  }
  
  if(t_ph < 0){
	alert("Only positive pH please, the target pH is definatly not safe for human consumption.");
	return;
  }

  if(o_ph > 14){
	alert("That is a very basic original pH. The original pH is face melting high, contact your water company.");
	return;
  }
  if(t_ph > 14){
	alert("The target pH is to high. it is not safe for human consumption");
	return;
  }

  if(testEmpty(o_ph))
    return;
  if(testEmpty(t_ph))
    return;
  if(testEmpty(m_mass))
    return;
  if(testEmpty(h_count))
    return;
  if(m_mass <= 0){
	alert("If an item has molar mass less than or equal to 0 that implies it weights nothing, im not doing quantum physics here.");
	return;
  }  	 
  if(h_count == 0){
	alert("If this thing has to hydrogen then its not an acid.");
	return;
  }

/*
	CALCULATION EXPLENATION. 
	FIRST: DETERMINING HOW MANY MOLES OF BASE I WILL NEED TO NEUTRALIZE. MOLES H+ = 10^(-pH). SO
	TARGET pH - ORIGINAL pH = NUMBER OF H+ TO GET TO HE DESIRED pH.
	
	SECOND: DETERMINING HOW MANY MOLES OF THE ADDITIVE IS NEEDED TO NEUTRALIZE THE pH. SINCE ONE 
	MOLE OF THE ADDITIVE CAN HAVE MORE THAN ONE H+ THUS ONE MORE OF ADDITIVE NEUTRALIZING MORE 
	THAN ONE MOLE OF BASE, DIVIDE THE NEEDED MOLES OF H+ BY HOW MANY H+ THE ADDITIVE HAS. WITH THIS
	A 1 TO 1 RATIO OF MOLES ADDITIVE TO H+ NEEDED IS DETERMINED. MULTIPLYING THE 1 TO 1 RATIO BY
	THE MOLAR MASS OF THE ADDITIVE GETS US THE MASS OF THE ADDITIVE NEEDED.
	
	THIRD: THE MOLARITY OF SOLUTIONS TO ADD IS SMIMPLE CONVERSIONS OF MOLES/LITERS = MOLARITY.
	EQUIVELENTLY SUBSTITUTING CHANGE IN PLACE OF MOLES YOU GET CHANGE CHANGE/MOLARITY = LITERS
*/	
	var change = (Math.pow(10, -t_ph)) - (Math.pow(10, -o_ph));
	var mass = (change/h_count)* m_mass;
//	THIS WILL CALCULATE HOW MANY ML OF .01M CONCENTRATION YOU WILL NEED TO GET TO THE pH !!PER LITER!!
//	.01 is the molarity so that is (change/molarity but since this is usually measured in ml, dividing by .001
	var dilute_vol = (change/.00001);
	
	document.getElementById("pH_ans").innerHTML ="You need " +  mass + " pure grams of your additive per liter of wort/water or " + dilute_vol + " ml of .01M (molarity)" +
	" solution of your chosen additive. If the molarity is different on your additive just miltiply this volume by 10 for every decimal to the right or divide by 10 " +
	"for every dicimal place to the left your sample is from .01. This is also PER LITER!" + 
	". <br><br> This calculation assumes it is a strong acid, Otherwise it may stop at a certian pH " +
	 "(substance specific, for more information look up the pKa of your additive for pH restrictions).<br> ";
}


var ABVButton = document.getElementById("ABV")
if(ABVButton) {
    ABVButton.addEventListener("click", abv_calc);
}


function abv_calc(){
	//collecting data from the html
	var og = document.getElementById("og").value; 
	var fg = document.getElementById("fg").value;
	if(!isFloat(og)){
		alert("The original gravity is an invalid number. Use . not , to divide the partial numbers.");
		return 0;
	}
	if(!isFloat(fg)){
		alert("The final gravity is an invalid number. Use . not , to divide the partial numbers.");
		return 0;
	}
	if(!checkLen(og, 6)){
		alert("The original gravity is too long of a number");
		return 0;
	}
	if(!checkLen(fg, 6)){
		alert("The final gravity is too long of a number");
		return 0;
	}
	if(og > 2){
		alert("Original gravity is to large of a number, below 2.0 please.");
		return 0;
	}
	if(fg > 2){
		alert("Final gravity is to large of a number, below 2.0 please.");
		return 0;
	}

	var abv = (og - fg)*125*1.05;
	abv = Math.round(abv*10)/10;	
	//I could not find any official documantation of this formula but it seems to be widely used.  
	document.getElementById("ABV_ans").innerHTML = "You can expect a ABV of " + abv + "%.";
}
