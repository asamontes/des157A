(function(){
    'use strict';
    console.log('reading JS');

    const startGame = document.querySelector('#tellme');
    const userRoll = document.querySelector('#urRoll');
    const fortune = document.querySelector('#urFortune');
    const gameData = {
        players: ['player'],
        score: 0,
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        gameEnd: 12,
    };

    startGame.addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#game').className = "shown";
        throwDice();
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

    function throwDice(){
        gameData.roll1 = Math.floor (Math.random() * 6) + 1;
        gameData.roll2 = Math.floor (Math.random() * 6) + 1;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        userRoll.innerHTML = `You rolled ${gameData.rollSum}`;
        showFortune();
    }

    function showFortune(){
        document.querySelector('#game').className = 'shown'

        let myText;
        if(gameData.rollSum === 2){
            myText = "Your car is going to break down but you'll get some money later in that same year.";
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
    }


})();