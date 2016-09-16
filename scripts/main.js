alert("It is the first morning you wake up since the outbreak. Yesterday you lost your entire family to charlie, your neighbor, who was the first one you witnessed infected with the zombie plague. You are distraught but somehow you made it through that terrible yesterday... You head to your local walmart to see what you can scrounge to survive one more day.  As you loot, everything seems safe, as the store is empty. All of a sudden, the seeling above you crumbles and falls. As the dust cleears, what you first think is a corps starts to move and you here a blood curdling moan. the body raises to its feet and starts limping towards you!!");
var weapon = prompt("Your head is on a swivel as you look for anything at arms length you can use to protect yourself, immidiately you see a hollow rod, a medicine ball, and a sling-shot. which weapon do you choose??");
var randomNumber = Math.round(Math.random() * 2);
//var randomNumber = 2

alert("You weild your " + weapon + " and attack the monster");

if(randomNumber === 0){
  alert("Sadly, your attack has little affect on the zombie. You stumble and fall as you try to run, and you feel a sharp pain in your back. you managed to turn around and use your bare hands to dismember the creature until it stops moving. You then slide over to a nearby wall and lean against it. you know what has happened and you give up. on any other efforts you once had. you have no choice but to sit there and wait as you enivitably lose your mind and eventually turn...   YOU LOSE.")
}else if (randomNumber === 1){
  alert("Your " + weapon + " hits the zombie right where you anticipate. It falls back to the ground. You turn around and swipe a box of granola as you dart out the back door.")
}else if (randomNumber === 2){
  alert("Your attack grazes the zombie, and as you prep yourself for another... the creature takes a step back. It cocks its head to the side and looks you in the eye. It remains motionless for a moment, then groans the sound \"BrrrraaaaAAAaiiinnzzz\". It then sidesteps around you, sliding across the shelves on the other side of the aisle, as if to avoid being hit again... It then resumes its limp to the end of the aisle and turns the corner.... Wait. really? hehe! I guess that means you don't have a-- nevermind. let me check something... well I guess technically, thats a win? Yeah, a win! You win!!!");
}


console.log(randomNumber)