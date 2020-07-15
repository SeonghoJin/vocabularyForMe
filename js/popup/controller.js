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
        console.log("clicked");
        _this.wdb.getWord()
        .then((result) =>{
            _this.view.render("showWordList", result);
        })
    }

    window.controller = controller;

})(window)