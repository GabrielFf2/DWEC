import {cercaAeroports,getAllAirports} from "../service/dadesAirport.js";

async function init(){
    const aeroports = await getAllAirports();
    const title = document.createElement("h1");
    title.innerHTML="Cercador d'aeroports";

    const cercador = document.createElement("input");
    cercador.placeholder="PMI";
    cercador.addEventListener('input', function (){
        const resultat = cercaAeroports(aeroports,this.value);
        // document.querySelector("#result").innerHTML = resultat.map(r=> `${r.codi}    ${r.nom}    ${r.latitud}    ${r.longitud}    ${r.ciutat}`).join("<br>")
        const resultElement = document.querySelector("#result");
        resultElement.innerHTML = `
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Latitud</th>
                        <th>Longitud</th>
                        <th>Ciudad</th>
                    </tr>
                </thead>
                <tbody>
                    ${resultat.map(r => `
                        <tr>
                            <td>${r.codi}</td>
                            <td>${r.nom}</td>
                            <td>${r.latitud}</td>
                            <td>${r.longitud}</td>
                            <td>${r.ciutat}</td>
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        `;
    })
    const resultats = document.createElement("div");
    resultats.id="result";


    document.querySelector("#app").appendChild(title);
    document.querySelector("#app").appendChild(cercador);
    document.querySelector("#app").appendChild(resultats);
}



await init();