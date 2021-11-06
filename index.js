// Code your solutions in this file

// function writeCards(names, message){
//     for (let name of names){
//         console.log(`Thank you, ${name}, for the wonderful ${message} gift!`);
//     }
// }


const names = ['Lisa', 'Kaitlin', 'Jan'];
const arr = [];
function writeCards(names) {
  for (let i = 0; i < names.length; i++) {
    arr.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    //debugger;
  }
  return arr;
}



let num = 10;
function countDown(num){
    
    while (num >= 0) {
    console.log(num--);
 }
}

countDown (num);