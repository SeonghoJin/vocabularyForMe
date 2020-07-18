(function(window){
    
    function controller(view, wdb){
        this.view = view;
        this.wdb = wdb;
        let _this = this;

        this.view.binding('addWord', function(word,desc){
            _this.addWord(word,desc);
        });

        this.view.binding('toggleWordList', function(){
            _this.toggleWordList();
        })

        this.view.binding('removeWord', function(self,word){
            _this.removeWord(self, word);
        })
    }

    controller.prototype.addWord = function(word, desc){
        let _this = this;
        if(!_this.checkWord(word) || !_this.checkDescription(desc))return;
        this.wdb.setWord(word, desc)
            .then(() => {
                _this.view.render('clearInput');
            })
        
    }

    controller.prototype.checkWord = function(word){
        if(word == "")return false;
        if(word.indexOf(" ") != -1)return false;
        if(word.indexOf("<") != -1 || word.indexOf("<") != -1)return false;
        return true;
    }

    controller.prototype.checkDescription = function(desc){
        if(desc == "")return false;
        if(desc.indexOf("<") != -1 || desc.indexOf("<") != -1)return false;
        return true;
    }

    controller.prototype.getWord = function(){
        let _this = this;
        return _this.wdb.getWord();
    }

    controller.prototype.toggleWordList = function(){
        let _this = this;
        _this.wdb.getWord()
        .then((result) =>{
            _this.view.render("toggleWordList", result);
        })
    }

    controller.prototype.removeWord = function(self, word){
        let _this = this;
        _this.wdb.removeWord(word)
        .then(() => {
            _this.view.render("removeWord", self);
        })
    }

    window.controller = controller;

})(window)