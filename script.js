// Part 1 - Delivery Location -- #B
function showTextarea(event) {
    var currentValue = event.target.value;
    if (currentValue === 'other') {
        document.getElementById('showThis').style.display = 'inline-block';
    } else {
        document.getElementById('showThis').style.display = 'none';
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
    var state = document.getElementById('state');
    state.addEventListener('blur', validateState);
};


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
var pizzaRadioArray = document.getElementsByClassName('pizzaRadio');
for (i = 0; i < pizzaRadioArray.length; i++) {
    pizzaRadioArray[i].addEventListener('click', function(event) {
        var pizzaSelects = document.getElementsByClassName('pizzaMenuSelect');
        for (var j = 0; j < pizzaSelects.length; j++) {
            pizzaSelects[j].classList.add('hidden');
        }
        var parent = event.target.parentElement;
        var select = parent.querySelector('select'); // querySelector finds the first match using CSS selector.
        select.classList.remove('hidden');
        var selectName = select.name; // handTossed, etc...
        if (selectName === 'handTossed') {
            select.innerHTML = '';
            for (choice in handTossed) {
                var option = document.createElement('option');
                option.value = handTossed[choice]; // this is the money
                option.text = choice + ': $' + handTossed[choice];
                select.appendChild(option);
            }
        }
    });
}
    




