(function(window){

    function view(template){
        this.template = template;
        this.showListFlag = 0;
        this.word = $qs('#word');
        this.desc = $qs('#wordDescription');
        this.addbtn = $qs('#addbtn');
        this.showbtn = $qs('#showbtn');
        this.main = $qs('main');
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

    view.prototype.showWordList = function(words){
        let template = document.createElement('div');
        template.id = "wordList";
        template.innerHTML = this.template.wordListTemplate(words);
        this.main.appendChild(template);
    }

    view.prototype.removeWordList = function(){
        let list = $qs('#wordList');
        list.remove();
    }

    view.prototype.toggleWordList = function(words){
        if(!this.showListFlag)this.showWordList(words);
        else{this.removeWordList();}
        this.showListFlag = 1 - this.showListFlag;
    }
    view.prototype.removeWord = function(self){
        self.remove();
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
            },
            toggleWordList : function(){
                _this.toggleWordList(parameter);
            },
            removeWord : function(){
                _this.removeWord(parameter);
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
            ,
            toggleWordList : function(){
                $on(_this.showbtn, 'click', function(){
                    handler();
                }, 1)
            },
            removeWord : function(){
                $delegate(_this.main, '.remove', 'click', function(){
                    handler($parent(this,'li'),$parent(this, 'li').id);
                }, 1)
            }
        }
        events[event]();
    }

    window.view = view;

})(window)