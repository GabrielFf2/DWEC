function printLeter(word){
    const dom = document.querySelector(#letter);
    word.forEach(leter => {
        const createLetter = document.createElement("<button>")
        createLetter.textContent = leter.letter;
        createLetter.className += "leter-box"

        dom.appendChild(createLetter);
    })
}