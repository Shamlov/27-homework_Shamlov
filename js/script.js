function task1() {    //  Подсчитать сумму всех чисел в заданном пользователем диапазоне. 
    let userMinNam = 2;
    let userMaxNam = 10;
    let sumNum = 0;
    for (let coutn = userMinNam; coutn <= userMaxNam; coutn++) {
    // console.log(coutn)
    sumNum = sumNum + coutn;
    }
    console.log(sumNum);
}


function task2() {           //  Запросить 2 числа и найти только наибольший общий делитель.
    let nam1 = 15
    let nam2 = 35
    let namMaxEquals
    let namMin
    if (nam1 >= nam2) {                 // вычислим наибольшее и наименьшее число из введенных и присвоим переменным
        namMaxEquals = nam1
        namMin = nam2
    } else {
        namMin = nam1
        namMaxEquals = nam2
    }
    
    for(let count = namMin; count > 0; count--  ) {
        // console.log(count)
        if(nam1 % count ==0 && nam2 % count ==0) {
            console.log(count + ' наибольший делитель')  
            break
        }
    }
}


function task3() {    //Запросить у пользователя число и вывести все делители этого числа
    let nam1 = 16
    let nam2 = 8
    let namMaxEquals
    let namMin
    if (nam1 >= nam2) {                 // вычислим наибольшее и наименьшее число из введенных и присвоим переменным
        namMaxEquals = nam1
        namMin = nam2
    } else {
        namMin = nam1
        namMaxEquals = nam2
    }
    
    for(let count = namMin; count > 0; count--  ) {
        // console.log(count)
        if(nam1 % count ==0 && nam2 % count ==0) {
            console.log(count +  ' общий делитель')  
            // break                    // покажет все делители так как цикл дойдет до 1
        }
    }
}


function task4() {                             // Определить количество цифр в введенном числе
    let nam = 78                               // не 0
    for(count = 0; nam >= 1; count++ ) {
    nam = nam / 10
    }
    console.log(count) 
}

function task5() {   
    /*Запросить у пользователя 10 чисел и подсчитать, сколько
    он ввел положительных, отрицательных и нулей. При этом
    также посчитать, сколько четных и нечетных. Вывести
    статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем */
    let positiveNumber = 0
    let negativeNumber = 0
    let zero = 0
    let even = 0
    let notEven = 0
    for (let count = 0; count < 10 ;count++) {
        let userNam = +prompt('введи число')   //  prompt останавливает цикл для запроса
        if(userNam > 0) {
            positiveNumber++
        }
        if(userNam < 0) {
            negativeNumber++
        }
        if(userNam == 0) {
            zero++
        }
        if(userNam % 2) {       // userNam % 2  вернет 0 или любое число . 0 будет false / любое число true
            notEven++           // ввод 0 попадает в четный счетчик
        } else {
            even++
        }
    }
    
    alert(`полжит ${positiveNumber}`)
    alert(`отриц ${negativeNumber}`)
    alert(`ноль ${zero}`)
    alert(`чет ${even}`)
    alert(`не чет ${notEven}`)
}

function task6() {
//     /*Зациклить калькулятор. Запросить у пользователя 2 числа
// и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока
// пользователь не откажется.*/

do {
    let num1 = +prompt('число1')
    let num2 = +prompt('число2')
    let operation = prompt('знак')
    switch(true) {
        case '+' == operation : alert(num1 + num2); break
        case '-' == operation : alert(num1 - num2); break
        case '*' == operation : alert(num1 * num2); break
        case '/' == operation : alert(num1 / num2); break
    }
}
while(confirm('Хотите продолжить?')) 
} 


function task7() {
/*Запросить у пользователя число и на сколько цифр его
сдвинуть. Сдвинуть цифры числа и вывести результат (если
число 123456 сдвинуть на 2 цифры, то получится 345612). */
    let userNum = 3245634
    let userShift = 2
    for(let i = userShift; i > 0; i--) {
    console.log('ХЗ')
    // ХЗ
    }
    
}



function task8() {
/*Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока
пользователь нажимает OK. */

let dayWeek = 'Понедельник'  // по умочанию 
while(confirm(`День недели,\n${dayWeek}\nХотите увидеть следующий день?`))  {    
    switch(true) {
        case dayWeek == 'Понедельник' : dayWeek = 'Вторник'; break
        case dayWeek == 'Вторник'     : dayWeek = 'Среда'  ; break
        case dayWeek == 'Среда'       : dayWeek = 'Четверг'; break
        case dayWeek == 'Четверг'     : dayWeek = 'Пятница'; break
        case dayWeek == 'Пятница'     : dayWeek = 'Суббота'; break
        case dayWeek == 'Суббота'     : dayWeek = 'Воскресенье'; break
        case dayWeek == 'Воскресенье' : dayWeek = 'Понедельник'; break
    }
}
}


function task9() {
/*Вывести таблицу умножения для всех чисел от 2 до 9.
Каждое число необходимо умножить на числа от 1 до 10.*/
    for(let count = 2; count <= 9; count++) {
        console.log(`умножение ${count}`)
        for(let internalCounter = 1; internalCounter <= 10; internalCounter++) {
            let nam  = count * internalCounter
            console.log(`${count} * ${internalCounter} = ${nam}`)
        }
    }
}


/* Игра «Угадай число». Предложить пользователю загадать
число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам,
записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того
что указал пользователь, уменьшаете диапазон. Начальный
диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили
диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/

// alert('Загадай число')
let maxNum = 100    
let minNum = 0
let halfNumber = maxNum
let questionNum
do {
    questionNum = ((maxNum - minNum) / 2 ) + minNum
    // console.log(halfNumber)
    console.log(questionNum)
    let question = confirm (`Число больше или равно ${questionNum}`)
    halfNumber = (maxNum - minNum) / 2
    if(question) {
        minNum = questionNum
    } else  {
        maxNum = questionNum - 1
    }
    // console.log(halfNumber)
    // console.log(maxNum)
    // console.log(minNum)
} while (halfNumber > 0)   // условие временное необходимо для избежания зацикливания 







