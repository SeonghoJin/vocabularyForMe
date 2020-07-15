
window.$qs = function(target){
    return document.querySelector(target);
}

window.$on = function(target, type, callback, capture){
    target.addEventListener(type,callback,capture);
}

window.qsa = function (selector, scope) {
	return (scope || document).querySelectorAll(selector);
};
    
window.$delegate = function (target, selector, type, handler) {

    function dispatchEvent(event) {
        var targetElement = event.target;
        var potentialElements = window.qsa(selector, target);
        var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

        if (hasMatch) {
            handler.call(targetElement, event);
        }
    }

    var useCapture = type === 'blur' || type === 'focus';

    window.$on(target, type, dispatchEvent, useCapture);
};