/*
Author: Cody Leytham	Date: 7/17/17
Purpose: To convert change in pH to change in molarity an to calculate the needed additions of chemicals to make the adjustment. 

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


using namespace std;


int main(){
	double orig_pH, targ_pH, change_pH, HSO;
	int start, end;
	char * in_str, * REQUEST;
	orig_pH = 0;
	targ_pH = 0;
	start = 0;
	end = 0;
	in_str = new char[100];
	REQUEST = new char[100];
	

  cout << ("Content-Type : text/html;charset=us-ascii\n\n");
	
  strncpy(REQUEST, getenv("QUERY_STRING"),59);
	
	cout << "<p>\nThis program will calculate the amount of Calcium or Magnesium needed to raise the pH of brewing water." <<
	" This calculator rounds 5 gallons up to 20 liters from 18.9, this beign 5.5% off. It also assumes that" <<
	" the liquid is at 72 derees fahrenheit (room temp).";

	//gets the starting position in the string for the input and stores it in start
	start = strcspn(REQUEST, "=");
	//sets in_str (input string) to be at the start position of the input
	in_str = &REQUEST[start+1];
	//finds the end of the input, im am not sure if atoi needs a new line but i did it anyhow
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	//converts string into int for the input
	orig_pH = atof(in_str);

	//for the next word of input, progressing the input string to be just after the end of the last one.
	in_str = &in_str[end+1];
	//bypassing the "garbage" in the string the server passed in to get to the input.
	start = strcspn(in_str, "=");
	//putting the input string at the proper place in the input
	in_str = &in_str[start+1];
	targ_pH = atof(in_str);
	
	
	cout << "<p>Orig: " << orig_pH << " target: " << targ_pH << "</p>";
	orig_pH = pow(10, -orig_pH);
	targ_pH = pow(10, -targ_pH);
	change_pH = orig_pH - targ_pH;
	//swiching the sign since an reduction on pH means an increase in H+. I know i could wsitch the orig_pH - targ_pH
	//around but thisseems a little easier to folow with the math.
	change_pH = -change_pH;
	cout << "<p>Orig Molarity: " << orig_pH << " Target Molarity: " << targ_pH << " change in Molarity H+ is: " <<
	change_pH << "</p>";
	
	
	cout << "To get this change you can use:";
	//calculating the grams of sulfuric acid (H2SO4) needed to nutralize the alkalinity.
	HSO = change_pH;
	//there are 2 H+ for every mole of H2SO4, so dividing the moles of H+ by to to get
	//the moles of H2SO4 needed to get the required H+. Then multiplying that by the molar
	//mass of H2SO4 to get the mass of it needed.
	HSO = HSO/2;
	HSO = HSO*98;
	cout << "\n\t->!FOOD GRADE!<- pure SULFUIRC ACID...: " << HSO << " grams.\n";
	delete [] in_str;

	return 0; 
}
