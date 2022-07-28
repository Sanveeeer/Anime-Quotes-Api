const quoteText = document.querySelector(".quote"),
animeName = document.querySelector(".anime .anime-title"),
characterName = document.querySelector(".character .character-name"),
textToSpeech = document.querySelector(".sound"),
copyQuote = document.querySelector(".copy"),
newQuote = document.querySelector("button");

function randomQuote(){
   
    newQuote.classList.add("loading");
    newQuote.innerText = "Loading Quote...";

    fetch('https://animechan.vercel.app/api/random')
    .then(res => res.json())
    .then(result => { 
        quoteText.innerText = result.quote;
        animeName.innerText = result.anime;
        characterName.innerText = result.character;
        newQuote.innerText = "New Quote";
        newQuote.classList.remove("loading");
    });
   
}

textToSpeech.addEventListener("click", ()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText}`);
    speechSynthesis.speak(utterance);
});

copyQuote.addEventListener("click", ()=>{
    navigator.clipboard.writeText(quoteText.innerText);
});


newQuote.addEventListener("click", randomQuote);


