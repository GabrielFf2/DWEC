export const API_KEY = "live_4cIXWRVYNKdnLDjw48tuPuyBMXYPW1QXQ0caBOguQtiNoF4JhZ4Ox2R9p5OxuRK2";
// const API_KEY_DOG =
//   "live_9vJlJuZ1izrLzjmaUSlS6Jt9dBdhXX80gVxqUvP8ggWvOOaQPsXh68Ue7GAZbeoH";

export const URL_API_CAT = "https://api.thecatapi.com/v1/images";
// export const URL_API_DOG = "https://api.thedogapi.com/v1/images";
export const headers = new Headers({
  "x-api-key": API_KEY,
});

export const requestOptionsGet = {
  method: "GET",
  headers: headers,
};
