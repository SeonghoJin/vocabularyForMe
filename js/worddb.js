(function(window){
    function worddb(){
        this._dbName = 'words';
    }

    worddb.prototype.setWord = function(word,description){
        let _this = this;
        return new Promise(function(resolve, reject){
            _this.getWord()
            .then(function(result){
                let words = result || {};
                words[word] = description;
                localStorage.setItem(_this._dbName,JSON.stringify(words)); //localstorge가 비동기로 이루어져있다면 localStorage.setItem의 callback함수 파라미터에 resolve를 넣어줘야 한다.
                resolve();
            })
        })
    }

    worddb.prototype.getWord = function(){
        let _this = this;
        return new Promise(function(resolve, reject){
            resolve(JSON.parse(localStorage.getItem(_this._dbName))); //localstorge가 비동기로 이루어져있다면 localStorage.getItem의 callback함수 파라미터에 resolve를 넣어줘야 한다.
            //만약 async storage로 바꿀시 이 부분만 바꿔주면 된다
        })
    }

    worddb.prototype.getDescription = function(word){
        let _this = this;
        return new Promise(function(resolve, reject){
            _this.getWord().
            then(function(result){
                resolve(result[word]);
            })
        })
    }

    window.worddb = worddb;

})(window)
