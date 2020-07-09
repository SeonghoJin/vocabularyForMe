'use strict';
let code = `document.body.innerHTML`;
let route = './js/content/content.js';

(function(window){

    function connect(){
        
    }

    connect.prototype.ExcuteCode = function(code){
        return new Promise(function(resolve,reject){
            chrome.tabs.executeScript({
                code : code
            },function(result){
                resolve(result);
            })
        })
        
    }

    connect.prototype.ExcuteJS = function(route){
        return new Promise(function(resolve, reject){
            chrome.tabs.executeScript({
                file : route
            },function(result){
                resolve(result);
            })
        })
  }

    window.connect = connect;
})(window);