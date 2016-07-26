// Part 1 - Delivery Location -- #B
function showTextarea(event) {
   
    var currentValue = event.target.value;
    if (currentValue === 'other') {
        document.getElementById('showThis').style.display = 'inline-block';
    } else {
        document.getElementById('showThis').style.display = 'none';
    }
}




// Part 1 - Delivery Location -- #C

function validateName(event) {
    if (event.target.value.match(/^[a-zA-Z]+$/)) {
        document.getElementById('warningForName').innerText = '';
    } else {
        document.getElementById('warningForName').innerText = 'Invalid name. Please try again.';
    }
}
function validateZipcode(event) {
    if (event.target.value.match(/^[0-9]{5}$/)) {
        document.getElementById('warningForZipcode').innerText = '';
    } else {
        document.getElementById('warningForZipcode').innerText = 'Invalid zip code. Please try again.';
    }
}
function validatePhone() {
    if (event.target.value.match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)) {
        document.getElementById('warningForPhone').innerText = '';
    } else {
        document.getElementById('warningForPhone').innerText = 'Invalid phone number. Please try again.';
    }
}
function validateEmail(event) {
    if (event.target.value.match(/[^@]+@[^@]+/)) {
        document.getElementById('warningForEmail').innerText = '';
    } else {
        document.getElementById('warningForEmail').innerText = 'Invalid email. Please try again.';
    }
}
function validateState(event) {
    if (event.target.value.match(/^[a-zA-Z]{2}$/)) {
        document.getElementById('warningForState').innerText = '';
    } else {
        document.getElementById('warningForState').innerText = 'Please enter two alphabet characters.';
    }
}

// functions to validate "Billing Information"
function validateBillingState(event) {
    if (event.target.value.match(/^[a-zA-Z]{2}$/)) {
        document.getElementById('billingWarningForState').innerText = '';
    } else {
        document.getElementById('billingWarningForState').innerText = 'Please enter two alphabet characters.';
    }
}
function validateBillingZipcode(event) {
    if (event.target.value.match(/^[0-9]{5}$/)) {
        document.getElementById('billingWarningForZipcode').innerText = '';
    } else {
        document.getElementById('billingWarningForZipcode').innerText = 'Invalid zip code. Please try again.';
    }
}

// functions to validate "Credit Card Information"
function validateCCNumber(event) {
    if(event.target.value.match(/^[0-9]{16}$/)) {
        document.getElementById('warningForCCNumber').innerText = '';
    } else {
        document.getElementById('warningForCCNumber').innerText = 'Invalid Card Number.'
    }
}
function validateCVC(event) {
    if (event.target.value.match(/^[0-9]{3}$/)) {
        document.getElementById('warningForCVC').innerText = '';
    } else {
        document.getElementById('warningForCVC').innerText = 'Invalid CVC Code.'
    }
}



// Part 2 - Build Your Order -- step 2
var handTossed = {
    small: 9.99,
    medium: 12.99,
    large: 14.99
}
var thinCrust = {
    medium: 11.99,
    large: 13.99
}
var nyStyle = {
    large: 16.99,
    extraLarge: 19.99
}
var glutenFree = {
    small: 10.99
}
var pizzaRadioArray = document.getElementsByClassName('pizzaRadio'); // pizzaRadioArray = <input>s of radio buttons
for (i = 0; i < pizzaRadioArray.length; i++) {
    pizzaRadioArray[i].addEventListener('click', function(event) { // each radio button <input> gets 'click' addEventListner
        var pizzaSelects = document.getElementsByClassName('doughSelect'); // pizzaSelects = <select> tags
        for (var j = 0; j < pizzaSelects.length; j++) { 
            pizzaSelects[j].classList.add('hidden'); // each <select> tag adds 'hidden' CSS class
        }
        var parent = event.target.parentElement; // parent = parent element of target of event object
        var selected = parent.querySelector('select'); // querySelector finds the first match using CSS selector.
        selected.classList.remove('hidden'); // "Show var selected!"
        var selectName = selected.name; // selectName = 'name' attribute of <select>
        if (selectName === 'handTossed') {
            selected.innerHTML = ''; // clears the text inbetween <select></select>
            for (choice in handTossed) { // 'choice' is a variable and indicates the keys of 'handTossed' object
                var option = document.createElement('option'); // "Create <option> tag"
                option.value = handTossed[choice]; // value of <option> = price
                option.text = choice + ': $' + handTossed[choice]; // "Write this between <option></option>."
                selected.appendChild(option); // add <option> tag under <select>
            }
        }
        if (selectName === 'thinCrust') {
            selected.innerHTML = '';
            for (choice in thinCrust) { // 'choice' here means 'medium' and 'large'
                var option = document.createElement('option'); // "Make <option></option>."
                option.value = thinCrust[choice]; 
                option.text = choice + ': $' + thinCrust[choice];
                selected.appendChild(option);
            }
        }
        if (selectName === 'nyStyle') {
            selected.innerHTML = '';
            for (choice in nyStyle) {
                var option = document.createElement('option');
                option.value = nyStyle[choice];
                option.text = choice + ': $' + nyStyle[choice];
                selected.appendChild(option);
            }
        }
        if (selectName === 'glutenFree') {
            selected.innerHTML = '';
            for (choice in glutenFree) {
                var option = document.createElement('option');
                option.value = glutenFree[choice];
                option.text = choice + ': $' + glutenFree[choice];
                selected.appendChild(option);
            }
        }
    });
} 




// General Things to Consider -- step 1

