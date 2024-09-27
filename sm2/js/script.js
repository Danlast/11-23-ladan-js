// const randNumber = document.createElement('div');
const randNumberWrapper = document.createElement('div');
const randNumberButton = document.createElement('input');



randNumberWrapper.id = "randomNumber-wrapper";
randNumberWrapper.className = "randomNumber-wrapper";
// randNumber.id = "randomNumber";

randNumberButton.type = "button";
randNumberButton.className = "button";
randNumberButton.value = "Сгенерировать числа";
randNumberButton.addEventListener("click", random);

// randNumberAmount.type = "text";
// randNumberAmount.className = "amountOfNumbers";
// randNumberAmount.value = "Количество генерируемых чисел";
// Добавить поле инпута для amount of Numbers

function random(){
    amountOfNumbers = prompt("Сколько чисел?")
    randNumberWrapper.innerHTML = "";
    randNumberWrapper.append(randNumberButton) 
    for(counter = 0; counter < amountOfNumbers; counter++){
        let rand = Math.random();
        const randNumber = document.createElement('div');
        randNumber.id = "randomNumber";
        randNumber.className = "randomNumber";
        randNumber.innerHTML = `${rand}`;
        randNumberWrapper.append(randNumber) 
    }
}

document.body.append(randNumberWrapper)
randNumberWrapper.append(randNumberButton) 





// Функция-рандом инфа о человеке
let people = [{name: "test", surname: "test2", age: "test3"}];

people.map((item, index) => {
    console.log("Имя", item.name);
    console.log("Имя", item.surname);
    console.log("Имя", item.age);
});







// sm 2 :

// const nameU = prompt('Как тебя зовут?');
// console.log(nameU);

// const age = prompt('Твой возраст?');
// if(age < 20){
//     alert("Тебе меньше 20");
// }
// else {
//     for(i = 0; i < 5; i++){
//         console.log("Привет\n");
//     }
// }

// if (confirm('Хочещь учить js')){
//     alert("Супер")
// }
