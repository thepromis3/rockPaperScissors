//make sure this is the rps-ui version

//create variable for user and comp and set them to zero

let userScore = 0;
let compScore = 0;


//cache the DOMS: create all the DOM variables by including the underscores (ie. userScore_span) to
    //make it easier to differentiate. You might as well store it now instead of going back and forth later.
let scoreboard_div = document.querySelector('.scoreboard');
let panel_div = document.querySelector('.panel');
let userPanel_div = document.getElementById('user-panel');
let compPanel_div = document.getElementById('comp-panel');
let score_span = document.querySelector('.score');
let userScore_span = document.getElementById('user-score');
let compScore_span = document.getElementById('comp-score');
let result_div = document.querySelector('.result > h1');
let choices_div = document.querySelector('.choices');
let choice_div = document.querySelector('.choice');
let choiceRock_div = document.getElementById('r');
let choicePaper_div = document.getElementById('p');
let choiceScissors_div = document.getElementById('s');
let actionMessage_div = document.querySelector('.action-message > p');
let seriesResult_div = document.querySelector('.series-result > p');


//create addEventListener method for each of the choice divs. console.log them to make sure it's reacting correctly.

function getCompChoice () {
    let compOptions = ['r', 'p', 's'];
    let compChoice = compOptions[Math.floor(Math.random() * 3)];
    return compChoice;
}



function game (userChoice) {
    let compMove = getCompChoice();

    switch (userChoice + compMove) {
        case 'rs':
        case 'pr':
        case 'sp':
            win (userChoice, compMove);
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose (userChoice, compMove);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw (userChoice, compMove);
            break;
    }

    if (userScore === 5) {
        userWinsSeries();
    }

    if (compScore === 5) {
        compWinsSeries();
    }
}



function convertToWord (letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}



function win (user, computer) {
    //results to say that we won
    //scoreboard to update to say that we gain a point
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    let userChoice_div = document.getElementById(user);
    let smallUserLabel = "User".fontsize(3).sub();
    let smallCompLabel = 'Comp'.fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserLabel} beats ${convertToWord(computer)}${smallCompLabel}! You Win!`;

    userChoice_div.classList.add('green-glow');

    setTimeout(function() {
        userChoice_div.classList.remove('green-glow')
    }, 1000)
    
}


function lose (user, computer) {
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    let userChoice_div = document.getElementById(user)
    let smallUserLabel = "User".fontsize(3).sub();
    let smallCompLabel = 'Comp'.fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserLabel} loses to ${convertToWord(computer)}${smallCompLabel}! You Lose :(`;

    userChoice_div.classList.add('red-glow');

    setTimeout(function() {
        userChoice_div.classList.remove('red-glow');
    }, 1000)
}


function draw (user, computer) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    let userChoice_div = document.getElementById(user);
    let smallUserLabel = "User".fontsize(3).sub();
    let smallCompLabel = 'Comp'.fontsize(3).sub();
    result_div.innerHTML = `${convertToWord(user)}${smallUserLabel} equals ${convertToWord(computer)}${smallCompLabel}...draw.`;

    userChoice_div.classList.add('gray-glow');

    setTimeout(function() {
        userChoice_div.classList.remove('gray-glow');
    }, 1000)
}


function userWinsSeries(){
    seriesResult_div.textContent = 'User Wins the Series! Yesssss'
}


function compWinsSeries() {
    seriesResult_div.textContent = 'Comp Wins the Series...booooo'
}
 


function main () {
    choiceRock_div.addEventListener('click', () => game('r'));
    choicePaper_div.addEventListener('click', () => game('p'));
    choiceScissors_div.addEventListener('click', () => game('s'));
}

main();






//delete the console.log. Wrap these 3 event listeners in a fucntion called main

//inside each of the event listeners, pass a function called game with an argument of r, p, s, accordingly.

//declare the function called game on top of function main. You can keep the inside empty for now

//declare function getComputerChoice, where you create a variable/array with r, p, and s. Also return random choice
    //within that function. There are multiple ways to do this so just do it in a way that makes sense for you.
    //Additionally, just console.log it to make sure that this function is working that way it's supposed to.

//now, inside of function game, where parameter is userChoice, create variable that returns getComputerChoice()

//inside of function game, use a switch statement where the expression is userChoice + computerChoice, list out the
    //cases (between quotes) where the user would win in console. Then break, and list out cases where computer 
    //would win.
    //then list out cases when it should be a draw

//after testing out that the above function game works, let's replace the console.logs with a function call.
    //remember...never code everything in one function. It makes things confusing so just call a function, and declare
    //that function in a separate code
    //So, create a win, lose and draw function

//inside the win, lose, and draw functions, increment the userScore, then copy it over to the span variable using
    //innerHTML, which will change the actual number in the scoreboard 
    //also now you can add parameters in the win() function. And inside game() function, you can add the arguments
    //to the win, lose and draw functions that you called

//you can change the innerHTML of the results_div inside the win function at this point

//if you code in a way where you only use letters, you can create a new function called something like converToWord
    //and insert that inside of another function

//now copy and paste everything in win() over to lose() and draw(), and update everything accordingly

//from here, it's all cosmetic. in the win function you can add a class (using classList.add) to add a green glow
    //when clicking on that choice. In addition, you should add a setTimeout, where you can remove that green glow
    //after 1 second. Make sure you make a variable of it (cashe it?)