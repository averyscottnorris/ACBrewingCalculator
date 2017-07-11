/*
File name oz_gram	Date: 07/09/17
Author: Cody Leytham	Purpose: to allow a user to convert ounces to grams and vice versa
*/

#include <iostream>

using namespace std;


int main()
{
	//c_type holds the type of converstion desired, s_unit is the source unit and d_unit is the desired unit
	char c_type;
	int s_unit, d_unit;
	s_unit = 0;
	d_unit = 0;
	cout << "Do you want Metric to Ounces to grams (O) or Grams to Ounce (G)? (O/G): ";
	cin >> c_type;
	//ignoring additional input beyond the first character
	cin.ignore(100, '\n');
	//convertiing input to lower
	c_type = tolower(c_type);
	//returning the choice
	cout << "\nType: " << c_type << '\n';
	
	while(c_type != 'o' && c_type != 'g')
	{
		//if the user entered an invalid choice then prompting for new input until proper input is entered or the user chooses to quit
		cout << "That is not a valid answer, please enter M for metric or I for imperial or Q for quit: (M/I/Q): ";
		cin >> c_type;
		//ignoring extra input
		cin.ignore(100, '\n');
		//converting input to lower case
		c_type = tolower(c_type);
		//returning the choice
		cout << "\nType: " << c_type << '\n';
		if(c_type == 'q')
			return 0;	
	}
	
	if(c_type == 'o')
	{
		cout << "\nHow many ounces do you have?: ";
		while(!(cin >> s_unit))
		{
			cin.clear();
			cin.ignore(100, '\n');
			cout << "Invalid input, try again: ";
		}
		d_unit = s_unit * 28;
		cout << "You have " << d_unit << " Grams.";
	}
	
	if(c_type == 'g')
	{
		cout << "\nHow many grams do you have?: ";
		while(!(cin >> s_unit))
		{
			cin.clear();
			cin.ignore(100, '\n');
			cout << "Invalid input, try again: ";
		}
		d_unit = s_unit/28;
		cout << "You have " << d_unit << " Ounces.";
	}
	
	
	
	return 0;
}
	


	


