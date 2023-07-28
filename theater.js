"use strict";

// Variables
const generalTicket = 20;
const discountTicket = 10;
const matineeDiscount = 3;
let purchaseButton = document.querySelector('button');


// Functions
function buyTicket() {
    let age = prompt('What is your age?');
    let cost = getBaseTicketCost(age);
    const isMatinee = prompt('Are you attending the matinee?').toLowerCase();
    cost = applyMatinee(cost, isMatinee);
    alert(`The price of your ticket is: $${cost}`);
}

function getBaseTicketCost(age) {
    if (age > 0 && age <= 12 || age >= 65) {
       return discountTicket;
    } else if (age > 12 && age < 65) {
        return generalTicket;
    } else {
        alert('Please input a valid age.');
    }
}

function applyMatinee(cost, isMatinee) {
    if (isMatinee === 'yes' || isMatinee === 'y') {
        return cost - matineeDiscount;
    }
    return cost;
}

// Events
purchaseButton.onclick = buyTicket;