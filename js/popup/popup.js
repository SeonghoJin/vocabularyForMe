'use strict';

const db = new worddb();
const vue = new view();
const cnt = new controller(vue, db);
const connect = new connection();


let activeButton = $qs("#activation");

$on(activeButton,'click', function(){
    excute();
})

