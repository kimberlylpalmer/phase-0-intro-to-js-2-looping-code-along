// Code your solutions in this file
function writeCards(names, eventName) {
  const cardMsg = [];
  for(let i = 0; i < names.length; i++){
  cardMsg.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
} return cardMsg;
console.log(writeCards)
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")


function countDown() {
  let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}
}















// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birhtday to me!`);
    
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//     for (let i = 0; i < gifts.length; i++) {
//         console.log(`Wrapped ${gifts[i]} and added a bow!`);
//         // debugger;
//     }
//     return gifts;
// }

// wrapGifts(gifts);


//seconde time with this lab
/*
function writeCards(names, event) {
    const cardsMessage = []
  for (let i = 0; i < names.length; i++) {
    console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    cardsMessage.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
  }
  return cardsMessage
  console.log(writeCards);
}

writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")



function countDown() {
    let countDown = 10;
while (countDown >= 0) {
    console.log(countDown--);
}
}
*/