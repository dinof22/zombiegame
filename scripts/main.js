/*
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
*/

/*
var beginningScenarios = ["It is the first morning you wake up since the outbreak. Yesterday you lost your entire family to charlie, your neighbor, who was the first one you witnessed infected with the zombie plague. You are distraught but somehow you made it through that terrible yesterday... You head to your local walmart to see what you can scrounge to survive one more day.  As you loot, everything seems safe, as the store is empty. All of a sudden, the seeling above you crumbles and falls. As the dust cleears, what you first think is a corps starts to move and you here a blood curdling moan. the body raises to its feet and starts limping towards you!!"];


function randomNumber(range) {
    return Math.round( Math.random () * range);
}

alert( beginningScenarios[ randomNumber( beginningScenarios.length - 1 ) ] );

var weaponList = ["shovel", "crossbow", "medicine ball", "slingshot", "hollow rod"];

var weapon = weaponList[ randomNumber( weaponList.length -1) ];
alert("Your head is on a swivel as you look for anything at arms length you can use to protect yourself, immidiately you see a slew of weapons");

var survival = randomNumber(2);

if (survival === 0 ) {
    alert("Sadly, your attack has little affect on the zombie. You stumble and fall as you try to run, and you feel a sharp pain in your back. you managed to turn around and use your bare hands to dismember the creature until it stops moving. You then slide over to a nearby wall and lean against it. you know what has happened and you give up. on any other efforts you once had. you have no choice but to sit there and wait as you enivitably lose your mind and eventually turn...   YOU LOSE.")
} else if ( survival > 0 ){
    alert("Your " + weapon + " hits the zombie right where you anticipate. It falls back to the ground. You turn around and swipe a box of granola as you dart out the back door.")
}
*/

var outcome;


window.alert("It is the first morning you wake up since the outbreak. Yesterday you lost your entire family to charlie, your neighbor, who was the first one you witnessed infected with the zombie plague. You are distraught but somehow you made it through that terrible yesterday...");


var beginningScenarios = ["You head to your local walmart to see what you can scrounge to survive one more day. When you get there you see that the place is completely barren and picked clean already. you are shocked that it could all be gone in one day. you have never set foot in this town before, it was the farthest place you could get to last night, but now you realise that you must trek even further, and without any food in your stomach or any means of protection. you walk straight down the country road till high noon. the heat is unbearable. in the baren landscape you drop to your knees in exaustion, and then lie on your back in the middle of the road. you close your eyes and a tear rolls down your face... you awaken to the sound of footsteps. You realise its later in the day. you whip around to see a tall and intimidating, but living man approaching you  with a shotgun in his hands. you cower and stumble away from him. hes comes to a stop 10 feet away and says \"I ain't here to kill you, so you can just relax. you look dehydrated.\" he approaches again as he pulls out a bottle of clear water and tosses it to you", "You wander throughout the day searching for anything you can find to survive another day. as the time has passed, you find yourself standing in an open field west of a white house with a boarded front door. There is a small mailbox here. you go to it and find that there is a letter attached to it, stained with blood. it reads: \" all our cousins came together for a family party. there are alot of us. we just want to be together. don't let us out.\" Perplexed, you try to peek through the boarded door. you see nothing and whats more, you hear nothing. Through a slit you make out what looks like a rifle haning on the fireplace mantle. your eyes widen and you begin to pull a board gently off the door to get inside.you try and remain silent. but in your exitement you splinter the board in half, throwing a peice loudly on the deck floor. you whip around to check that nobody from the outside has heard that awful noise. coast seems clear but you hear rumbling from above you followed by deep breathing that gets louder and louder. through the hole you made you see a staircase, and then dozens of screaming bodies begin rolling down the steps. suddenly the door bashes open!! the bodies headed right for you!! you jump straight off the deck and stumble back to your feet as you try t orun accross the street. you trip and roll into the ditch on the other side. you are followed by the undead, one after another they begin to come right on top of you. your adrenaline hightened so much that you fight with all your might to hold them off you. suddenly you here a gunshot, and another, and another! over and over until suddenly all is silent. you are buried in these corpses but they no longer try to bite you. You franticly slide from out from under the pile amd you see a tall and  intimidating, yet alive man with a smoking shotgun. you. lay there for a moment in awe.", "Desperate times call for desperate measures.  You see a small convenience store up ahead and decide to loot it for goods. you run inside but through the door you trip and fall right on your face. as you raise your head you see you are at the feet of a tall, intimidating man standing in front of you", "you suck get a live. JUST KIDDING!! is the scenario range working?" ];


function randomNumber(range) {
  "use strict";
  if (typeof range === "number") {
    return Math.round(Math.random() * range);
  }
}


window.alert(beginningScenarios[randomNumber(beginningScenarios.length - 1)]);


