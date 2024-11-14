let app = document.querySelector("#app");

function init(){

    const local = document.createElement("button")
    local.innerHTML="LOCAL"
    local.addEventListener('click',function (){
        const cotxes = getLocalCars();
        const cotxespocapotencia = cerca(cotxes , 100,150);

        pintar(cotxespocapotencia);
    })

    const remote = document.createElement("button")
    remote.innerHTML="REMOT"
    remote.addEventListener('click',function (){
        getRemoteCars().then(function (result){
            const cotxepp = cerca(result , 0,99);
            pintar(cotxepp);
        })
    })


    const result = document.createElement("div");
    result.id="result";

    app.appendChild(local);
    app.appendChild(remote);
    app.appendChild(result);


}







