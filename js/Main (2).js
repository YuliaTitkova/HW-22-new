

/*
 * #1
 *
 * Створіть функцію counter(), яка має реалізувати лічильник за допомогою замикання:
 * функція може приймати число як аргумент counter(n)
 * якщо число передано у функцію - лічба починається із зазначеного числа
 * якщо ні - то лічба триває
 */

function counter(n) {
    let count = n !== undefined ? n : 0;
    return function(nextValue) {
        if (nextValue !== undefined) {
            count = nextValue;
        }
        return count++;
    };
}
export {counter};


/*
 * #2
 *
 * Створіть функцію counterFactory, яка має реалізувати три методи за допомогою замикання:
 * початкове значення лічильника - 0
 * counterFactory.value() - повертає значення лічильника
 * counterFactory.value(n) - встановлює значення лічильника, повертає нове значення
 * counterFactory.increment() - збільшує значення лічильника на 1
 * counterFactory.decrement() - зменшує значення лічильника на 1
 */
const counterFactory = (function() {
    // Початкове значення лічильника
    let counter = 0;

    return {
        // Метод для отримання або встановлення значення лічильника
        value(n) {
            if (n !== undefined) {
                counter = n;
            }
            return counter;
        },
        // Метод для збільшення значення лічильника на 1
        increment() {
            counter++;
            return counter;
        },
        // Метод для зменшення значення лічильника на 1
        decrement() {
            counter--;
            return counter;
        }
    };
})();

export {counterFactory};


/*
 * #3
 *
 * Створіть функцію myPow(a, b, myPrint). Всередині реалізуйте рекурсію для підрахунку результату піднесення числа a до ступеня b.
 * - Функція myPrint(a, b, res) - глобальна функція, що має генерувати з параметрів a, b, res рядок вигляду 'a^b=res' і повертати його.
 * - myPrint() має бути передана в myPow() як параметр і викликана всередині як callback-функція.
 * - функція myPow() як значення, що повертається, приймає результат myPrint().
 * Наприклад:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 * console.log(myPow(2, 0, myPrint))  // 2^0=1
 * console.log(myPow(2, -2, myPrint)) // 2^-2=0.25
 */
const myPrint = (x, m, res) => `${x}^${m}=${res}`;

const myPow = (x, m, myPrint) => {
    if (m === 0) {
        return myPrint(x, m, 1);
    } else if (m > 0) {
        const result = x * parseFloat(myPow(x, m - 1, myPrint).split('=')[1]);
        return myPrint(x, m, result);
    } else {
        const result = 1 / parseFloat(myPow(x, -m, myPrint).split('=')[1]);
        return myPrint(x, m, result);
    }
};
export {myPrint};
export { myPow };



// console.log(myPow(3, 4, myPrint)) // 3^4=81
// console.log(myPow(2, 3, myPrint)) // 2^3=8
// console.log(myPow(2, 0, myPrint)) // 2^0=1
// console.log(myPow(2, -2, myPrint)) // 2^-2=0.25


/*
 * #4
 * Створіть функцію myMax(arr), яка як параметр приймає
 * довільний числовий масив і повертає максимальне число з переданого їй масиву.
 * У реалізації функції має бути застосовано метод Math.max() і apply().
 */

const myMax = (arr) => {
    return Math.max.apply(null, arr);
};
const list = [12, 23, 100, 34, 56, 9, 233]
export {myMax};


/*
 * #5
 *
 * Створіть функцію myMul(a, b), яка буде множити числа а і b, повертаючи результат.
 */

function myMul(a,b) {
    return a * b;
}
export {myMul};
/*
 * Створіть функції myDouble(n), яка приймає один параметр і подвоює його.
 * Використовувати множення або інші математичні операції всередині функції - заборонено, тільки bind() і myMul().
 * Функція повертає результат обчислення.
 */


const myDouble = myMul.bind(null, 2);
export {myDouble};


// Аналогічним чином створюємо функцію myTriple(n), яка потроює параметр, що приймає, повертаючи результат.

const myTriple = myMul.bind(null, 3);

export {myTriple};