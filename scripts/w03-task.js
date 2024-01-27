/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

const txt1 = document.getElementById("add1");
const txt2 = document.getElementById("add2");
const btn1 = document.getElementById("addNumbers");
const outtxt1 = document.getElementById("sum");



function add(number1, number2)
{
    return number1 + number2;
}
function addNumbers()
{
    let num1 = Number(txt1.value);
    let num2 = Number(txt2.value);
    outtxt1.value = add(num1, num2);
}

btn1.addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const txt3 = document.getElementById("subtract1");
const txt4 = document.getElementById("subtract2");
const btn2 = document.getElementById("subtractNumbers");
const outtxt2 = document.getElementById("difference");



function subtract(number1, number2)
{
    return number1 - number2;
}
function subtractNumbers()
{
    let num1 = Number(txt3.value);
    let num2 = Number(txt4.value);
    outtxt2.value = subtract(num1, num2);
}

btn2.addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const txt5 = document.getElementById("factor1");
const txt6 = document.getElementById("factor2");
const btn3 = document.getElementById("multiplyNumbers");
const outtxt3 = document.getElementById("product");


let multiply = (number1, number2) => number1 * number2;
function multiplyNumbers()
{
    let num1 = Number(txt5.value);
    let num2 = Number(txt6.value);
    outtxt3.value = multiply(num1, num2);
}

btn3.addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const txt7 = document.getElementById("dividend");
const txt8 = document.getElementById("divisor");
const btn4 = document.getElementById("divideNumbers");
const outtxt4 = document.getElementById("quotient");

function divide(number1, number2)
{
    return number1 / number2;
}
function divideNumbers()
{
    let num1 = Number(txt7.value);
    let num2 = Number(txt8.value);
    outtxt4.value = divide(num1, num2);
}

btn4.addEventListener('click', divideNumbers);

/* Decision Structure */

const txt9 = document.getElementById("subtotal");
const btn5 = document.getElementById("getTotal");
const chbx = document.querySelector("#member");

function totalDue(num1)
{
    if (chbx.checked == true)
    {
        num1 -= (num1 * .2);
    }
    else
    {
        num1;
    }
    return num1
}
function getTotal()
{
    let subTotal = Number(txt9.value);
    document.querySelector("#total").innerHTML = totalDue(subTotal);
}

btn5.addEventListener('click', getTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numArray.filter(number => number % 2 === 1);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numArray.reduce((sum, number) => sum + number);

/* Output Multiplied by 2 Array */

let multipliedNumArray = document.querySelector("#multiplied").innerHTML = numArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector("#sumOfMultiplied").innerHTML = multipliedNumArray.reduce((sum, number) => sum + number);