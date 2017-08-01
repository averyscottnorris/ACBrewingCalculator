function isFloat(src){
  for(i = 0; i < src.length; i++){
	if(isNaN(parseInt(src[i], 10)) && value[i] != "."){
		return 0;	
	}
  }
  return 1;
}

function isInt(src){
  for(i = 0; i < src.length; i++){
	if(isNaN(parseInt(src[i], 10))){
		return 0;	
	}
  }
  return 1;
}

function checkLen(src, lim){
  if(src.length > 5){
    return 0;
  }
  return 1;
}

function scrubInt(src, lim){
  if(!checkLen(src, lim) && !isInt(src))
    return 3;
  else if(checkLen(src, lim) && isInt(src))
    return 0;
  else if(!isInt(src))
    return 1;
  else if(!checkLen(src, lim))
    return 2;
  else
    return 4;
}

function scrubFloat(src, lim){
  if(!checkLen(src, lim) && !isInt(src))
    return 3;
  else if(checkLen(src, lim) && isInt(src))
    return 0;
  else if(!isInt(src))
    return 1;
  else if(!checkLen(src, lim))
    return 2;
  else
    return 4;
}

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

