// ==UserScript==
// @name        startpage-title-changer
// @description Change the page title of Startpage search results to include the search terms.
// @description:ja Startpageの検索結果ページのタイトルを、検索用語を含むように変更します。
// @version     1.0.0
// @author      KOTO28
// @namespace   https://github.com/KOTO28
// @match       *://www.startpage.com/*/search*
// @grant       none
// @homepageURL https://github.com/KOTO28/startpage-title-changer/
// @downloadURL https://raw.githubusercontent.com/KOTO28/startpage-title-changer/main/startpage-title-changer.user.js
// ==/UserScript==

(function () {
	"use strict";

	// Get the search terms
	let searchWords = document.querySelector("#q").value;

	// Set the new title
	document.title = searchWords + " - Startpage";
})();
