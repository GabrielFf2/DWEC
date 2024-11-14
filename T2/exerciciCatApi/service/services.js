const BASE_URL = `https://api.thecatapi.com/v1`;

function getPersonalCats(numCats=5){
    const url =BASE_URL+ `/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=${numCats}`;
    return fetch(url,requestOptions)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.map(function(imageData) {
                return new Moix(imageData.id , imageData.url , "undifined")
            });
        })
        .catch(function(error) {
            console.log(error);
        });
}
