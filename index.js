function shout(string){
  return string.toUpperCase();
}
console.log(shout("hello"));

function whisper(string){
  return string.toLowerCase();
}
console.log(whisper("HELLO"));

function logShout(string) {
 console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper("HELLO");

function sayHiToGrandma(string) {
  if (string===string.toLowerCase()) {
    return "I can't hear you!";
  }
  else if (string==="I love you, Grandma.") {
    return "I love you, too.";
  }
  else if (string===string.toUpperCase()){
    return "YES INDEED!";
}
}


