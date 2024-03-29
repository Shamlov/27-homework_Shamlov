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

function task3() {
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





