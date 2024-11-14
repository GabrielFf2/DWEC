import {requestOptionsGet} from "./config.js";
import {Cat} from "../models/cat.js";


export function getRemotePersonal(limit = 10 , page = 1) {
  const url = `https://api.thecatapi.com/v1/images/?limit=${limit}&page=${page}`;
  return fetch(url, requestOptionsGet)
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      return result.map((x) => new Cat(x.id, null, x.url, x.width, x.height));
    })
    .catch(function (error) {
      console.log(error);
    });
}
export function getRandom(limit = 10) {
  const url = `https://api.thecatapi.com/v1/images/search?limit=${limit}`;
  return fetch(url, requestOptionsGet)
    .then(function (result) {
      return result.json();
    })
    .then(function (result) {
      return result.map((x) => new Cat(x.id, null, x.url, x.width, x.height));
    })
    .catch(function (error) {
      console.log(error);
    });
}