var character = {
  health: 5,
  strength: 0,
  stealth: 0,
  

  name: window.prompt("The man puts a knee to the ground and through his scruffy beard you hear him rumble, \"What is your name, survivor?\""),
  

  characterClass: window.prompt(" \"Well son,\" says the man you now know as Lloyd, \" before you think im here to save you i want you  to know im only looking for 3 types of people. are you a doctor, soldier, or a politician? now i dont need a politician for their survival skills, but anyway, are you lucky enough to be one of these??\" (Choose from: soldier, doctor, or politician)").toLowerCase()
  
};

if (!character.name) {
  character.name = window.prompt("\"OK then,\" He raises to his feet. \" If you don't remember I guess I could think of somethin' to call you.\" he extends a helping hand towards you. \"My name is Lloyd. your name is...");
  

  if (!character.name) {
    window.alert("\"HUSH-PUPPY!\" he grabs your hand and yanks you upwards. \"Ah' warned yuh! thats what ya get for lettin' the cat get your tongue. Hah!\"");
    character.name = "Hush-puppy";
  }
}


if (character.characterClass === "soldier") {
  character.strength = 5;
}

if (character.characterClass === "politician") {
  character.stealth = 5;
}

if (character.characterClass === "doctor") {
  character.health = 7;
}


var choice = window.prompt("\"Good. you'll be surprised what a " + character.characterClass + " will be able to do in this new world that we live in. Now, " + character.name + ", I have a truck that not far that is really going to help us out but its out of gass. A few miles down this road is a gas station and we are going to fill up on as much of it as we can carry and maybe get some loot from its drug store. come on.\" you gladly follow Lloyd as he   tells you all about his plans for long term survival. an hour later you reach the gas station. you notice that there seemed to be some explosion here. all of the gass pumps except one are obliterated and the roof has caved over the entrance of the drug store. Lloyd tells you to find a way inside and see what yu can find while he syphons any gas he can get from the remaining pump. you go find a hole to craawl through. it was difficult, but you squeeze into the building and inside you see that there is plenty of goood stuff in here. nobody must have thought to search here after this explosion. As you loot, everything seems safe, as the store is empty. All of a sudden, the seeling above you crumbles and falls. As the dust cleears, what you first think is a corps starts to move and you here a blood curdling moan. the body raises to its feet. you remain motionless and you see the hole you came through on the other side of the store. what do you do? What action shall you take? Attack, or attempt to sneak by the zombie? ").toLowerCase();


if (choice === "attack") {
  

  if (character.strength === 5) {
    

    window.alert("you grab a fallen brick and charge the creature with all your might! you slay that zombie! Success! You loot the store for goods and find a switchblade, a pack of batteries, and three cans of Beanie Weenies.");
    
//does my computer work yet???
    outcome = "win";
    
 
    character.strength++;
    
  
  } else if (character.strength <= 5) {
    window.alert("Sadly, your attack has little affect on the zombie. You stumble and fall as you try to turn and run, and you feel a sharp pain in your back. you managed to turn around and use your bare hands to dismember the creature until it stops moving. You then slide over to a nearby wall and lean against it. you know what has happened and you give up. on any other efforts you once had. you have no choice but to sit there and wait as you enivitably lose your mind and eventually turn....");
    
  
    outcome = "lose";
  }
}


if (choice === "sneak" || choice === "sneak by the zombie") {
  

  if (character.stealth === 5) {
    window.alert("You sneak by the zombie, you move ever so slowly  and you squeeze through that hole like the slimy politician you said you were.");
    

    outcome = "win";
  }
  

  if (character.stealth < 5) {
    

    window.alert("You try to slip by the zombie, but you accidentally stumble over a can of Beanie Weenies, alerting the zombie of your existence. It slowly turns its head and shuffles towards you.");
    
 
    if (character.strength === 5) {
      window.alert("Although you have alerted the zombie to your presence you are able to turn to attack and you crush its skull with your bare hands.");
      
 
      outcome = "win";
      
  
    } if (character.health === 7) {
      window.alert("Weaponless and weak the zombie chomps down on an arm as you flail wildly in its general direction. you scream for help and as soon as you do a shotgun blast blows the zombie away from you. Lloyd pulls you out from the hole. you tell him there are lots of supplies in there and you instruct him to go in and find alchohol and any sharp object he can find. he comes back with a switchblade and with your extensive medical knowledge you instruct him to amputate your arm. you dont remember much after that. you wake up to a cool morning breeze and, though you will be much weaker becuase of what happened, you made through the night without turning and you will live to see another day. ");
      

      outcome = "win";
    } else {
      window.alert("If you remember, you never told Lloyd that you had any of the 3 skills neccesary to survive. and it is a marvel he still took you along... you are not quiet enough and the zombie sees you and charges you. you dont even come close to the hole. you scream and Lloyd comes to save, but he can only stand and watch as the zombie eats your brains alive, becuase he knows there is no hope...");

      outcome ="lose";
    }
  }
}


if (outcome === "lose") {
  window.alert("You lose!");
} else if (outcome === "win") {
  window.alert("You win!");
}
