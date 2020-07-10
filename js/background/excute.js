


function excute(){
   db.getWord()
    .then((words) => {
      return connect.excuteCode(`var words = ${JSON.stringify(words)}`);
    })
    .then(() => {
      return connect.excuteCode('excute()');
    })
}