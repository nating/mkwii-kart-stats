
var CHARACTERS = [
	["Baby Mario", "Light", 0, 8, 0, 6, 0, 0, 0,"baby-mario"],
	["Baby Luigi", "Light", 5, 8, 0, 0, 0, 0, 0,"baby-luigi"],
	["Baby Peach", "Light", 3, 6, 3, 3, 0, 0, 0,"baby-peach"],
	["Baby Daisy", "Light", 5, 6, 0, 0, 0, 0, 3,"baby-daisy"],
	["Toad", "Light", 0, 0, 6, 0, 6, 0, 0,"toad"],
	["Toadette", "Light", 3, 0, 0, 0, 0, 6, 0,"toadette"],
	["Koopa Troopa", "Light", 0, 0, 0, 3, 0, 0, 6,"koopa-troopa"],
	["Dry Bones", "Light", 0, 0, 3, 0, 3, 0, 6,"dry-bones"],
	["Mario", "Medium", 0, 6, 2, 2, 3, 0, 0,"mario"],
	["Luigi", "Medium", 2, 6, 0, 0, 0, 0, 0,"luigi"],
	["Peach", "Medium", 2, 0, 5, 0, 6, 0, 0,"peach"],
	["Daisy", "Medium", 4, 0, 0, 2, 0, 0, 3,"daisy"],
	["Yoshi", "Medium", 0, 3, 0, 0, 3, 5, 0,"yoshi"],
	["Birdo", "Medium", 0, 3, 0, 0, 0, 3, 5,"birdo"],
	["Diddy Kong", "Medium", 0, 0, 3, 0, 3, 0, 5,"diddy-kong"],
	["Bowser Jr.", "Medium", 0, 0, 0, 0, 0, 3, 3,"bowser-jr"],
	["Wario", "Heavy", 0, 3, 0, 0, 0, 3, 6,"wario"],
	["Waluigi", "Heavy", 0, 0, 6, 0, 5, 3, 0,"waluigi"],
	["Donkey Kong", "Heavy", 0, 3, 2, 2, 0, 0, 3,"donkey-kong"],
	["Bowser", "Heavy", 2, 5, 0, 0, 3, 0, 0,"bowser"],
	["King Boo", "Heavy", 0, 0, 0, 5, 0, 3, 0,"king-boo"],
	["Rosalina", "Heavy", 3, 0, 0, 3, 0, 0, 3,"rosalina"],
	["Funky Kong", "Heavy", 4, 0, 0, 0, 0, 3, 0,"funky-kong"],
	["Dry Bowser", "Heavy", 0, 0, 0, 0, 0, 6, 6,"dry-bowser"],
	["Mii (Light)", "Light", 3, 3, 0, 0, 3, 0, 3,"mii"],
	["Mii (Medium)", "Medium", 3, 3, 0, 0, 0, 3, 3,"mii"],
	["Mii (Heavy)", "Heavy", 3, 0, 3, 3, 3, 0, 0,"mii"]
];
var VEHICLES = [
	["Standard Kart S", "Light", 41, 29, 48, 48, 51, 40, 45,"standard-kart-s"],
	["Baby Booster", "Light", 27, 27, 56, 64, 37, 54, 59,"baby-booster"],
	["Concerto", "Light", 55, 32, 29, 32, 64, 27, 64,"concerto"],
	["Cheep Charger", "Light", 34, 24, 64, 56, 59, 45, 54,"cheep-charger"],
	["Rally Romper", "Light", 46, 35, 43, 43, 29, 64, 40,"rally-romper"],
	["Blue Falcon", "Light", 60, 29, 35, 29, 43, 24, 29,"blue-falcon"],
	["Standard Bike S", "Light", 39, 21, 51, 51, 54, 43, 48,"standard-bike-s"],
	["Bullet Bike", "Light", 53, 24, 32, 35, 67, 29, 67,"bullet-bike"],
	["Nanobike", "Light", 25, 18, 59, 67, 40, 56, 62,"nanobike"],
	["Quacker", "Light", 32, 17, 67, 60, 62, 48, 57,"quacker"],
	["Magikruiser", "Light", 43, 24, 45, 45, 32, 67, 43,"magikruiser"],
	["Bubble Bike", "Light", 48, 27, 40, 40, 45, 35, 37,"bubble-bike"],
	["Standard Kart M", "Medium", 46, 45, 40, 43, 45, 35, 40,"standard-kart-m"],
	["Classic Dragster", "Medium", 37, 43, 59, 54, 54, 40, 51,"classic-dragster"],
	["Wild Wing", "Medium", 57, 51, 21, 29, 59, 24, 59,"wild-wing"],
	["Super Blooper", "Medium", 50, 40, 35, 37, 21, 54, 35,"super-blooper"],
	["Daytripper", "Medium", 34, 45, 51, 59, 32, 48, 54,"daytripper"],
	["Sprinter", "Medium", 64, 48, 27, 24, 37, 21, 24,"sprinter"],
	["Standard Bike M", "Medium", 43, 37, 43, 45, 48, 37, 43,"standard-bike-m"],
	["Mach Bike", "Medium", 55, 37, 24, 32, 62, 27, 62,"mach-bike"],
	["Sugarscoot", "Medium", 32, 32, 54, 62, 35, 51, 56,"mach-bike"],
	["Zip Zip", "Medium", 41, 35, 45, 51, 29, 62, 45,"zip-zip"],
	["Sneakster", "Medium", 62, 40, 29, 27, 40, 24, 27,"sneakster"],
	["Dolphin Dasher", "Medium", 48, 43, 37, 40, 24, 56, 37,"dolphin-dasher"],
	["Standard Kart L", "Heavy", 48, 59, 37, 40, 40, 35, 35,"standard-kart-l"],
	["Offroader", "Heavy", 39, 64, 48, 54, 18, 43, 45,"offroader"],
	["Flame Flyer", "Heavy", 62, 59, 16, 21, 48, 18, 48,"flame-flyer"],
	["Piranha Prowler", "Heavy", 55, 67, 29, 35, 35, 29, 27,"piranha-prowler"],
	["Jetsetter", "Heavy", 69, 56, 21, 17, 27, 16, 16,"jetsetter"],
	["Honey Coupe", "Heavy", 53, 62, 27, 29, 56, 24, 56,"honey-coupe"],
	["Standard Bike L", "Heavy", 46, 54, 40, 43, 43, 37, 37,"standard-bike-l"],
	["Flame Runner", "Heavy", 60, 54, 18, 24, 51, 21, 51,"flame-runner"],
	["Wario Bike", "Heavy", 37, 59, 51, 56, 21, 45, 48,"wario-bike"],
	["Shooting Star", "Heavy", 50, 48, 29, 32, 59, 27, 59,"shooting-star"],
	["Spear", "Heavy", 67, 56, 24, 18, 29, 18, 18,"spear"],
	["Phantom", "Heavy", 43, 51, 43, 48, 17, 56, 40,"phantom"]
];

