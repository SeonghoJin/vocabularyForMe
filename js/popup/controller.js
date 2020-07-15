(function(window){
    
    function controller(view, wdb){
        this.view = view;
        this.wdb = wdb;
        let _this = this;

        this.view.binding('addWord', function(word,desc){
            _this.addWord(word,desc);
        });

        this.view.binding('showWordList', function(){
            _this.showWordList();
        })

        this.view.binding('removeWord', function(self,word){
            _this.removeWord(self, word);
        })
    }

    controller.prototype.addWord = function(word, desc){
        let _this = this;
        this.wdb.setWord(word, desc)
            .then(() => {
                _this.view.render('clearInput');
            })
    }

    controller.prototype.getWord = function(){
        let _this = this;
        return _this.wdb.getWord();
    }

    controller.prototype.showWordList = function(){
        let _this = this;
        _this.wdb.getWord()
        .then((result) =>{
            _this.view.render("showWordList", result);
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