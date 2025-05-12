// 1. Є такий код:
// Допишіть код, щоб в консолі браузера з'явилися рядки, які написані в коментарях, оперуючи при цьому змінними х і у.
function task01 () {
    let x = 1;
    let y = 2;

    let res1 = `${x}` + `${y}`; // Допишіть код, необхідно використовувати змінні x і y
    console.log(res1); // "12"
    console.log(typeof res1); // "string"

    let res2 = x !== y; // Допишіть код, необхідно використовувати змінні x і y
    console.log(res2); // "true2"
    console.log(typeof res2); // "string"

    let res3 = Boolean(x + y); // Допишіть код, необхідно використовувати змінні x і y
    console.log(res3); // true
    console.log(typeof res3); // "boolean"

    let res4 = x * `+ ${y}`; // Допишіть код, необхідно використовувати змінні x і y // NaN
    console.log(typeof res4); // "number"
}

// 2. Користувач вводить число (використовуйте prompt ()). Необхідно перевірити чи є введене число
// 	a) парним додатним;
// 	b) кратним числу 7.
// Результат перевірки вивести в консоль.
function task02 () {
    let x = prompt('Enter a number:');
    console.log(`Is even: ${x % 2 === 0}`);
    console.log(`Is divided by 7: ${x % 7 === 0}`);
}

// 3. Створіть порожній масив;
function task03 () {
    // 1) У перший елемент масиву запишіть будь-яке число;
    // 2) У другий елемент масиву запишіть будь-який рядок;
    // 3) У третій елемент масиву запишіть будь-яке логічне значення;
    // 4) У четвертий елемент масиву запишіть значення null;
    const arr = [];
    arr[0] = Math.floor(Math.random() * 10);
    arr[1] = 'lorem';
    arr[2] = true;
    arr[3] = null;
    // 5) Виведіть на екран число елементів, яке зберігається в масиві;
    console.log(arr.length);
    // 6) Запитайте у користувача ввести будь-яке значення і запишіть це значення в п'ятий елемент масиву;
    arr[4] = prompt('Enter something:');
    // 7) Виведіть на екран п'ятий елемент масиву.
    console.log(arr[4]);
    // 8) Видаліть 1-ий елемент масиву і виведіть масив на екран.
    console.log(arr);
    arr.shift();
    console.log(arr);
}

// 4. Напишіть програму, яка об’єднує всі наявні елементи масиву в стрічку і розділяє їх символом “*”.
// Початковий масив:
// let cities = ["Rome", "Lviv", "Warsaw"];
// Результат:
// "Rome*Lviv*Warsaw"
function task04 () {
    let cities = ['Rome', 'Lviv', 'Warsaw'];
    console.log(cities.join('*'));
}

// 5. Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку.
// Результат запишіть в змінну isAdult. В залежності від отриманого значення виведіть відповідне повідомлення про статус особи.
// Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. Якщо вік менше 18 років вивести “Ви ще надто молоді”,
function task05 () {
    let isAdult = parseInt(prompt('How old are you?'));
    if (isAdult > 17) {
        console.log('Ви досягли повнолітнього віку');
    } else {
        console.log('Ви ще надто молоді');
    }
}

// 6. Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
// Необхідно
function task06 () {
    const inputA = prompt("Enter side 'a':");
    const inputB = prompt("Enter side 'b':");
    // For check the program doing correctly
    //   const inputC = Math.sqrt(a*a + b*b)
    const inputC = prompt("Enter side 'c':");

    // Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘.
    if (isNaN(inputA) || isNaN(inputB) || isNaN(inputC)) {
        console.log('Incorrect data');
        return;
    }

    const a = parseFloat(inputA);
    const b = parseFloat(inputB);
    const c = parseFloat(inputC);

    // 	a) визначити і вивести в консоль площу трикутника
    // calc semi-perimeter
    const sp = (a + b + c) / 2;
    // calc area
    const area = Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
    // Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми (наприклад:  8.42355465 =>  8.424).
    console.log(`Trianlge area = ${area.toFixed(3)}`);

    // 	b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
    const hypotenuse = Math.max(a, b, c);
    let otherSide = null;
    if (hypotenuse === a) {
        otherSide = [b, c];
    } else if (hypotenuse === b) {
        otherSide = [a, c];
    } else {
        otherSide = [a, b];
    }

    const epsilon = 0.0001;
    const isRightTriangle =
        Math.abs(
            Math.pow(hypotenuse, 2) -
                (Math.pow(otherSide[0], 2) + Math.pow(otherSide[1], 2))
        ) < epsilon;

    console.log(
        `The Trianlge is ${isRightTriangle ? '' : 'not'} right triangle`
    );
}

// 7. Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання.
// Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
// В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
// В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
// В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
// В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
function task07 () {
    const now = new Date();
    const hours = (now.getHours() % 24);

    console.log(`The time is about = ${hours}:00`);

    if (hours >= 17) {
        console.log('The hour is more than 17:00! Good evening!');
    } else if (hours >= 11) {
        console.log('The hour is more than 11:00! Good afternoon!');
    } else if (hours >= 5) {
        console.log('The hour is more than 05:00! Good morning!');
    } else {
      console.log("The hour is more than 23:00! Good night!");
    }
}
