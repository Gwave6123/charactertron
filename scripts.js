
//V1.2




function make(){
racepick();
classpick();
locationtype();
situation();
fullstats();
}
function racepick(){
//Used for picking races. Update later with more!	
	var normraces = ["Dwarf", "Elf", "Halfling", "Human", "Dragonborn", "Gnome", "Half-Elf", "Half-Orc", "Tiefling"];
	var normracesrand = (Math.floor((Math.random() * 10) + 1)) % normraces.length;

	document.getElementById("race").innerHTML = normraces[normracesrand];
}

function classpick(){
//Used for picking classes. This is gona hurt!
	var classes = ["Warrior", "Cavaller", "Berserker", "Puglilist", "Shield-Bearer", "Weapon Master", "Dragoon", "Sentinel", "Fencer", "Soldier", "Samurai", "Martial Artist", "Monk", "Dragon Knight", "Dark Knight", "Archer", "Corsair", "Beast Rider", "Ronin", "Warlord", "Herald", "Inquisitor", "Blade-Slinger", "Paladin", "Marksman", "Duelist", "Marauder", "Raider", "Adventurer", "Strategist", "Diplomat", "Templar", "Spellsword", "Death Knight", "Battlemage", "Bandit", "Gunslinger", "Assassin", "Ranger", "Ninja", "Merchant", "Bard", "Dancer", "Arcane-Archer", "Red Mage", "Blue Mage", "Cleric", "Battle-Priest", "Cutpurse", "Scout", "Hunter", "Explorer", "Beastmaster", "Horizon-Walker", "Strider", "Loremaster", "Enchanter", "Summoner", "Psion", "Elementalist", "Necromancer", "Druid", "Acolyte", "Highwayman", "Ballistician", "Spy", "Poisoner", "Trap-Master", "Dark-Delver", "Gambler", "Mentalist", "Tinker", "Technomancer", "Animist", "Geomancer", "Dream-Walker", "Channeler", "Sage", "Theurge", "Warlock", "Thief", "Infiltrator", "Cat-Burglar", "Philanderer", "Stalker", "Chameleon", "Trickster", "Magician", "Shadow-Mancer", "Alchemist", "Binder", "Conjurer", "Illusionist", "Shaman", "Seer", "Arcanist", "Which", "Sorcerer", "Wizard"];
	var classesrand = (Math.floor((Math.random() * 100) + 1)) % classes.length;
	
	document.getElementById("class").innerHTML = classes[classesrand];
}

function locationtype(){
//phrased as "A blah blah blah"
	var loc = ["a hamlet", "a tiny thorp", "a farming village", "a frontier colony near the mountains", "a frontier colony in a forest", "a frontier colony near the ocean", "a dark and dreary swamp", "a well known keep", "a military fortress", "a kingdom from another country", "a noble distirct of a metropolis", "a slum of a metropolis", "a merchants district of a metropolis", "a secluded religious convent", "a dark kingdom hidden in the mysterious reaches of the world", "a citadel of religious importance", "a harbor city", "a small fishing village", "a village under control of a tyrant", "a village under constant threat of monsters", "another plane", "the future", "the past", "a tomb that preserved them through time", "a island paradise", "a volcanic island chain", "a desert tribe", "a city built atop ancient dusty ruins", "a city critical to the story", "a place unheard of by anyone", "a merchant ship that rarely stays in port"];
	var locrand = (Math.floor((Math.random() * 100) + 1)) % loc.length;

	document.getElementById("location").innerHTML = loc[locrand];
}

function situation(){
//phrased as... who"blah blah blah"
	var sit = ["is looking for adventure.", "is looking to make enough money to retire.", "has dreams of settling down with their dream partner.", "is zealously religious.", "is trying to discredit another religion of the land.", "believes in a grand conspiracy of the nobility.", "stands up for the rights of the poor.", "tries to make the rich richer.", "loves military order.", "is trying to de-militarize the land.", "used to be an advisor to nobility.", "lost their family.", "could no longer live at home after their sibling went missing.", "has a disdain for authority.", "always wants to be the leader.", "thinks merchants of all kinds are crooks.", "has a mental disorder.", "is overweight; maybe a bit too much.", "is cursed is a hilarious way.", "is cursed in a tragic way.", "always looks on the bright side of life.", "keeps a memento from a lost lover.", "has developed a deep fear of a specific creature.", "has developed a deep fear of a specific situation.", "had their home completely destroyed.", "was run out of town for a crime they didn't commit.", "is currently wanted for a minor crime.", "is currently wanted for a serious crime.", "can't trust anyone, even themself.", "hates all magic use.", "tries to use magic as often as possible.", "believes a type of large creature to be a god.", "is trying to start a new religion.", "used to be a slave.", "used to work with a slave driver."];
	var sitrand = (Math.floor((Math.random() * 100) + 1)) % sit.length;

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