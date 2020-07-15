
window.$qs = function(target){
    return document.querySelector(target);
}

window.$on = function(target, type, callback, capture){
    target.addEventListener(type,callback,capture);
}

window.qsa = function (selector, scope) {
	return (scope || document).querySelectorAll(selector);
};
    
window.$delegate = function (target, selector, type, handler, useCapture) {

    function dispatchEvent(event) {
        console.log(1);
        var targetElement = event.target;
        var potentialElements = window.qsa(selector, target);
        var hasMatch = Array.prototype.indexOf.call(potentialElements, targetElement) >= 0;

        if (hasMatch) {
            handler.call(targetElement, event);
        }
    }
    
    window.$on(target, type, dispatchEvent, useCapture);
};

window.$parent = function (element, tagName) {
		if (!element.parentNode) {
			return;
		}
		if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {
			return element.parentNode;
		}
		return window.$parent(element.parentNode, tagName);
};