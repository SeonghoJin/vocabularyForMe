'use strict';

cnt; connect;
const code = 'document.body.innerHTML'
let html;
console.log("HI");
connect.excuteCode('document.body.innerHTML')
  .then(result => {
    html = result[0];
    return cnt.getWord();
  })
  .then(words => {
    for(let word in words){
      html = highlights(html, word, words[word]);
    }
    return connect.excuteCode(`document.body.innerHTML = ${html}`);
  })
  .then(() => {
    connect.excuteCode(`console.log("Succes")`);
  })


