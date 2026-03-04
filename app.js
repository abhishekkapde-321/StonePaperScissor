let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.getElementById("msg");
const userScore_board=document.querySelector("#user-score");
const compScore_board=document.querySelector("#computer-score");

const resetBtn=document.getElementById("reset-btn");

resetBtn.addEventListener("click",()=>{
    userScore=0;
    compScore=0;
    userScore_board.innerText=userScore;
    compScore_board.innerText=compScore;
    msg.innerText="Make your move!";
    msg.style.backgroundColor="#081b31";
});

const genCompChoice=()=>{
    const choices=["stone","paper","scissor"];    // choices in array
    const randomIdx=Math.floor(Math.random()*3);  //random index generation to choose
    // math.random() gen num betn 0 to 1, so we *3 to get num betn 0 to 3(0,1,2)
    // math.floor() round of dec num to integer
    return choices[randomIdx];
};


const drawGame=()=>{
    console.log("It's a draw!");
    msg.innerText="Game Is Draw! Play Again.";
    msg.style.backgroundColor="#081b31";
};


const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScore_board.innerText=userScore;
        console.log("You win!");
        msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#19b408";
    }else{
        compScore++;
        compScore_board.innerText=compScore;
        console.log("You lose!");
        msg.innerText=`You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};


const playGame=(userChoice)=>{
    console.log("user choice is ", userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice is ", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="stone" ){
            userWin= compChoice==="scissor"? true:false;
        }else if(userChoice==="paper"){
            userWin= compChoice==="stone"? true:false;  
        }else{
            userWin= compChoice==="paper"? true:false;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
});
});