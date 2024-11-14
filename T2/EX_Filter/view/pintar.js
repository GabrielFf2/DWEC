function pintar(carTest) {
    document.querySelector("#result").innerHTML="";
    const ul = document.createElement("ul");
    for (let i = 0 ; i< carTest.length ; i++){
        const li = document.createElement("li");
        li.innerHTML=carTest[i].nom + " - " + carTest[i].cavalls;
        ul.appendChild(li);
    }
    document.querySelector("#result").appendChild(ul);
}