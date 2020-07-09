'use strict';


function excute(){
  connect.excuteFile("./js/content/highlight.js")
    .then(() => {
      return cnt.getWord();
    })
    .then((words) => {
      return connect.excuteCode(`let words = ${JSON.stringify(words)}`);
    })
    .then(() => { 
      return connect.excuteFile('./js/content/excute.js');
    })
}
