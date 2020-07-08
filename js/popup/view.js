'use strict';

(function(window){

    function view(){
        this.word = $qs('#word');
        this.desc = $qs('#wordDescription');
        this.addbtn = $qs('#addbtn');
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
        if(this.word.value.indexOf(" ") != -1)return false;
        return true;
    }

    view.prototype.checkWordDescription = function(){
        if(this.desc.value == "")return false;
        if(this.desc.value.indexOf(" ") != -1)return false;
        return true;
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
                $on(_this.addbtn,'click', function(){
                    handler(_this.word.value, _this.desc.value)
                });
            }
        }
        events[event]();
    }

    window.view = view;

})(window)