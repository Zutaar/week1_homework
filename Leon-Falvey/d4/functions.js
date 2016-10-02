function  calculateAge(birthDate, targetDate) {

// your code here.
  if (birthDate<targetDate) {
    return "You are " + (targetDate-birthDate) + " year(s) old.";
  } else if (birthDate===targetDate) {
    return "You were born this very year!";
  }
  return "You will be born in " + (birthDate-targetDate) + " year(s)."
}

function sumMul(n,m) {
  if (n<=0||m<=0) {
    return "INVALID";
  }
  var total=0;
  for (var i=n;i<m;i+=n) {
    total+=i;
  }
  return total;
}
