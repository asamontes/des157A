(function(){
    'use strict';
    console.log('reading JS');

    const daScript = document.querySelector('#madlib');
    const daForm = document.querySelector('form');
    const formData = document.querySelectorAll("input[type=text]");

    document.querySelector('#sendIt').addEventListener('submit', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = "show";
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className = "hidden";
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.querySelector('#overlay').className = "hidden";
        }
    });

    daForm.addEventListener('submit', function (event) {
        event.preventDefault();
        document.querySelector('#overlay').className = "show";
        processFormData(formData);
    });
    
    function processFormData(formData){
        const words = [];
        let emptyfields = [];
        let counter = 0;

        for (const eachWord of formData){
            if (eachWord.value){
                words.push(eachWord.value);
            } else{
                emptyfields.push(counter);
            }
            counter++;
        }
        if (emptyfields.length>0){
            showErrors(formData, emptyfields);
        } else {
            makeMadLib(words);
        }
    }

    function showErrors(formData, emptyfields){
        const errorId= formData[emptyfields[0]].id;
        const errorText = `Please fill out this field: ${errorId}`;
        madlib.innerHTML = errorText;
        document.querySelector(`#${errorId}`).focus();
    }

    function makeMadLib(words){
        document.querySelector('#overlay').className = 'show';

        const myText = `I don’t like a lot of people or mostly humans because you’re all ${words[1]}. But you’re even worse! You’re face looks like mashed ${words[0]} and your smell is ${words[3]}. You listen to ${words[2]} which makes you a ${words[5]} loser and makes you look like a ${words[6]}. I’ve met another human named ${words[4]} and they were awesome and way better at ${words[7]} than you are! DO BETTER, you wouldn’t survive on my planet, ${words[1]}!`;

        madlib.innerHTML = myText;
        for (const eachField of formData){
            eachField.value = '';
        }
    }
})();