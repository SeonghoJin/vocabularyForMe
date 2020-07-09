'use strict';


function excute(){

let html = document.body.innerHTML;

for(var word in words){
  html = highlights(html, word, words[word]);
}

document.body.innerHTML = html;
}