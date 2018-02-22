"use strict";
const PROMPT = require ('readline-sync');

////Ints
let rating;
let averageRating;
let totalRating = 0;

//Strings


//Boolean
let continueOn = 3;
let resume;


function main(){
    checkContinue();
    ratingMethod();
    calculateAverage();
}
main();

function checkContinue(){
    resume = Number(PROMPT.question("Do you want to continue rating? [0 = no | 1 = yes] "));
    if(resume === 1){
        rating = 0;
        ratingMethod();
    }
    if(resume === 0){
        calculateAverage();
    }else{
        checkContinue();
    }
}

function ratingMethod(){
    rating = 0;
    rating = Number(PROMPT.question("What do you rate 'Ghost DuDes'? [0 - 5] "));
    
    if (rating > 5 || rating < 0){
        continueOn--;
        if (continueOn > 0){
        console.log("Incorrect value, you have " + continueOn + " tries left. " );
        ratingMethod();
        }
        if (continueOn <= 0){
            console.log("You are out of tries");
            calculateAverage();
        }
    }else{
        totalRating = rating + totalRating;
        console.log(totalRating);
        checkContinue();
    }
}
        
        
   
    

function calculateAverage (){
    averageRating = totalRating / 3;
    console.log("The average rating for 'Ghost DuDes' is: " + averageRating + " stars.");
    process.kill(process.pid);
}