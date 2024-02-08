(function(){
    'use strict';
    console.log('reading JS');

    const daScript = document.querySelector('#madlib');
    const daForm = document.querySelector('#daform');

    document.querySelector('#sendIt').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = "show";
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = "hidden";
    });

    daForm.addEventListener('submit', function(event){
        event.preventDefault();
        const food = document.querySelector('#food').value;
        const adj1 = document.querySelector('#adj1').value;
        const music = document.querySelector('music').value;
        const noun1 = document.querySelector('#noun1').value;
        const name = document.querySelector('#name').value;
        const adj2 = document.querySelector('#adj2').value;
        const noun2 = document.querySelector('#noun2').value;
        const verb = document.querySelector('#verb').value;

        let myText;

        if(food === ''){
            myText = "Please provide a solid food";
            document.querySelector('#food').focus();
        }

        else if(adj1 === ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj2').focus();
        }

        else if(music === ''){
            myText = "Please provide your favorite band";
            document.querySelector('#music').focus();
        }

        else if(noun1 === ''){
            myText = "Please provide a plural noun";
            document.querySelector('#noun1').focus();
        }

        else if(name === ''){
            myText = "Please provide a middle or nickname";
            document.querySelector('#name').focus();
        }

        else if(adj2 === ''){
            myText = "Please provide an adjective";
            document.querySelector('#adj2').focus();
        }

        else if(noun2 === ''){
            myText = "Please provide a noun(thing)";
            document.querySelector('#noun2').focus();
        }

        else if(verb === ''){
            myText = "Please provide a verb";
            document.querySelector('#verb').focus();
        }

        else{
            myText = (`I don’t like a lot of people or mostly humans because you’re all ${noun1}.

            But you’re even worse! You’re face looks like mashed ${food} and your smell is ${adj1}.
            
            You listen to ${music} which makes you a ${adj2} loser and makes you look like a ${noun2}.
            
            I’ve met another human named ${name} and they were awesome and way better at ${verb} than you are!
            
            DO BETTER, you wouldn’t survive on my planet, ${adj1}!`);
            document.querySelector('#food').value = '';
            document.querySelector('#adj1').value = '';
            document.querySelector('#music').value = '';
            document.querySelector('#noun1').value = '';
            document.querySelector('#name').value = '';
            document.querySelector('#adj2').value = '';
            document.querySelector('#noun2').value = '';
            document.querySelector('#verb').value = '';
        }

        daScript.innerHTML = (myText);
    });
})()