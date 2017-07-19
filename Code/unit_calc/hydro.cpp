#include <iostream>
#include <cstdlib>
#include <string.h>
#include <math.h>


using namespace std;

int main(){
	
	int start, end;
	double temp;
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
/*
	//for the next word of input, progressing the input string to be just after the end of the last one.
	in_str = &in_str[end+1];
	//bypassing the "garbage" in the string the server passed in to get to the input.
	start = strcspn(in_str, "=");
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	//putting the input string at the proper place in the input
	in_str = &in_str[start+1];
	grav = atof(in_str);
*/	
	start = strcspn(in_str, "=");
	in_str = &in_str[start+1];
	deg = in_str;
	end = strcspn(in_str, "&");
	in_str[end] = '\n';
	in_str = &in_str[start+1];
	
	
	cout << "<p>The temp is: " << temp << "the unit is: " << deg <<  "</p>";	
	
	if(deg[0] == 'f')
		temp = (temp-32)*(.833333333);
	
	cout << "<p>The celcius temp is: " << temp << "<br>conversion table to be added soo because I dont feel like doing it just yet <br</p>";
	
	
	
}
