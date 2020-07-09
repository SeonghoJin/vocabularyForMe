
function highlights(html,word,desc){
    var regex = new RegExp(`${word}`,'g');
    return html.replace(regex, `<span style="background-color : #ffaaaa" title="${desc}">${word}</span>`);
}



function highlights_version2(html,word,desc){
    const stack = new Stack();
}