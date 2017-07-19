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

double dilute_sol(double molarity, double unit, double sample);

int main(){
	double orig_pH, targ_pH, change_pH, HSO, sol_val, pure_acid, dil_acid;
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
	pure_acid = change_pH;
	//there are 2 H+ for every mole of H2SO4, so dividing the moles of H+ by to to get
	//the moles of H2SO4 needed to get the required H+. Then multiplying that by the molar
	//mass of H2SO4 to get the mass of it needed.
	HSO = pure_acid/2;
	HSO = HSO*98;
	cout << "<p>\t->!FOOD GRADE!<- pure SULFUIRC ACID...: " << HSO << " grams.<br> </p>" <<
	"<p>\t\t Some diluter calculations </p>" << "<p>\t\t\t.001M " << dilute_sol (.001, .001, pure_acid) << " ML</p>";
	
	
	delete [] in_str;
	

	return 0; 
}


double dilute_sol(double molarity, double unit, double sample){
	//this function takes in a molarity of solution and a unit (divion of a liter)
	//and then tells how many units of the diluted solution is needed
	//ex a molarity of .1 is .1 moles a liter, a unit of .001 would be a mili liter
	//sample is the sample (in molarity) that we are trying to neutralize
	
	//Ex dilute_sol(.01, .001, .0000034) means you are trying to neutralize 
	//3.4x10^-6 moles of base using a solution that is .01 molarity and you want
	//the answer in mili liters
	double offset;
	//offset will be how the desimal on the smaple is sifter
	//since increasing the molarity means there is more moles per liter, that will sift the
	//decimal to the right, reducing the molarity will shift it to the left
	//similar logic for the liters, larger units means more moles per unit, smaller=fewer
	offset = 1/unit;
	offset = offset * (1/molarity);
	sample = sample * offset;
	return sample;
}