function disableElements() {
    document.getElementById('cheeseOptions').disabled = true;
    document.getElementById('sauceOptions').disabled = true;
    var toppingArray = document.getElementsByClassName('toppings');
    for (i = 0; i < toppingArray.length; i++) {
        toppingArray[i].disabled = true;
    }
}
function undoDisable() {
    document.getElementById('cheeseOptions').disabled = false;
    document.getElementById('sauceOptions').disabled = false;
    var toppingArray = document.getElementsByClassName('toppings');
    for (i = 0; i < toppingArray.length; i++) {
        toppingArray[i].disabled = false;
    }
}
disableElements(); // disable cheese, sauce, topping options first
for (i = 0; i < pizzaRadioArray.length; i++) {
    pizzaRadioArray[i].addEventListener('click', undoDisable); // if a radio button's clicked, undo disable function
}




// General Things to Consider -- step 2
function getDoughPrice() {
    var doughPrice = 0; // sets the initial dough price to 0
    var doughArray = document.getElementsByClassName('pizzaRadio');
    for (i = 0; i < doughArray.length; i++) {
        if (doughArray[i].checked) { // see which dough option is checked
            var selectTag = doughArray[i].parentElement.querySelector('.doughSelect'); // 'selectTag' = <select> tag of selected radio button
            return Math.round(parseFloat(selectTag.value) *100) / 100;
        }
    }
}
function getCheesePrice() {
    var cheeseTotal = document.getElementById('cheeseOptions').value;
    return parseFloat(cheeseTotal);
}
function getSaucePrice() {
    var sauceTotal = document.getElementById('sauceOptions').value;
    return parseFloat(sauceTotal);
}
function getToppingPrice() {
    var toppingArray = document.getElementsByClassName('toppings');
    var selectedToppings = 0;
    for (i = 0; i < toppingArray.length; i++) {
        if (toppingArray[i].checked) {
            selectedToppings += parseFloat(toppingArray[i].value);
        }
    }
    return selectedToppings;
}
function totalCost() {
    var totalCost = Math.round((getDoughPrice() + getCheesePrice() + getSaucePrice() + getToppingPrice()) * 100 ) / 100;
    document.getElementById('total').textContent = '$' + totalCost;
}
// functions to get the current month & year
function thisMonth() {
    var ddmmyyyy = new Date();
    return ddmmyyyy.getMonth() + 1; // because 0 is January(1).
}
function thisYear() {
    var ddmmyyyy = new Date();
    return ddmmyyyy.getFullYear();
}
function validateExpDate() {
    var userMonth = parseInt(document.getElementById('monthExpDate').value);
    var userYear = parseInt(document.getElementById('yearExpDate').value);
    if (userYear === thisYear()) {
        if (userMonth >= thisMonth()) {
            document.getElementById('warningForExpDate').innerText = '';
        } else {
            document.getElementById('warningForExpDate').innerText = 'Expired Card. Please use a different card.';
        }
    } else {
        document.getElementById('warningForExpDate').innerText = '';
    } 
}


window.onload = function() {
    
    var dropdown = document.getElementById('addressType');
    dropdown.addEventListener('change', showTextarea);
    var name = document.getElementById('name');
    name.addEventListener('blur', validateName);
    var zipcode = document.getElementById('zipcode');
    zipcode.addEventListener('blur', validateZipcode);
    var phoneNumber = document.getElementById('phoneNumber');
    phoneNumber.addEventListener('blur', validatePhone);
    var email = document.getElementById('email');
    email.addEventListener('blur', validateEmail);
    
    // Billing Information
    var state = document.getElementById('state');
    state.addEventListener('blur', validateState);
    var billingState = document.getElementById('billingState');
    billingState.addEventListener('blur', validateBillingState);
    var billingZipcode = document.getElementById('billingZipcode');
    billingZipcode.addEventListener('blur', validateBillingZipcode);
    
    // Credit Card Information
    var ccNumber = document.getElementById('ccNumber');
    ccNumber.addEventListener('blur', validateCCNumber);
    var cvc = document.getElementById('cvcCode');
    cvc.addEventListener('blur', validateCVC);
    var monthExpDate = document.getElementById('monthExpDate');
    monthExpDate.addEventListener('change', validateExpDate);
    var yearExpDate = document.getElementById('yearExpDate');
    yearExpDate.addEventListener('change', validateExpDate);
    
    document.getElementById('cheeseOptions').addEventListener('change', totalCost);
    document.getElementById('sauceOptions').addEventListener('change', totalCost);
    document.getElementById('toppingsID').addEventListener('click', function(event) { // use 'event' to see which input/class is clicked.
        if (event.target.classList.contains('toppings')) {
            totalCost();
        }
    });
    document.getElementById('doughOptionID').addEventListener('click', function(event) {
        if (event.target.classList.contains('pizzaRadio')) {
            totalCost();
        } 
    });
    var doughArray = document.getElementsByClassName('doughSelect');
    for (i = 0; i < doughArray.length; i++) {
        doughArray[i].addEventListener('change', totalCost);
    }


    
    
// General Things to Consider -- step 3 
    
    var submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', function(event){
    event.preventDefault(); // prevents the page from going to the next page or showing a new page
    var confirmMsg = window.confirm('Are you sure you are done with your order?');
    if (confirmMsg === true) {
        document.getElementById('billingInfo').style.display = 'block';
    } else {
        document.getElementById('billingInfo').style.display = 'none';
    }
    });

    var billingInfo = document.getElementById('billingInfo');
    billingInfo.addEventListener('click', function() {
        document.getElementById('billingStreet').value = document.getElementById('streetAddress').value;
        document.getElementById('billingUnit').value = document.getElementById('unitNumber').value;
        document.getElementById('billingCity').value = document.getElementById('city').value;
        document.getElementById('billingState').value = document.getElementById('state').value;
        document.getElementById('billingZipcode').value = document.getElementById('zipcode').value;
    });
    
} // window.onload function ends here.




























