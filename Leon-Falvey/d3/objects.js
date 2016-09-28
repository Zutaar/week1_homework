console.log("My favourite recipe is:");

var somerecipe = {
  title: 'Jumbo Chocolate Cookies',
  servings: 12,
  ingredients: ['sugar','butter','chocolate',
                'vanilla essence','eggs', 'cocoa',
                'flour','baking soda', 'salt']
};

console.log(somerecipe.title);
console.log('serves '+somerecipe['servings']);
console.log("- Ingredients:")
for (var i=0;i<somerecipe['ingredients'].length;i++) {
  console.log("  - "+somerecipe.ingredients[i]);
}
console.log("\n");

console.log("My library of books include:");

function Book(title, author, alreadyRead) {
  this.title=title;
  this.author=author;
  this.alreadyRead=alreadyRead;
}

books = [new Book("ISSH","Er Gen",true),
          new Book("Magician","Raymond E. Feist",true),
          new Book("The Dragon Keeper","Robin Hobb",false),
          new Book("High Lord","Trudi Canavan",true)];

for (var i=0;i<books.length;i++) {
  console.log(books[i].title+" by "+books[i]['author']);
  if (books[i].alreadyRead) {
    console.log("You have already read \""+books[i].title)+
                "\" by "+books[i]['author']+".";
  } else {
    console.log("You still need to read \""+books[i].title)+
                "\" by "+books[i]['author']+"!";
  }
  console.log("\n");
}

console.log("My favourite movies are:");

function Movie(title, duration, stars) {
  this.title=title;
  this.duration=duration; // minutes
  this.stars=stars;
  this.getInfo = function() {
    return title+" lasts for "+duration+" minutes.\nStars: "+
            this.stars.join(", ")+".";
  }
  this.printInfo = function() {
    console.log(this.getInfo());
  };
}

var movies=[new Movie("K-ON!",1152,["Mio","Ritsu","Azusa","Tsumugi","Yui"]),
            new Movie("Fairy Tail",1152,["Natsu","Gray","Erza","Wendy","Lucy"]),
            new Movie("Steins;Gate",576,["Rintarou","Kurisu","Mayurii","Suzuha","Luka","Itaru"]),
            new Movie("Akame ga Kill",576,["Akame","Leone","Mine","Tatsumi","Esdeath"]),
            new Movie("Usagi Drop",264,["Daikichi","Rin","Nitani","Kouki"])];

for (var i=0;i<movies.length;i++) {
  movies[i].printInfo();
}
