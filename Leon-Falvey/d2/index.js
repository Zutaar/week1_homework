var name = prompt("Please enter your name so that we can evaluate your life.");

console.log("Greetings" + name+ ", I hope you will enjoy your remaining life here.");

for (var i=1; i<=10;i++) {
  for (var j=1; j<=10;j++) {
    console.log((i+"*"+j)+"="+(i*j));
  }
}

var choice = prompt("On the menu tonight: steak, fruit salad, tofurkey, pork chops. Pick one for your meal.");

while (choice!=="steak"||choice!=="fruit salad"||choice!=="tofurkey"||choice!=="pork chops") {
  if (choice==="fruit salad"||choice==="tofurkey") {
    console.log("This cuisine is vegan friendly.");
    break;
  } else if (choice==="steak"||choice=="pork chops"){
    console.log("Vegans Beware!");
    break;
  } else {
    choice = prompt("I do not recognise that. Please choose from: steak, fruit salad, tofurkey, pork chops.");
  }
}
