// ==UserScript==
// @name         Rule34 Fitscreen
// @namespace    http://tampermonkey.net/
// @version      2026-03-25
// @description  try to take over the world!
// @author       You
// @match        https://rule34.xxx/index.php?page=post&s=view&id=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=rule34.xxx
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    let video = document.getElementById("gelcomVideoContainer")
    let image = document.getElementById("image")

    video.style.maxHeight = "75vh"
    video.style.height = "auto"
    video.style.width = "auto"

    image.style.maxHeight = "75vh"
    image.style.height = "auto"
    image.style.width = "auto"
})();