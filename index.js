function shout(string) {
  return string.toUpperCase();
}
function whisper(string) {
  return string.toLowerCase();
}
function logShout(string) {
  var Shout = string.toUpperCase();
  console.log(Shout);
}
function logWhisper(string) {
  var Whisper = string.toLowerCase();
  console.log(Whisper);
}
function sayHiToGrandma(string) {
<<<<<<< HEAD
  var GrandmaWhisper = string
  var GrandmaShout = string
  if (GrandmaWhisper.toLowerCase() === GrandmaWhisper) {
    return "I can't hear you!";
  }else if (GrandmaShout.toUpperCase() === GrandmaShout) {
=======
  var GrandmaWhisper = "lowercase";
  var GrandmaShout = "UPPERCASE";
  if (string.toLowerCase() === GrandmaWhisper) {
    return "I can't hear you!";
  }else if (string.toUpperCase() === GrandmaShout) {
>>>>>>> db00009edb3e107f1fc8a196a3efb20dd0151796
    return "YES INDEED!";
  }else {
    return "I love you, too.";
  }
}