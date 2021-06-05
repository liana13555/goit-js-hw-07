/*
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output. 
Если инпут пустой, в спане должна отображаться строка 'незнакомец'.
*/

const refs = {
    input: document.querySelector('#name-input'),
    nameTitle: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        refs.nameTitle.textContent = 'незнакомец';
    } else {
      refs.nameTitle.textContent = event.currentTarget.value;  
    } 
}

// 2 Решение
// const input = document.querySelector('#name-input');

// input.addEventListener('input', (event) => {
//     const nameTitle = document.querySelector('#name-output')
//     if (event.currentTarget.value === '') {
//         nameTitle.textContent = 'незнакомец';
//     } else {
//         nameTitle.textContent = event.currentTarget.value;  
//     }      
// });
