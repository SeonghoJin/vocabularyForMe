
window.$qs = function(target){
    return document.querySelector(target);
}

window.$on = function(target, type, callback, capture){
    console.log(target, type, callback);
    target.addEventListener(type,callback,capture);
}