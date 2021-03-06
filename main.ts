
// Task1
// Написати розв’язок нижче описаного завдання (по одному рядку коду на кожний пункт)
// 1.	Створіть змінну city з типом даних string.
// 2.	Присвойте їй значення «Київ».
// 3.	Змініть значення змінної city на «Львів».
// 4.	Створіть змінну addressз типом даних string і скопіюйте в неї значення змінної city.
// 5.	Вивести значення змінної address з допомогою команди console.log().
//---------------------------------------------------------------------

// let city: string = `Київ`
// city = `Львів`
// let address: string = city
// console.log(address);

// ------------------------------------------------------------------------------------------
// Task2
// Використовуючи конструкцію if..else через тернарний вираз, напишіть код, який отримує число через prompt, а потім виводить в console.log() повідомлення:
// 1.	Число парне.
// 2.	Число непарне.
// 3.	Число 0.
// ------------------------------------------------------------------------------------------

// let num: number = +prompt(); 

//  num === 0 ? console.log(`число 0`) :
//  num % 2 === 0 ? console.log("число парне") :
//  console.log("число непарне")

// ------------------------------------------------------------------------------------------
// Task3
// Написати розв’язок нижче описаного завдання за допомогою functiondeclaration:
// 1.	Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// 2.	Кількість параметрів у функції може бути від 2х і більше.
// Приклад роботи:
// 1.	max(5,-2) – має повернути 5.
// 2.	max(5,-2,30,6) – має повернути 30
// ------------------------------------------------------------------------------------------

// function maxArgument(...arg: Array<number>){
//     console.log(Math.max(...arg))
// }
// maxArgument(10, 20, 100, 50, -10, 130 )

// ----------------------------------------------------------------------------------------
// Task4
// Напишіть функцію getSqrt(number), яка вираховує корінь квадратний. Для визначення кореня використовуйте Math. В залежності від 
// того що передали в функцію має виводити наступні повідомлення:
// •	Якщо передане число повертати - Квадратний корінь з стільки то дорівнює стільки то.
// •	Якщо передали не число - Повинно бути числове значення.
// •	Якщо число менше 0 - Введіть додатнє число.
// •	Якщо в функцію нічого не передали - Будь ласка, введіть число!
// ----------------------------------------------------------------------------------------

// function getSqrt(num){
//     num >0 ? console.log(`корінь вашого числа ${Math.sqrt(num)}`):
//     num <= 0 ? console.log(`введіть додатнє число`):
//     num != null? console.log(`Повинно бути числове значення`):
//     console.log(`Будь ласка, введіть число!`);
// }
// getSqrt(`SADS`)

// ----------------------------------------------------------------------------------------
// Task5
// Необхідно відтворити функціонал як на відео Cenzor, а саме:
// •	При кліку на ADDдобавляти заборонене слово, яке відображатиметься в списку “Badwords”
// •	Якщо поле для добавлення слова не заповнене виводити відповідне повідомлення
// •	При кліку на Cenzorперевіряється чи є в textareaзаборонене слово, якщо так його заміняє на *, причому на ту кількість яка довжина слова
// •	Якщо textareaпорожня виводити повыдолення про заповнення поля
// ----------------------------------------------------------------------------------------

let f1= document.forms[`form`]
let inner: HTMLElement = document.querySelector(`.inner`)
let area: string = f1.area.value
let pStr: Array<string>
let areaStr: Array<string>
let star: string = `*`

function stars(count:number, symvol) {
    if(count){
    for(let i = 0; i< count-1; i++){
        symvol+=`*`        
    }
}
    return symvol
}


f1.add.addEventListener(`click`, e=>{
    inner.innerText += ' '+ f1.words.value
    f1.words.value = ``    
})

f1.reset.addEventListener(`click`,e=>{
    inner.innerText = ``
})
f1.censor.addEventListener(`click`,e=>{
    pStr = inner.innerText.split(` `)
    areaStr = f1.area.value.split(` `)
    pStr.forEach(element => {
       let filtered:Array<string> = areaStr.filter(e=>e===element)       
       filtered.forEach(el=>{
           f1.area.value = f1.area.value.replace(el, stars(el.length, star))           
       })
    });
})
