"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    
    let rate = Number(percent) / 100 / 12;

    let period = date.getFullYear() - new Date().getFullYear();

    let bodyOfLoan = Number(amount) - Number(contribution);

    let payment = bodyOfLoan * (rate + rate / (Math.pow((1 + rate), period) - 1));

    

    return (payment * period).toFixed(2);
}

function getGreeting(name) {
    
    if (name == "" || "undefined" || "null") {
        name = "Аноним";
    };

    return `Привет, мир! Меня зовут ${name}`;
}