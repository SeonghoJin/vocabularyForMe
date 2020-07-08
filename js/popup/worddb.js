'use strict';

module.exports = worddb;

function worddb(){
    this._dbName = 'words';
}

worddb.prototype.setWord = function(word,description){
    let words = this.getWord() || {};
    words[word] = description;
    localStorage.setItem(this._dbName,JSON.stringify(words));
}

worddb.prototype.getWord = function(){
    return JSON.parse(localStorage.getItem(this._dbName));
}

worddb.prototype.getDescription = function(word){
    return this.getWord()[word];
}
