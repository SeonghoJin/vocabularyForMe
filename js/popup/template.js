(function(){

    function template(){

    }

    template.prototype.wordListTemplate = function(words){

        function makeList(words){
            let template = '<ul>';
            for(var word in words){
                template += `<li>${word} : ${words[word]} <button class="remove">삭제</button></li>`
            }
            return template + '</ul>';
        }
        
        let list = makeList(words);

        return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
            </head>
            <body>
                ${list}
            </body>
        </html>
        `        
    }

    window.template = template;
})