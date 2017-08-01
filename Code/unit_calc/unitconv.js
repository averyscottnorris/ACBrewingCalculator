
function lrg_dry(mass, from, to){
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
  return res;
}

