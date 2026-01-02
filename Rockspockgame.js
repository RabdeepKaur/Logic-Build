// 1 . rock ->scissors and lizards 
// 2. paper -> rock and Spock
//3. scissors-> paper and lizards
//4 lizards->paper and spocks
//5 spock ->rock and scissors

import promptSync from 'prompt-sync';
const prompt = promptSync();
// now to play this game we need to have two or more than two user and how do we take more than two user ,boom array 

let users=[];
users.length=2; // this shit will tell us how amny aper are palying
// every user get one moves which are , rock , paper , scissors , lizards , spock

// // but we have to user here , and both have to give the move at the same time 
// let usermoves1=prompt('gives us your moves might user ----> ')
// usermoves1=usermoves1.toLocaleLowerCase(); // prompt sis part of window api , so we need to import it here
//  console.log("User one move---->", usermoves1);
// let usermoves2=prompt('how will you fight your oponent your majisty -->')
// usermoves2=usermoves2.toLocaleLowerCase()
// console.log("User two  move ---> ",usermoves2)


// // current problem wiht this operator precenders
// if(usermoves1==usermoves2){
//     console.log("it a tie")
// }

// else if(usermoves1=='rock'&& (usermoves2=='scissor'|| usermoves2=='lizard')){
//     console.log ('user 1 is the might winner')

// }
// else if (usermoves1=='paper' && (usermoves2=='rock'|| usermoves2== 'spock')){
//     console.log('user 1 is the migiht winner');

// }
// else if(usermoves1=='scissor' && (usermoves2=='paper'||usermoves2=='lizard')){
// console.log("user 1 is the winner")

// }
// else if(usermoves1=='lizard' && (usermoves2=='paper'||usermoves2=='spock')){
//     console('user 1 is the winner')
    
// }
// else if (usermoves1=='spock' && (usermoves2=='rock'|| usermoves2=='scissor')){
//     console.log("user 1  is the winner")
 
// }
// else if(usermoves2=='rock'&& (usermoves1=='scissor'|| usermoves1=='lizard')){
//     console.log('user 2 is the might winner')
 
// }
// else if (usermoves2=='paper' && (usermoves1=='rock'|| usermoves1=='spock')){
//     console.log('user 2 is the migiht winner');
 
// }
// else if(usermoves2=='scissor' && (usermoves1=='paper'||usermoves1=='lizard')){
// console.log("user 2 is the winner")

// }
// else if(usermoves2=='lizard' && (usermoves1=='paper'||usermoves1=='spock')){
//     console.log('user 2 is the winner')
   
// }
// else if (usermoves2=='spock' && (usermoves1=='rock'|| usermoves1=='scissor')){
//     console.log("user 2 one is the winner")
    
// }
// else {
//     console.log("game end !!")
// }
// // problem wiht case sentivitlty 

// problem wiht the if and else logic 
//1> not very readly 2> if i add one more elemen tof chocie like water i have to make chages in all the parts 3> the logic have toomuch repreation 
// concept of abstraction so user obejct --> and to not repat the  logic 
 let usermoves1 = prompt('Give us your move mighty user ----> ');
usermoves1 = usermoves1.toLowerCase();

let usermoves2 = prompt('How will you fight your opponent your majesty -->');
usermoves2 = usermoves2.toLowerCase();

const moves = {
    rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
    paper: { name: 'Paper', defeats: ['rock', 'spock'] },
    scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
    lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
    spock: { name: 'Spock', defeats: ['scissors', 'rock'] }
};

// Logic
if (usermoves1 === usermoves2) {
    console.log("It's a tie!");
} else if (moves[usermoves1].defeats.includes(usermoves2)) {
    console.log("User 1 won!");
} else {
    console.log("User 2 won!");
}