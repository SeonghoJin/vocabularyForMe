'use strict';

(function(window){

    function view(){
        this.word = $qs('#word');
        this.desc = $qs('#wordDescription');
    }

    view.prototype.clearWord = function(){
        this.word.value = "";
    }

    view.prototype.clearWordDescription= function(){
        this.desc.value = "";
    }

    view.prototype.clearInput = function(){
        this.clearWord();
        this.clearWordDescription();
    }
    
    view.prototype.checkWord = function(){
        if(this.word.value == "")return false;
        if(this.word.indexOf(" "))return false;
    }

    view.prototype.checkWordDescription = function(){
        if(this.desc.value == "")return false;
        if(this.desc.indexOf(" "))return false;
    }

    view.prototype.render = function(cmd, parameter){
        let _this = this;
        let cmds = {
            clearWord : function(){
                _this.clearWord();
            },
            clearWordDescription : function(){
                _this.clearWordDescription();
            },
            clearInput : function(){
                _this.clearInput();
            }
        }
        cmds[cmd]();
    }

    view.prototype.binding = function(event, handler){
        let _this = this;
        let events = {
            addWord : function(){
                if(_this.checkWord() && _this.checkWordDescription())handler(_this.word, _this.desc);
                _this.clearInput();
            }
        }
        events[event]();
    }
    window.view = view;
    
})(window)