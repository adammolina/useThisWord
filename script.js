function checkWord() {
    var input = document.getElementById("userInput");
    var badWords = ["fuck", "ass", "shit", "crap", "bloody", "git", "bullshit", "pissed", "bitch", "tit", "prick" "asshole", "twat", "pussy", "punani", "cock", "dick", "dickhead", "bastard", "motherfucker", "wanker", "cunt"]

    if (input.includes(badWords)) {
      alert("No can do.")
    } else {
      alert("You're good to go!")
    }



  }
