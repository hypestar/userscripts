// ==UserScript==

// @name        politiken.dk

// @namespace   www.bobyou.com

// @description Skjul ikke logget ind box på politiken.dk

// @version     1

// @grant       none

// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js

// @include http://politiken.dk/*

// @include https://politiken.dk/*

// ==/UserScript==

 

$(document).ready(runMonkey())

 

function runMonkey(){

    hideByClass("dit-politiken-container full-width");

    hideByClass("frontpage-zone esi-zone");

    blockAdblockBlocker();

}

 

 

 

function hideByClass (className){

    var divs = document.getElementsByClassName(className);

 

    for (var i = 0; i < divs.length; i ++) {  

       divs[i].style.display = 'none';  

    }

}

 

function blockAdblockBlocker(){

    var abbDiv = document.getElementsByClassName("modal--adblockblocker")[0];

    var unwantedDiv = abbDiv.parentNode.parentNode;