var STATISTICS = ["speed", "weight", "acceleration", "handling", "drift", "offroad", "miniturbo"];


//Set all the selectables to update the stats when clicked
var m = document.getElementsByClassName("selectable");
for (var i=0;i<m.length;i++){
  m[i].onclick = function () { updatestats(); };
}

updatestats();

//Returns an array representing the first currently selected Character
function getSelectedCharacterA(){
  var cs = document.getElementsByName('characters-radio-a');
  for (var i=0;i<cs.length;i++){
    if (cs[i].checked){
      var index = cs[i].value;
      return CHARACTERS[index];
    }
  }
}

//Returns an array representing the first currently selected Vehicle
function getSelectedVehicleA(){
  var vehicleOffset = 0;
  var character = getSelectedCharacterA();
  var characterWeight = character[1];
  switch(characterWeight) {
      case "Heavy":
          vehicleOffset = 12;
          break;
      case "Medium":
          vehicleOffset = 6;
          break;
      default:
          break;
  }

  var vs = document.getElementsByName('vehicles-radio-a');
  for (var i=0;i<vs.length;i++){
    if (vs[i].checked){
      var index = parseInt(vs[i].value);
      return VEHICLES[index+vehicleOffset];
    }
  }
}

//Returns an array representing the first currently selected Character
function getSelectedCharacterB(){
  var cs = document.getElementsByName('characters-radio-b');
  for (var i=0;i<cs.length;i++){
    if (cs[i].checked){
      var index = cs[i].value;
      return CHARACTERS[index];
    }
  }
}

