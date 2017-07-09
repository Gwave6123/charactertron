
//V1.4


function main(){
	document.getElementById("phbraces").checked = true;
	document.getElementById("lowfantasy").checked = true;
	make();
	
}

function make(){
racepick();
classpick();
locationtype();
situation();
fullstats();
}
function racepick(){ //Used for picking races. Update later with more!
	var phb = document.getElementById("phbraces");
	var phb2 = document.getElementById("phbraces2");
	var volos = document.getElementById("volosguideraces");
	var volos2 = document.getElementById("volosguidemons");
	var ebb = document.getElementById("eberronraces");

	var options = [];

	var normraces = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
	var normraces2 = ["Hill Dwarf", "Mountain Dwarf", "High Elf", "Wood Elf", "Drow", "Lightfoot Halfling", "Stout Halfling", "Human", "Dragonborn", "Forest Gnome", "Rock Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
	var voloraces = ["Protector Aasimar", "Scourge Aasimar", "Fallen Aasimar", "Firbolg", "Goliath", "Kenku", "Lizardfolk", "Tabaxi", "Triton"];
	var voloraces2 = ["Bugbear", "Goblin", "Hobgoblin", "Kobold", "Orc", "Yuan-Ti"];
	var ebbraces = ["Changeling", "Shifter", "Warforged"];
	var eevil = ["Aarakocra", "Deep Gnome", "Gensai", "Goliath"];

	if (phb.checked && !phb2.checked){
		options = options.concat(normraces);
	}
	if (phb2.checked){
		options = options.concat(normraces2);
	}
	if (volos.checked){
		options = options.concat(voloraces);
	}
	if (volos2.checked){
		options = options.concat(voloraces2);
	}
	if (ebb.checked){
		options = options.concat(ebbraces);
	}

	//random selector.
	var optionsrand = (Math.floor((Math.random() * options.length)));

	//Final check for if no options are selected.

	if (options[0] == null){
		document.getElementById("race").innerHTML = "Determined";
	}
	else {
		document.getElementById("race").innerHTML = options[optionsrand];
	}
	
}

function classpick(){ //Used for picking classes. This is gona hurt!
	var classes = ["Warrior", "Cavaller", "Berserker", "Puglilist", "Shield-Bearer", "Weapon Master", "Dragoon", "Sentinel", "Fencer", "Soldier", "Samurai", "Martial Artist", "Monk", "Dragon Knight", "Dark Knight", "Archer", "Corsair", "Beast Rider", "Ronin", "Warlord", "Herald", "Inquisitor", "Blade-Slinger", "Paladin", "Marksman", "Duelist", "Marauder", "Raider", "Adventurer", "Strategist", "Diplomat", "Templar", "Spellsword", "Death Knight", "Battlemage", "Bandit", "Gunslinger", "Assassin", "Ranger", "Ninja", "Merchant", "Bard", "Dancer", "Arcane-Archer", "Red Mage", "Blue Mage", "Cleric", "Battle-Priest", "Cutpurse", "Scout", "Hunter", "Explorer", "Beastmaster", "Horizon-Walker", "Strider", "Loremaster", "Enchanter", "Summoner", "Psion", "Elementalist", "Necromancer", "Druid", "Acolyte", "Highwayman", "Ballistician", "Spy", "Poisoner", "Trap-Master", "Dark-Delver", "Gambler", "Mentalist", "Tinker", "Technomancer", "Animist", "Geomancer", "Dream-Walker", "Channeler", "Sage", "Theurge", "Warlock", "Thief", "Infiltrator", "Cat-Burglar", "Philanderer", "Stalker", "Chameleon", "Trickster", "Magician", "Shadow-Mancer", "Alchemist", "Binder", "Conjurer", "Illusionist", "Shaman", "Seer", "Arcanist", "Witch", "Sorcerer", "Wizard"];
	var classesrand = (Math.floor(Math.random() * classes.length));
	
	document.getElementById("class").innerHTML = classes[classesrand];
}

function locationtype(){ //phrased as "A blah blah blah"
	var lowfan = document.getElementById("lowfantasy");
	var highfan = document.getElementById("highfantasy");
	var metro = document.getElementById("metropolis");
	var glob = document.getElementById("global");
	var planar = document.getElementById("planar");

	var options = [];

	var lowfanloc = ["a hamlet", "a tiny thorp", "a village", "a small town", "a large town", "a small city", "a large city", "a castle town", "a farming village", "a mining town", "a riverside town", "a oceanside town", "a capital city", "a military fort", "a military bastion", "a military stronghold", "a bustling trade city", "a religious convent"];
	var highfanloc = ["a secluded wizards town", "a remote nexus point", "a secluded college of magic", "a fortress guarding a source of magical power", "a central hub city for teleportation", "a village that constructs magical goods"];
	var metroloc = ["a prestigious district of a metropolis", "a slum of a metropolis", "a secluded nobles mansion in a metropolis", "a common noble castle in a metropolis", "a bustling trade district in a metropolis", "a trade-slum in a metropolis", "a homeless warren in a metropolis", "a underground sub-city of a metropolis", "a hidden city of a ruined matropolis", "a underdark settlement whos entrance is hidden in a metropolis", "a slave home of a noble in a metropolis", "a religious convent or district in a metropolis", "a racially segregated district of a metropolis"]
	var globloc = ["a frontier town in the mountains", "a frontier town on a far away coast", "a final frontier city", "a hidden city deep within the wildlands", "a remote island paradise", "a pirate island city", "a far away kingdom", "a volcanic fortress-kingdom", "a tundra city", "a city deep in the artic circle", "a long forgotten desert city", "a faraway primitive civilization"];
	var planloc = ["a good inhabited plane", "a evil inhabited plane", "a plane of water and sky", "a plane filled with firece monsters", "a plane invaded and ruled by otherworldly creatures", "a plane protected by the gods", "a plane that had only recently discovered extra-planar travel"]
	//var loc = ["a hamlet", "a tiny thorp", "a farming village", "a frontier colony near the mountains", "a frontier colony in a forest", "a frontier colony near the ocean", "a dark and dreary swamp", "a well known keep", "a military fortress", "a kingdom from another country", "a noble distirct of a metropolis", "a slum of a metropolis", "a merchants district of a metropolis", "a secluded religious convent", "a dark kingdom hidden in the mysterious reaches of the world", "a citadel of religious importance", "a harbor city", "a small fishing village", "a village under control of a tyrant", "a village under constant threat of monsters", "another plane", "the future", "the past", "a tomb that preserved them through time", "an island paradise", "a volcanic island chain", "a desert tribe", "a city built atop ancient dusty ruins", "a city critical to the story", "a place unheard of by anyone", "a merchant ship that rarely stays in port"];
	
	if (lowfan.checked){
		options = options.concat(lowfanloc);
	}
	if (highfan.checked){
		options = options.concat(highfanloc);
	}
	if (metro.checked){
		options = options.concat(metroloc);
	}
	if (glob.checked){
		options = options.concat(globloc);
	}
	if (planar.checked){
		options = options.concat(planloc);
	}

	//random selector.
	var optionsrand = (Math.floor((Math.random() * options.length)));

	//Final check for if no options are selected.

	if (options[0] == null){
		document.getElementById("race").innerHTML = "a unknown place";
	}
	else {
		document.getElementById("location").innerHTML = options[optionsrand];
	}
}

function situation(){
//phrased as... who"blah blah blah"
	var sit = ["is looking for adventure.", "is looking to make enough money to retire.", "has dreams of settling down with their dream partner.", "is zealously religious.", "is trying to discredit another religion of the land.", "believes in a grand conspiracy of the nobility.", "stands up for the rights of the poor.", "tries to make the rich richer.", "loves military order.", "is trying to de-militarize the land.", "used to be an advisor to nobility.", "lost their family.", "could no longer live at home after their sibling went missing.", "has a disdain for authority.", "always wants to be the leader.", "thinks merchants of all kinds are crooks.", "has a mental disorder.", "is overweight; maybe a bit too much.", "is cursed is a hilarious way.", "is cursed in a tragic way.", "always looks on the bright side of life.", "keeps a memento from a lost lover.", "has developed a deep fear of a specific creature.", "has developed a deep fear of a specific situation.", "had their home completely destroyed.", "was run out of town for a crime they didn't commit.", "is currently wanted for a minor crime.", "is currently wanted for a serious crime.", "can't trust anyone, even themself.", "hates all magic use.", "tries to use magic as often as possible.", "believes a type of large creature to be a god.", "is trying to start a new religion.", "used to be a slave.", "used to work with a slave driver."];
	var sitrand = (Math.floor((Math.random() * sit.length)));

	document.getElementById("situation").innerHTML = sit[sitrand];
}

function rolld6(){
//Dirty d6 roller. Not the most true, but it's what I've got. 
	var roll = (Math.floor(Math.random() * 6)) + 1;
	return roll;
}

function rollstat(){
//array is drawn out, but it works so it's fine.
	var roll1 = rolld6();
	var roll2 = rolld6();
	var roll3 = rolld6();
	var roll4 = rolld6();
	var rolls = [roll1, roll2, roll3, roll4];
	rolls.sort(function(a, b){return a - b});
	
	return (rolls[1] + rolls[2] + rolls[3]);
	//return rolls;
}

function fullstats(){
//rolls stats as dictated by the PHB for dnd 5e.
	document.getElementById("stat1").innerHTML = rollstat();
	document.getElementById("stat2").innerHTML = rollstat();
	document.getElementById("stat3").innerHTML = rollstat();
	document.getElementById("stat4").innerHTML = rollstat();
	document.getElementById("stat5").innerHTML = rollstat();
	document.getElementById("stat6").innerHTML = rollstat();
}

