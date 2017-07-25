/*
Author: Cody Leytham	date: 7/19/17
purpose: 
Copyright (c) 2017 Avery Norris and Cody Leytham

                      GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.
*/

#include <iostream>
#include <cstdlib>
#include <string.h>
#include <math.h>
//#include <tgmath.h>

using namespace std;

int main(){
	
	int start, end;
	double temp, offset, grav, cal, a, b, c;
	char * in_str, * REQUEST, * deg;
	REQUEST = new char(100);	

  	cout << ("Content-Type : text/html;charset=us-ascii\n\n");

  	strncpy(REQUEST, getenv("QUERY_STRING"),59);
	
	//gets the starting position in the string for the input and stores it in start
	start = strcspn(REQUEST, "=");
	//sets in_str (input string) to be at the start position of the input
	in_str = &REQUEST[start+1];
	//finds the end of the input, im am not sure if atoi needs a new line but i did it anyhow
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	//converts string into int for the input
	temp = atof(in_str);

	//for the next word of input, progressing the input string to be just after the end of the last one.
	//bypassing the "garbage" in the string the server passed in to get to the input.
	start = strcspn(in_str, "=");
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	//putting the input string at the proper place in the input
	in_str = &in_str[start+1];
	grav = atof(in_str);

	start = strcspn(in_str, "=");
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	//putting the input string at the proper place in the input
	in_str = &in_str[start+1];
	cal = atof(in_str);
	
	start = strcspn(in_str, "=");
	in_str = &in_str[start+1];
	deg = in_str;
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	
	
	cout << "<p>The temp is: " << temp << "the unit is: " << deg[0] << " the calibration is:  " << cal << " the current gravity is: " << grav <<  "</p>";	
	

	if(deg[0] == 'c')
		temp = temp*1.8+32;

	//gravity correction calculation
	grav = grav * (1.00130346 -.000134722124 * temp + .00000204052596 * powf(temp,2) - .00000000232820948 * powf(temp,3)) / (1.0013036 - .000134722124 * cal + .00000204052596 * powf(cal, 2) - .0000000023280948 * powf(cal, 3));


	cout << "<p>The fahrenheit temp is: " << temp << "<br> The offset is: <br> " << grav << "</p>";
	
	
	
}
