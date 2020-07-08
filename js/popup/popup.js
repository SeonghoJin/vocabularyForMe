'use strict';

const db = new worddb();
const word = $qs('#word');
const desciption = $qs('#wordDescription');


console.log(word, desciption);
console.log(db.getWord());