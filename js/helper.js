
window.$qs = function(target){
    return document.querySelector(target);
}

window.$on = function(target, type, callback, capture){
    target.addEventListner(type,callback,capture);
}