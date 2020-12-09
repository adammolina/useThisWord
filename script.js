const myForm = document.getElementById("form");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  function theBadWord() {
    var userInput = document.getElementById("theWord").value;
    var realWord = userInput.toLowerCase();
    var badWordArr = ["fuck", "shit", "bitch", "cunt", "ass", "dick","dumbass" "dickhead", "pussy", "wanker", "fucker", "motherfucker", "dogshit", "asshole", "balls", "bullshit", "tits", "tit", "prick", "twat", "punani", "minge", "cock", "bastard", "nig", "nigga", "nigger", "spic", "fag", "faggot","horseshit"];

    if (badWordArr.includes(realWord)) {
      document.querySelector("h2").innerHTML = "You can't say that at work.";
    } else {
      document.querySelector("h2").innerHTML = "That's fine to say.";
    }
  }
  theBadWord();
})
