let app = document.querySelector("#app");

function init(){
    const remote = document.createElement("button")
    remote.innerHTML="REMOT"
    remote.addEventListener('click',function (){
        getPersonalCats().then(function (cats){
            pintarCats(cats);
        })
    })
    app.appendChild(remote);
    app.appendChild(result);


}



function pintarCats(cat){

}



