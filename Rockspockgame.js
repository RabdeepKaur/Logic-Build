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
let moves=['Rocks','Paper','Scissors','Lizards','Spock'];
// but we have to user here , and both have to give the move at the same time 
let usermoves1=prompt('gives us your moves might user ----> '); // prompt sis part of window api , so we need to import it here
 console.log("User one move---->", usermoves1);
let usermoves2=prompt('how will you fight your oponent your majisty -->')
console.log("User two  move ---> ",usermoves2)

if(usermoves1==usermoves2){
    console.log("it a tie")
}

if(usermoves1=='rocks'&& usermoves2=='scissors'|| usermoves2=='lizards'){
    console.log('user 1 is the might winner')
}
else if (usermoves1=='paper' && usermoves2=='rocks'|| usermoves2== 'spock'){
    console.log('user 1 is the migiht winner');
}
else if(usermoves1=='scissors' && usermoves2=='paper'||usermoves2=='lizards'){
console.log("user 1 is the winner")
}
else if(usermoves1=='lizards' && usermoves2=='paper'||usermoves2=='spocks'){
    console('user 1 is the winner')
}
else if (usermoves1=='spock' && usermoves2=='rock'|| usermoves2=='scissors'){
    console.log("user 1  is the winner")
}
if(usermoves2=='rocks'&& usermoves1=='scissors'|| usermoves1=='lizards'){
    console.log('user 2 is the might winner')
}
else if (usermoves2=='paper' && usermoves1=='rocks'|| usermoves1=='spock'){
    console.log('user 2 is the migiht winner');
}
else if(usermoves2=='scissors' && usermoves1=='paper'||usermoves1=='lizards'){
console.log("user 2 is the winner")
}
else if(usermoves2=='lizards' && usermoves1=='paper'||usermoves1=='spocks'){
    console('user 2 is the winner')
}
else if (usermoves2=='spock' && usermoves1=='rock'|| usermoves1=='scissors'){
    console.log("user 2 one is the winner")
}
else {
    console.log("game end !!")
}