import {Aeroport} from "../model/Aeroport.js";
export async function getAllAirports(){
    const urlAirports = "https://theteacher.codiblau.com/public/exercicis/airports";
    const respons = await fetch(urlAirports);
    const data = await respons.json();
    return data.map(x=> new Aeroport(x.code,x.name,x.lat,x.lon,x.city));
 }
export function cercaAeroports(aeroports,valor){
    const resultat = aeroports.filter(a=>{
        const valorUpper = valor.toUpperCase();
        const hasCodi = a.codi.toUpperCase().includes(valorUpper);
        const haNom = a.nom.toUpperCase().includes(valorUpper);
        const hasLatitud = a.latitud.toUpperCase().includes(valorUpper);
        const hasLongitud = a.longitud.toUpperCase().includes(valorUpper);
        const hasCiutat = a.ciutat.toUpperCase().includes(valorUpper);

        return hasCodi || haNom || hasLatitud || hasLongitud || hasCiutat ;
    })
    return resultat;
}


