/*
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
  if(from == 2 && to == 1)
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

function unit_conv(){
  //getting the data from the html
  var value = document.getElementById("g1").value; 
  var gf1 = document.getElementById("gf1").value; 
  var gt1 = document.getElementById("gt1").value;
//  document.getElementById("liquid1").innerHTML = gf1 + " " + gt1;
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
      document.getElementById("liquid1").innerHTML = value + " " + fname + " is" + res + " " + tname;
    }
    else if(value < 0)
      alert("Please only use positive number. NO SPATIAL SINGULARITIES!!!.");
  }
}

*/
