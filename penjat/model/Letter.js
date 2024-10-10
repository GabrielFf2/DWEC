function Letter(letter) {
    this.letter = letter;
    this.stat = undefined;
}

function createWord(word){
    let list=[];
    word.split("").forEach((element)=> {
        list.push(new Letter(element));
    })
    return list;
}