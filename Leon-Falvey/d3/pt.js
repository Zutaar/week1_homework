var train = {
  alamein : ['Flinders Street','Richmond','East Richmond',
                  'Burnley','Hawthorn','Glenferrie'],
  glenWaverly : ['Flagstaff','Melbourne Central','Parliament',
                  'Richmond','Kooyong','Tooronga'],
  sandringham : ['Southern Cross','Richmond','South Yarra',
                  'Prahran', 'Windsor'],
};
var intersections = {
  'Richmond':['alamein', 'glenWaverly', 'sandringham']
};
var lines = ['alamein', 'glenWaverly', 'sandringham'];


var origin=prompt("Which station are you starting from?");//prompt("Enter your origin");

var destination=prompt("Where is your destination?");//prompt("Enter your destination");

var currentLine=-1; // the current line index
var pos=-1;
var posLine=-1;
var dest=-1;
var destLine=-1;
var nextStop=-1;

for (var i=0;i<lines.length;i++) {
  if (currentLine<train[lines[i]].indexOf(destination)) {
    dest=train[lines[i]].indexOf(destination);
    destLine=i;
  }
}
if (origin!=="Richmond") {
  for (var i=0;i<lines.length;i++) {
    if (currentLine<train[lines[i]].indexOf(origin)) {
      currentLine=i;
      //console.log("on " + lines[i]);
      pos=train[lines[i]].indexOf(origin);
      //console.log("at " + train[lines[i]][pos]);
    }
  }
} else {
  currentLine=destLine;
  pos=train[lines[currentLine]].indexOf(origin);
}

if (destLine===currentLine) {
  nextStop=train[lines[currentLine]].indexOf(destination);
} else {
  for (var i=0;i<train[lines[currentLine]].length;i++) {
    if (train[lines[currentLine]][i]==="Richmond") {
      nextStop=i;
    }
  }
}


var currentStation=origin; // name of current station. Initially set to origin.
var route = [origin]; // creates the route taken and starts off with origin.
var numStops = 0; //records number of stops taken

while (currentStation!==destination) {
   if (currentStation!==nextStop) {
    if (pos>nextStop) { // reverses array
      pos=train[lines[currentLine]].length-1-pos;
      nextStop=train[lines[currentLine]].length-1-nextStop;
      train[lines[currentLine]].reverse();
    }
    for (var i=1;i+pos<=nextStop;i++) {
      currentStation=train[lines[currentLine]][pos+i];
      // console.log(currentStation);
      route.push(currentStation);
      numStops++;
      if (currentStation==="Richmond" && currentLine!==destLine) {break;}
    }
  }
  //Changes line if necessary
  if (currentLine!==destLine) {
    pos = train[lines[destLine]].indexOf(currentStation);
    currentLine=destLine;
    nextStop=dest;
  }
}

console.log(route.join(" ---> "));
console.log(numStops + " stops total.")
