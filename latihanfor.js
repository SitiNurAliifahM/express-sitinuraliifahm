for (let z = 0; z < 5; z++) {
  console.log("data ke - " + z);
}

var string = "Hello";
var kebalik = "";
for (let i = string.length; i >= 0; i--) {
    kebalik += string.charAt(i);
}
console.log(kebalik);