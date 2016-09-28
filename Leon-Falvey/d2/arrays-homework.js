var topChoicesAnime = ["Steins;Gate", "K-ON!", "Usagi Drop",
                    "Full Metal Alchemist: Brotherhood",
                    "Nanatsu no Taizai", "Mahouka Koukou no Rettousei",
                    "Ore no Imouto ga Konnani Kawaii Wake ga Nai",
                    "Shokugeki no Souma","Seitokai Yakuindomo",
                    "One Punch Man", "Yu-Gi-Oh!", "Rurouni Kenshin",
                    "Fairy Tail", "Kill la Kill!",
                    "A Certain Magical Index", "A Certain Scientific Railgun",
                    "A Channel","Akatsuki no Yona","Akame ga Kill!",
                    "Black Cat", "Bleach", "Kokoro Connect",
                    "Non Non Biyori", "My HIME", "Naruto"];

var checkPlace = function(place) {
  if ((place%10===1)&&(place!==11)) {
    return "st";
  } else if ((place%10===2)&&(place!==12)) {
    return "nd";
  } else if ((place%10===3)&&(place!==13)) {
    return "rd";
  }
  return "th";
}

for (var i=0; i<topChoicesAnime.length;i++) {
  var msg = "My "+(i+1)+checkPlace(i+1)+" choice is "+topChoicesAnime[i]+".";
  console.log(msg);
}
