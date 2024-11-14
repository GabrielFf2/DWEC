import {Cat} from "../models/cat.js";
import {URL_API_CAT} from "./config.js";
import {headers} from "./config.js";

export function uploadImage(image) {
    const url = `${URL_API_CAT}/upload/`;
    console.log(url);
    const file = new FormData();
    file.append("file", image);
    console.log(headers);
    return fetch(url, {
        method: "POST",
        body: file,
        headers: headers,
    })
        .then(function (result) {
            return result.json();
        })
        .then((result) => {
            return new Cat(result.id, null, result.url, result.width, result.height);
        })
        .catch(function (error) {
            console.log("Fail Post Image - error: ", error);
        });
}
