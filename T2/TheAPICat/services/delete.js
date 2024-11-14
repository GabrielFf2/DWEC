import {URL_API_CAT} from "./config.js";
import {headers} from "./config.js";


export function deleteCat(catId) {
    const url = `${URL_API_CAT}/${catId}`;
    console.log("Deleting cat with ID:", catId);

    return fetch(url, {
        method: "DELETE",
        headers: headers,
    })
        .then((response) => {
            if (response.ok) {
                console.log("Cat deleted successfully");
                return true;
            } else {
                console.log("Failed to delete cat");
                return false;
            }
        })
        .catch((error) => {
            console.log("Error deleting cat:", error);
        });
}
