import rock from "../assets/rock.png"
import paper from "../assets/paper.png"
import scissors from "../assets/scissors.png"


function playMatch3() {

    let pScore = 0;
    let cScore = 0;
    //Get the playfield
    const playfield = document.querySelector('.Match3');
    playfield.classList.remove("fadeOut");
    playfield.classList.add("fadeIn");

    //Get the rules
    const readRules = ()=> {
        const rulesBtn = document.querySelector('.rules-icon');
        const rulesTxt = document.querySelector('.rules-text');

        rulesBtn.addEventListener('mouseenter', ()=> {
            rulesTxt.classList.add("fadeInAlmost");
        });

        rulesBtn.addEventListener('mouseleave', ()=> {
            rulesTxt.classList.remove("fadeInAlmost");
            rulesTxt.classList.add("fadeOut");
        });
    };

    //Play a match
    const playMatch = ()=> {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach((option)=> {
            option.addEventListener('click', function() {
                //Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                    
                playerHand.src = rock;
                computerHand.src = rock;

                setTimeout(()=> {
                    //Compare hands 
                    compareHands(this.textContent, computerChoice);
                    
                    //String to variable name 
                    //wee need a function !!!!!!!!!!!!!!!!!!!!!!
                    //Update playerhand
                    if(this.textContent === 'rock'){
                        playerHand.src = rock;
                    }
                    else if(this.textContent === 'paper'){
                        playerHand.src = paper;
                    }
                    else playerHand.src = scissors;

                    //Update computerhand 
                    if(computerChoice === 'rock'){
                        computerHand.src = rock;
                    }
                    else if(computerChoice === 'paper'){
                        computerHand.src = paper;
                    }
                    else computerHand.src = scissors;
                }, 1000);

                //Animation
                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";
            });
        });
    };

    const updateScore = ()=> {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoice)=> {
        //Update text
        const winner = document.querySelector('.winner');

        //Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie 😳";
            return;
        }

        //Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player wins 🔥";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer wins 😩";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = "Player wins 🔥";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer wins 😩";
                cScore++;
                updateScore();
                return;
            }
        }

        //Check for Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "Player wins 🔥";
                pScore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = "Computer wins 😩";
                cScore++;
                updateScore();
                return;
            }
        }

    };

    //Call all inner functions
    readRules();
    playMatch();

};

export default playMatch3;