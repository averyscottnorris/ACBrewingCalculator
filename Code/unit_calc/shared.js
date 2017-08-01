/*
File Name: shared.js
Author: Cody Leytham		Date:8/1/17
Purpose: helper functions for the in html javscript functions.
*/
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

