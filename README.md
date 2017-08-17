# ACBrewingCalculator
ACBrewingCalculator is a Google Chrome extension that provides
brewers with a easy-to-access brewing calculator for basic brewing
calculations.  It currently provides support for: ABV calculation,
IBU calculation, hydrometer adjustment, priming sugar calculation,
pH calculations, and unit conversions. All of these are easily
accessable through your Chrome browser at the click of a button.

Brew on, friends!

Developed and Copyright (c) 2017 by Avery Norris and Cody Leytham

To contact the authors, you may send an email to either: avnorris@pdx.edu or cleytham@pdx.edu


# Installation
To install the ACBrewingCalculator Chrome extension:

1. Navigate to: https://chrome.google.com/webstore/detail/acbrewingcalculator/hlacbngjamklodhmjgpfdipioipmemkn?hl=en-US

2. Click "Add To Chrome" in the top-right.

3. The extension will now download and install.

Alternatively, you can do a manual installation.  NOTE: This method will not
automatically update, and will require a little more work on your part.

1. Download the files to your computer by clicking "Clone or Download" and
choose "Download ZIP". Unzip the folder once it has downloaded. 

2. Open your Google Chrome web browser, and go to: 
<code>chrome://extensions</code>

3. Check the box near the top to enter 'Developer Mode'.

4. Then click the box that says 'Load Unpacked Extension', and navigate to
the folder you unzipped on your computer.

5. The extension will install, and can be accessed by the icon in the
top-right of the browser bar.


# Forking and Contribution
To clone the repository for your own development:

1. Click the "Fork" button to copy the repo to your Github account.

2. Open a terminal and type the following:
<code>$ git clone git@github.com:yourusername/ACBrewingCalculator</code>

3. Change into the repo with:
<code>$ cd ACBrewingCalculator</code>

4. To connect your copy with the original repo:
<code>$ git remote add ACBrewingCalculator git://github.com/averyscottnorris/ACBrewingCalculator</code>

5. Make changes, and use <code>git add</code> and <code>git commit</code> to finalize those changes. Use
<code>git push</code> to publish your commits to your own github repo.

6. On your own github copy of the repo, you may use the "Pull Request" button to
offer your changes to the original ACBrewingCalculator repo.  Please provide a 
detailed explaination of changes for your modifications to be considered.

7. In the wise words of the father of homebrew, Charlie Papazian: "Relax. Don't worry. And have a homebrew."
    

For more detailed information, take a look at Karl Broman's Github 
tutorial at: http://kbroman.org/github_tutorial/pages/fork.html


-------------------------------------------------------------------------


# Limitations
Please note that this product is a work-in-progress.  It has not been
as extensively bug-tested as we would like.  For many of the applications,
there are limits to the range of numbers that the calculators will accept;
additionally, rounding in some of the calculations may cause small
percentages of error in the final answer.

It is our belief that homebrew is not an exact science, and small error
margins will not make a noticeable difference in the end product.

If you find any bugs or errors, please email them to our bug tracker
at: acbrewbug@hotmail.com


<!--
This is an unfinished product and limitations are unknown but 
for many of the applications, it will be limited to realistic
values and data some of wich are limits on the abilities of a computer.
Ex: having unrealistically small differences in pH levels could cause
the pH calculator to calculate unrealistically with floating point
arithmetic.
Rounding is done assuming the program is used to its intended purpose, home
brewing. Ex: the hydrometer correction calculator is rounded to the 100ths
1000ths place, the formula is theoretically more accurate but considering
this is for home brewing, it is rounded to the accuracy of most hydometers.
The accepted input is also narrowed to meet the laws of physics and logic
and to make some equations work. Ex: The hydrometer only works for sample
temperatures between 40 and 120 degrees becasue if your beer falls to 
around 40 or below, the yeast will stop acting and below 120 to keep the 
temp near the calibration temperature. The calibration range is also limited
to match the hydrometers on the market.

Other limitations come from software limitations of chrome. 

-->


# Legal

By downloading and/or using this software, you agree to and and all
terms listed here and in the attached GPL license.  The use of this
software is strictly at your own risk.  ACBrewingCalculator and its
developers assume no liability for any use or misuse of this software
that may cause any harm to users or their property.

Copyright (C) 2017 Avery Norris and Cody Leytham

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.


<div>Icons made by
 <a href="http://www.flaticon.com/authors/nas-ztudio" title="Nas Ztudio">Nas Ztudio</a> from 
 <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by 
 <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
 
 Background image from http://www.pixabay.com
