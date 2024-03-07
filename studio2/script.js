(function(){
    'use strict';
    console.log('reading JS');
    
    document.querySelector('#a1').addEventListener('mousedown', function(event){
        event.preventDefault();
        document.querySelector('#overlay1').className = "show";
    });

    document.querySelector('#a2').addEventListener('mousedown', function(event){
        event.preventDefault();
        document.querySelector('#overlay2').className = "show";
    });

    document.querySelector('#a3').addEventListener('mousedown', function(event){
        event.preventDefault();
        document.querySelector('#overlay3').className = "show";
    });

    document.querySelector('#a4').addEventListener('mousedown', function(event){
        event.preventDefault();
        document.querySelector('#overlay4').className = "show";
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.querySelector('#overlay1').className = "hidden";
        }
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.querySelector('#overlay2').className = "hidden";
        }
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.querySelector('#overlay3').className = "hidden";
        }
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.querySelector('#overlay4').className = "hidden";
        }
    });

    const container = document.querySelector('#container');
    const hotSpot = document.querySelectorAll('#container div');
    const theImg = document.querySelector('div img');

    hotSpot.forEach(function(eachSpot){
        eachSpot.addEventListener('mouseover', zoomPhoto);
        eachSpot.addEventListener('mouseout', function(){
            theImg.className = 'start';
        });
    });

    function zoomPhoto(event){
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner){
            case 'counter': theImg.className = 'counter'; break;
        }; 
    };

    const slide = document.querySelector('#myimage');
    const images =['counter1.jpg', 'fishtank.jpg', 'counter2.jpg']
    let currentImage = 0;

    document.querySelector(thisCorner).addEventListener('click', nextPhoto);

    function nextPhoto(){
        currentImage++;
        if(currentImage > images.length - 1){
            currentImage = 0;
        }
        slide.src = `images/${images[currentImage]}`;
    };

})();