(function(window){

    function template(){

    }

    template.prototype.wordListTemplate = function(words){

        function makeList(words){
            let template = "";
            for(var word in words){
                template += `<li id="${word}">${word} : ${words[word]} <button class="remove">삭제</button></li>`
            }
            return template;
        }
        
        let list = makeList(words);
        return `<ul>${list}</ul>`
    }

    window.template = template;
})(window)