(function(){
    'use strict';
    console.log('reading JS');

    document.querySelector('pickme').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay1').className = "show";
    });
})()