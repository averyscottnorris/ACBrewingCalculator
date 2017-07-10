/*
File Name: inut_conv.cpp
Author: Cody Leytham	Date: 7/7/2017
This is a metric and imperial unit converter.
*/
#include <iostream>

using namespace std;

int main()
{
	char c_type;
	cout << "Do you want Metric to Imperial (m) or Imperial to Metric (i)? (M/I): ";
	cin >> c_type;
	cin.ignore(100, '\n');
	c_type = tolower(c_type);
	cout << "\nType: " << c_type << '\n';
	
	while(c_type != 'm' && c_type != "i")
	{
		cout << "That is not a valid answer, please enter M for metric or I for imperial or Q for quit: (M/I/Q): ";
		cin >> c_type;
		cin.ignore(100, '\n');
		c_type = tolower(c_type);
		cout << "\nType: " << c_type << '\n';
		if(c_type == q)
			return 0;	
	}
	
	
	
	return 0;
	
	
}
