(function(window){

    function template(){

    }

    template.prototype.wordListTemplate = function(words){

        function makeList(words){
            let template = "";
            for(var word in words){
                template += `<li class="list-group-item list-group-item-action" id="${word}">${word} : ${words[word]} <button class="remove btn btn-outline-danger" >삭제</button></li>`

            }
            return template;
        }
        
        let list = makeList(words);
        return `<ul class="list-group">${list}</ul>`
    }

    window.template = template;
})(window)