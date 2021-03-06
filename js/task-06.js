/*
Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Введи 6 символов"
/>

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.

*/


const inputEl = document.querySelector('#validation-input');
const wordLength = inputEl.dataset.length;

function onInputBlur(event) {
    if (wordLength == event.currentTarget.value.length) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else if (wordLength != event.currentTarget.value.length) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }       
};

inputEl.addEventListener('blur', onInputBlur);
