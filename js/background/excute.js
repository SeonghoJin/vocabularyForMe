function excute(){
   db.getWord()
    .then((words) => {
      return connect.excuteCode(`let words = ${JSON.stringify(words)}`);
    })
    .then(() => {
      return connect.excuteCode('excute()');
    })
}