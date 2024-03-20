(function(){
    'use strict';
    console.log('reading JS');

    const startGame = document.querySelector('#tellme');
    const userRoll = document.querySelector('totalNum');
    const color = {color1:'red', color2:'green', color3:'blue', color4:'purple'};
    const buttons = {button1:'circle', button2:'triangle', button3:'star', button4:'square'};
    const city = {city1:'tokyo', city2:'taipei', city3:'shanghai', city4:'sonsonate'};
    const firstRoll = document.querySelector('#numRoll');

    const fortune = document.querySelector('#urFortune');
    const openEr = new Audio('sounds/opening.mp3');
    const bell = new Audio('sounds/bell.mp3');
    const diceUp = document.querySelector('.close')
    const gameData = {
        players: ['player'],
        score: 0,
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        gameEnd: 30,
    };

    //opening the game
    startGame.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#game').className = "shown";
    });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#game').className = "hidden";
    });

    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){
            document.querySelector('#game').className = "hidden";
        }
    });

    //the first choice
    document.querySelector('#circR').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response').className = 'shown';
        userChoice();
    });

    document.querySelector('#circG').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response').className = 'shown';
        userChoice();
    });

    document.querySelector('#circB').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response').className = 'shown';
        userChoice();
    });

    document.querySelector('#circP').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response').className = 'shown';
        userChoice();
    });

    function userChoice(){

        let theText;
        if(color.color1){
            theText = "You rolled your dice 3 times";
        } 

        else if(color.color2){
            theText = "You rolled your dice 5 times";
        }

        else if(color.color3){
            theText = "You rolled your dice 4 times";
        }

        else if(color.color4){
            theText = "You rolled your dice 6 times";
        }
        numRoll.innerHTML = (theText);
    };

    // the second choice
    document.querySelector('#circR').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response1').className = 'shown';
        userChoice2();
    });

    document.querySelector('#circG').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response1').className = 'shown';
        userChoice2();
    });

    document.querySelector('#circB').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response1').className = 'shown';
        userChoice2();
    });

    document.querySelector('#circP').addEventListener('mousedown', function(event){
        event.preventDefault;
        document.querySelector('#response1').className = 'shown';
        userChoice2();
    });

    function userChoice2(){

        let theText;
        if(color.color1){
            theText = "You rolled your dice 3 times";
        } 

        else if(color.color2){
            theText = "You rolled your dice 5 times";
        }

        else if(color.color3){
            theText = "You rolled your dice 4 times";
        }

        else if(color.color4){
            theText = "You rolled your dice 6 times";
        }
        numRoll.innerHTML = (theText);
    };

    // the third choice
    function userChoice3(){

        let theText;
        if(color.color1){
            theText = "You rolled your dice 3 times";
        } 

        else if(color.color2){
            theText = "You rolled your dice 5 times";
        }

        else if(color.color3){
            theText = "You rolled your dice 4 times";
        }

        else if(color.color4){
            theText = "You rolled your dice 6 times";
        }
        numRoll.innerHTML = (theText);
    };

    // the next buttons
    document.querySelector('.next').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#game2').className = "shown";
    });

    document.querySelector('.next1').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#game3').className = "shown";
    });

    document.querySelector('.next').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#finalScreen').className = "shown";
    });

    function daResults (){
        gameData.roll1 = Math.floor (Math.random() * 6) + 1;
        gameData.roll2 = Math.floor (Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        userRoll.innerHTML = `You rolled a total of ${gameData.rollSum}`;
        showFortune();
    };

    function showFortune(){
        document.querySelector('#game').className = 'shown'

        let myText;
        if(gameData.rollSum === 2){
            myText = "Your car is going to break down but you'll get some money later.";
        }

        else if(gameData.rollSum === 3){
            myText = "Love is in the air. No literally, DUCK!!";
        }

        else if(gameData.rollSum === 4){
            myText = "Your luck is shining, go treat yourself!";
        }

        else if(gameData.rollSum === 5){
            myText = "You will reach finacial stability this year.";
        }

        else if(gameData.rollSum === 6){
            myText = "I see some upcoming situations that will help you grow.";
        }

        else if(gameData.rollSum === 7){
            myText = "A little friend is waiting for you.";
        }

        else if(gameData.rollSum === 8){
            myText = "Your home is going to explode.";
        }

        else if(gameData.rollSum === 10){
            myText = "Take care of yourself, your luck is neutral so be cautious.";
        }

        else if(gameData.rollSum === 12){
            myText = "Your academics will soar and the time will fly by!";
        }

        else{
            myText = ('If I tell you your fortune, the world will end.');
        }
        fortune.innerHTML = (myText);
    };

    startGame.addEventListener('mousedown', function(){
        openEr.play();
    });

    diceUp.addEventListener('mousedown', function(){
        bell.play();
    });
})();