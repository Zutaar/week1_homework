var train = {
  alamein : ['Flinders Street','Richmond','East Richmond',
                  'Burnley','Hawthorn','Glenferrie'],
  glenWaverly : ['Flagstaff','Melbourne Central','Parliament',
                  'Richmond','Kooyong','Tooronga'],
  sandringham : ['Southen Cross','Richmond','South Yarra',
                  'Prahran', 'Windsor'],
  'Richmond' : [1,3,1]
};
var intersections = {
  'Richmond':['alamein', 'glenWaverly', 'sandringham']
};
var lines = ['alamein', 'glenWaverly', 'sandringham'];

var origin="Flinders Street";//prompt("Enter your origin");
var destination="Burnley";//prompt("Enter your destination");

var currentLine=-1; // the current line index
var pos=-1;
var posLine=-1;
var dest=-1;
var destLine=-1;


for (var i=0;i<lines.length;i++) {
  if (currentLine<train[lines[i]].indexOf(origin)) {
    currentLine=i;
    //console.log("on " + lines[i]);
    pos=train[lines[i]].indexOf(origin);
    //console.log("at " + train[lines[i]][pos]);
    dest=train[lines[i]].indexOf(destination);
    //console.log("to " + train[lines[i]][dest]);
  }
}





if (pos>dest) {
  pos=train[lines[currentLine]].length-1-pos;
  dest=train[lines[currentLine]].length-1-dest;
  train[lines[currentLine]].reverse();
}
var route = [origin];
var numStops = 0;
for (var i=1;i+pos<=dest;i++) {
  route.push(train[lines[currentLine]][pos+i]);
  numStops++;
}
console.log(route.join(" ---> "));
console.log(numStops + " stops total.")
