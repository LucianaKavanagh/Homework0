
function Season() {
  let number=Number(prompt(`Введите номер месяца`));
  if (number===12 || number===1 || number===2) {
    alert(`Зима`);
    
  } else if (number===3 || number===4 || number===5) {
    alert(`Весна`);
  }
  else if (number===6 || number===7 || number===8) {
    alert(`Лето`);
  }
  else if (number===9 || number===10 || number===11) {
    alert(`Осень`);
  }
  else {
    alert(`В году 12 месяцев. Введите число от 1 до 12`);
  }
  
};

function gameTwo() {
  let arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

arr = arr.sort(() => Math.random() - 0.5);
alert(arr);
let questionOne = prompt(`Какой первый фрукт?`);
let questionTwo = prompt(`Какой последний фрукт?`);
if (questionOne===arr[0] && questionTwo=== arr[arr.length - 1]) {
  alert(`Аплодисменты, ты супер-пупер!`);
} 
else if (questionOne === arr[0] || questionTwo === arr[arr.length - 1]) {
  alert(`Вы были близки`);
}
else {
alert(`Не угадал, попробуй ещё раз`); 
}
}






