/*
Напиши скрипт, который выполнит следующие операции.
1. Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.
2. Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента (тега h2) и количество элементов 
в категории (всех вложенных в него элементов li).
Например для первой категории получится:
Категория: Животные
Количество элементов: 4
*/

const listEl = document.querySelectorAll('.item');

console.log(`В списке ${listEl.length} категории.`);

listEl.forEach(item => {
    const listElName = item.querySelector('h2');    
    console.log('Категория:', listElName.textContent);
    const quantityEl = item.querySelectorAll('li');
    console.log('Количество элементов:', quantityEl.length);
})


