# ACBrewingCalculator
Google Chrome extension that provides brewers with a easy-to-access 
brewing calculator for basic brewing aspects.  Brew on, friends!


# Installation
To install the ACBrewingCalculator Chrome extension:
1. Download the 'Code' folder to your computer.  

2. Open your Google Chrome web browser, and go to: 
<code>chrome://extensions</code>

3. Check the box near the top to enter 'Developer Mode'.

4. Then click the box that says 'Load Unpacked Extension', and navigate to
the 'Code' folder on your computer.

5. The extension will install, and can be accessed by the icon in the
top-right of the browser bar.

------ADD PACKED VERSION TO CHROME STORE???------


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


# Legal

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
