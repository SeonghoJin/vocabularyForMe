function excute(){
  /*
  let html = document.body.innerHTML;

  for(var word in words){
    html = highlights2(html, word, words[word]);
  }

  document.body.innerHTML = html;
  */

 var instance = new Mark(document.querySelector("html"));
 var Words = [];
 
 for(var word in words){
    Words.push(word);
 }

 Words = Words.join(' ');
 instance.mark(Words, {
    "element": "span",
    "className": "highlights"
 });
 
}