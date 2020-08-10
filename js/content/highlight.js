
function highlights(html,word,desc){
    var regex = new RegExp(`${word}`,'g');
    return html.replace(regex, `<span style="background-color : #ffaaaa" title="${desc}">${word}</span>`);
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
    }
    return nhtml;
}


function highlights3(html, words){  //ahocorasick사용

}