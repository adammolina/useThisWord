const myForm = document.getElementById("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  function theBadWord() {
    var userInput = document.getElementById("theWord").value;
    var realWord = userInput.toLowerCase();
    var badWordArr = ["fuck", "shit", "bitch", "cunt", "ass", "dick", "dickhead", "pussy", "wanker", "fucker", "motherfucker", "dogshit", "balls", "bullshit", "tits", "tit", "prick", "twat", "punani", "minge", "cock", "bastard", "nig", "nigga", "nigger", "spic", "fag", "faggot", "horseshit"];

    if (badWordArr.includes(realWord)) {
      document.querySelector("h2").innerHTML = "You can't say that at work. <br><br>Dumbass.";
    } else {
      document.querySelector("h2").innerHTML = "That's fine to say.";
    }
  }
  theBadWord();
})