//Returns an array representing the first currently selected Vehicle
function getSelectedVehicleB(){
  var vehicleOffset = 0;
  var character = getSelectedCharacterB();
  var characterWeight = character[1];
  switch(characterWeight) {
      case "Heavy":
          vehicleOffset = 12;
          break;
      case "Medium":
          vehicleOffset = 6;
          break;
      default:
          break;
  }

  var vs = document.getElementsByName('vehicles-radio-b');
  for (var i=0;i<vs.length;i++){
    if (vs[i].checked){
      var index = parseInt(vs[i].value);
      return VEHICLES[index+vehicleOffset];
    }
  }
}


// Update the statistics comparison in the centre of the page
function updatestats() {

	updateKarts();

  //Set all selectables to unselected except those with checked inputs
  var selectables = document.getElementsByClassName("selectable");
  for (var i=0;i<selectables.length;i++){
    for (var j=0;j<selectables[i].childNodes.length;j++) {
      if (selectables[i].childNodes[j].nodeName == "INPUT") {
        if (selectables[i].childNodes[j].checked){
          selectables[i].style.backgroundColor = '#FFFF0066';
        }
        else{
          selectables[i].style.backgroundColor = 'black';
        }
      }
    }
  }

  var ca = getSelectedCharacterA();
  var cb = getSelectedCharacterB();
  var va = getSelectedVehicleA();
  var vb = getSelectedVehicleB();
	var	sa, sb;

	for(var s=0;s<STATISTICS.length;s++) {
		document.getElementById(STATISTICS[s]+"-num-a").innerHTML = sa = ca[s+2] + va[s+2];
		document.getElementById(STATISTICS[s]+"-num-b").innerHTML = sb = cb[s+2] + vb[s+2];
		document.getElementById(STATISTICS[s]+"-num-diff").innerHTML = (sb > sa ? "+" : "") + (sb - sa);
		document.getElementById(STATISTICS[s]+"-num-diff").style.color = sb > sa ? "green" : (sa > sb ? "red" : "transparent");
		document.getElementById(STATISTICS[s]).style.width = (Math.min(sa, sb) / 70 * 85) + "%";
		document.getElementById(STATISTICS[s]+"-diff").style.width = (Math.abs(sb - sa) / 70 * 85) + "%";
		document.getElementById(STATISTICS[s]+"-diff").style.backgroundColor = sb > sa ? "green" : "red";
	}
}

function updateKarts(){
  var ca = getSelectedCharacterA();
  var cb = getSelectedCharacterB();

	var vaOffset = 0;
	var vbOffset = 0;
  var caWeight = ca[1];
  var cbWeight = cb[1];
  switch(caWeight) {
      case "Heavy":
          vaOffset = 12;
          break;
      case "Medium":
          vaOffset = 6;
          break;
      default:
          break;
  }
  switch(caWeight) {
      case "Heavy":
          vbOffset = 12;
          break;
      case "Medium":
          vbOffset = 6;
          break;
      default:
          break;
  }

	for(var i=0;i<12;i++){
		var imgA = document.getElementById("vehicle-a-image-"+i);
		var va = VEHICLES[vaOffset+i];
		imgA.setAttribute("src","./static/img/vehicles/"+va[9]+"/"+ca[9]+".png");
		//var imgB = document.getElementById("vehicle-b-image-"+i);
		//imgB.setAttribute("src","./static/img/"+va[9]+"/"+ca[8]+".png");
	}

}

/*
function updatekarts(c) {
	var w = characters[document.getElementById("char"+c).value][1],
		k = document.getElementById("kart"+c), s = k.selectedIndex, i, o;
	k.options.length = 0;
	for(i = o = 0; i < karts.length; i++) {
		if( karts[i][1] == w ) {
			k.options[o++] = new Option(karts[i][0], i);
		}
	}
	k.selectedIndex = s;
	updatestats();
}

window.onload = function() {
	var a = document.getElementById("chara"), b = document.getElementById("charb"), i;
	for(i = 0; i < characters.length; i++) {
		a.options[i] = new Option(characters[i][0], i);
		b.options[i] = new Option(characters[i][0], i);
	}
	a.options[9].selected = true;
	b.options[10].selected = true;
	updatekarts("a");
	updatekarts("b");
	document.getElementById("karta").selectedIndex = 0;
	document.getElementById("kartb").selectedIndex = 0;
	updatestats();
}
*/
