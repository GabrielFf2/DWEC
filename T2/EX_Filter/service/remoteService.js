function getRemoteCars(){
    const url = "https://raw.githubusercontent.com/vega/vega/refs/heads/main/docs/data/cars.json";
    return fetch(url)
        .then(function (resposta){
            return resposta.json();
        })
        .then(function (cotxes) {
            return cotxes.map(function (cotxe){
                const date = new Date(cotxe)
                return new Cotxe(cotxe.Name,cotxe.Horsepower,date.getFullYear())
            })
        })
}


