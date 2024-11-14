export function impr(listJson) {
    document.querySelector("#result").innerHTML = "";
    if (!listJson) return;
    if (Array.isArray(listJson)){
        listJson.forEach((element) => {
            console.log(element)
            const img = document.createElement("IMG");
            img.id = element.id;
            img.src = element.url;
            img.width = element.width;
            img.height = element.height;
            const p = document.createElement("p");
            const a = document.createElement("a");
            a.textContent = img.id.toString();
            document.querySelector("#result").appendChild(img);
            document.querySelector("#result").appendChild(a);
            document.querySelector("#result").appendChild(p);
        });
    }else {
        const img = document.createElement("IMG");
        img.id = listJson.id;
        img.src = listJson.url;
        img.width = listJson.width;
        img.height = listJson.height;
        console.log(img);
        document.querySelector("#result").appendChild(img);
    }

}
