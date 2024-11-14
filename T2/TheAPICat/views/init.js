import {getRandom} from "../services/remoteGet.js";
import {uploadImage} from "../services/remotePost.js";
import {impr} from "./impr.js";
import {getRemotePersonal} from "../services/remoteGet.js";
import {deleteCat} from "../services/delete.js";

export function init() {
    let currentPagePersonal = 1;
    const limit = 10;

    const getButton = document.createElement("button");
    getButton.textContent = "GetImageRandom";
    getButton.addEventListener("click", function () {
        getRandom(10).then(function (list) {
            impr(list);
        });
    });

    const getButtonPersonal = document.createElement("button");
    getButtonPersonal.textContent = "GetImagePersonal";
    getButtonPersonal.addEventListener("click", function () {
        fetchPersonalImages(currentPagePersonal);
    });

    const PostInputPersonal = document.createElement("input");
    PostInputPersonal.type = "file";
    PostInputPersonal.name = "ImageCat";
    PostInputPersonal.id = "imagePost";

    const PostButtonPersonal = document.createElement("button");
    PostButtonPersonal.textContent = "PostButtonPersonal";
    PostButtonPersonal.addEventListener("click", function () {
        const imgFileInput = document.querySelector("#imagePost");
        const imgFile = imgFileInput.files[0];
        if (imgFile) {
            uploadImage(imgFile).then(function (list) {
                impr(list);
            });
        }
    });

    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Enter Cat ID";
    inputText.id = "catIdInput";

    const deleteButtonPersonal = document.createElement("button");
    deleteButtonPersonal.textContent = "Delete";
    deleteButtonPersonal.addEventListener("click", function () {
        const catId = document.querySelector("#catIdInput").value;
        if (catId) {
            deleteCat(catId).then(function (result) {
                fetchPersonalImages(currentPagePersonal);
            });
        }
    });


    const prevButtonPersonal = document.createElement("button");
    prevButtonPersonal.textContent = "Back";
    prevButtonPersonal.disabled = currentPagePersonal === 1;
    prevButtonPersonal.addEventListener("click", function () {
        if (currentPagePersonal > 1) {
            currentPagePersonal--;
            fetchPersonalImages(currentPagePersonal);
            prevButtonPersonal.disabled = currentPagePersonal === 1;
        }
    });

    const nextButtonPersonal = document.createElement("button");
    nextButtonPersonal.textContent = "Next";
    nextButtonPersonal.addEventListener("click", function () {
        currentPagePersonal++;
        fetchPersonalImages(currentPagePersonal);
        prevButtonPersonal.disabled = false;
    });

    const result = document.createElement("div");
    result.id = "result";

    function fetchPersonalImages(page) {
        getRemotePersonal(limit, page).then(function (list) {
            impr(list);
        });
    }

    document.querySelector("body").appendChild(getButton);
    document.querySelector("body").appendChild(getButtonPersonal);
    document.querySelector("body").appendChild(PostInputPersonal);
    document.querySelector("body").appendChild(PostButtonPersonal);
    document.querySelector("body").appendChild(inputText);
    document.querySelector("body").appendChild(deleteButtonPersonal);
    document.querySelector("body").appendChild(prevButtonPersonal);
    document.querySelector("body").appendChild(nextButtonPersonal);
    document.querySelector("body").appendChild(result);


}