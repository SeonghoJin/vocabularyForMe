class Stack {
  constructor() {
    this._arr = [];
  }
  push(item) {
    this._arr.push(item);
  }
  pop() {
    return this._arr.pop();
  }
  peek() {
    return this._arr[this._arr.length - 1];
  }
  empty(){
    if(this._arr.length == 0)return true;
    return false;
  }
}

function getPi(word){
    let pi = Array.apply(null, new Array(word.length)).map(Number.prototype.valueOf,0);
    let j = 0;

    for(let i = 1; i < word.length; i++){
        while(j > 0 && word[i] != word[j]){
            j = pi[j-1];
        }

        if(word[i] == word[j]){
            pi[i] = ++j;
        }
    }

    return pi;
}

function kmp(html, word){
    let hlen = html.length;
    let wlen = word.length;
    let pi = getPi(word);

    let j = 0;
    let answer = [];
    for(let i = 0; i < hlen; i++){
        
        while(j > 0 && html[i] != word[j]){
            j = pi[j-1];
        }

        if(html[i] == word[j]){
            if(j == wlen-1){
                answer.push(i-j);
                j = pi[j];
            }            
            else{
                j++;
            }
        }
    }

    return answer;
}

function highlights2(html,word,desc){  //kmp사용
    const stack = new Stack();
    let nhtml = "";

    let firstindexs = kmp(html,word);

    let hlen = html.length;
    let wlen = word.length;
    let changeCode = `<span style="background-color : #ffaaaa" title="${desc}">${word}</span>`
    let cur = 0;
    console.log(firstindexs);
    for(let i = 0; i < hlen; i++){
        if(firstindexs[cur] == i){
            cur++;
            if(stack.empty()){
                nhtml += changeCode;
                i += wlen-1;
            }
            else{
                nhtml += html[i];
            }
        }
        else{
            nhtml += html[i];
            if(html[i] == '<'){
                stack.push('<');
            }
            else if(html[i] == '>'){
                stack.pop();
            }
        }
        console.log(i, stack.empty());
    }
    return nhtml;
}
