
const cardName =  document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const cardDate = document.getElementById("cardDate");
const cardCvc  = document.getElementById("cardCvc");

const form = document.getElementById("form");
const username = document.getElementById("formName");
const number = document.getElementById("formNumber");
const month = document.getElementById("formMonth");
const year = document.getElementById("formYear");
const cvc = document.getElementById("formCvc");

const validationObj = {
    username: false,
    number: false,
    month: false,
    year: false,
    cvc: false,
}

if (Object.values(validationObj).every(Boolean)) {
    document.getElementById("submitButton").removeAttribute('disabled');
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const error = inputControl.querySelector(".error-message");
    
    error.innerText = message;
};

const setSucces = element => {
    const inputControl = element.parentElement;
    const error = inputControl.querySelector(".error-message");
    
    error.innerText = "";
}

form.addEventListener("submit", e => {
    e.preventDefault();
    if (Object.values(validationObj).every(Boolean)) {
            document.getElementById("form-container").style.display = "none";
            document.getElementById("success-section").style.display = "flex";
    }
});

username.addEventListener("input", e => {
    cardName.innerText = username.value;

    if (username.value == "") {
        cardName.innerText = "Jane Appleseed"
    };
})

number.addEventListener("input", e => {
    cardNumber.innerText = number.value;

    if (number.value == "") {
        cardNumber.innerText = "0000 0000 0000 0000";
    };
})

month.addEventListener("input", e => {
    cardDate.innerText = `${month.value}/${year.value}`;

    if (month.value == "") {
        cardDate.innerText = `00/${year.value}`;
    };
})

year.addEventListener("input", e => {
    cardDate.innerText = `${month.value}/${year.value}`;

    if (year.value == "") {
        cardDate.innerText = `${month.value}/00`;
    };
})

cvc.addEventListener("input", e => {
    cardCvc.innerText = cvc.value;

    if (cvc.value == "") {
        cardCvc.innerText = `000`;
    };
})

username.addEventListener("blur", e => {
    const re = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;

    if (username.value == "") {
        setError(username, "Can't be blank!");
        validationObj.username = false;
    } else if (re.test(username.value) === false) {
        setError(username, "Please, enter a valid name!");
        validationObj.username = false;
    } else {
        setSucces(username);
        validationObj.username = true;
    }
})

number.addEventListener("blur", e => {
const re = /^[0-9]*$/;

    if (number.value == "") {
        setError(number, "Can't be blank!");
        validationObj.number = false;
    } else if (re.test(number.value) === false) {
        setError(number, "Wrong format, numbers only!");
        validationObj.number = false;
    } else if (number.value.length < 16) {
        setError(number, "Please, enter the full 16 digit code!");
        validationObj.number = false;
    } else {
        setSucces(number);
        validationObj.number = true;
    }
})

year.addEventListener("blur", e => {
    const re = /^[0-9]*$/;

    if (year.value == "" || month.value == "") {
        setError(document.getElementById("input-date"), "Can't be blank!");
        validationObj.year = false;
    } else if (re.test(year.value) === false) {
        setError(document.getElementById("input-date"), "Wrong format, numbers only!");
        validationObj.year = false;
    } else if (year.value.length < 2) {
        setError(document.getElementById("input-date"), "Please, enter two digits!");
        validationObj.year = false;
    } else {
        setSucces(document.getElementById("input-date"));
        validationObj.year = true;
        validationObj.month = true;
    }
})

month.addEventListener("blur", e => {
    const re = /^[0-9]*$/;

    if (year.value == "" || month.value == "") {
        setError(document.getElementById("input-date"), "Can't be blank!");
        validationObj.month = false;
    } else if (re.test(month.value) === false) {
        setError(number, "Wrong format, numbers only!");
        validationObj.month = false;
    } else if (month.value.length < 2) {
        setError(number, "Please, enter two digits!");
        validationObj.month = false;
    } else {
        setSucces(document.getElementById("input-date"));
        validationObj.month = true;
        validationObj.year = true;
    }
});

cvc.addEventListener("blur", e => {
    const re = /^[0-9]*$/;

    if (cvc.value == "") {
        setError(cvc, "Can't be blank!");
        validationObj.cvc = false
    } else if (re.test(cvc.value) === false) {
        setError(cvc, "Wrong format, numbers only!");
        validationObj.cvc = false;
    } else if (cvc.value.length < 3) {
        setError(cvc, "Please, enter the full code!");
        validationObj.cvc = false;
    } else {
        setSucces(cvc);
        validationObj.cvc = true;
    }
})

    console.log(validationObj);
