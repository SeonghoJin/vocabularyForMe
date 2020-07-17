function excute(){

  let html = document.body.innerHTML;

  for(var word in words){
    html = highlights2(html, word, words[word]);
  }

  document.body.innerHTML = html;
}