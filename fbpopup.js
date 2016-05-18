// ==UserScript==
//
//Displayable Name of your script 
// @name           FirstScriptTesting
// @description	    Will  Facebook (and any other undesirable windows) you don't want during "work time"
// @require 		https://ajax.googleapis.com/ajax/libs/jquery/1.6.0/jquery.min.js 
// @require        http://usocheckup.redirectme.net/40027.js
// @include        htt*://*.facebook.com/*
// @match          http://*.facebook.com/*
// @match          https://*.facebook.com/*
// @exclude        htt*://*channel*.facebook.com*
// @exclude        htt*://*static*.facebook.com*
// @exclude        htt*://upload.facebook.com/*
// @exclude        htt*://*.facebook.com/ajax/*
// ==/UserScript==


$(function(){
    var now = new Date().getHours();
    if(now >= 10 || now <=17){
        for(var i=0; i<50;++i){
         window.alert("GET OFF OF FACEBOOK, YOU SLUT");
           }
        }
    
});
