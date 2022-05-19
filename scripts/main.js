let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let playbool = "false";
//console.log(speech);

document.querySelector("#speech1").addEventListener("click", () => {
  speech.text = document.querySelector("#speech1content").innerHTML;
  speech.rate = 7;
  //console.log(window.speechSynthesis.getVoices());
  playbool = !playbool;
  //console.log(playbool);
});

// setInterval(() => {
//   if (playbool) {
//     //console.log(speech);
//     window.speechSynthesis.speak(speech);
//   } else if (!playbool) {
//     window.speechSynthesis.cancel();
//   }
// }, 1000);
