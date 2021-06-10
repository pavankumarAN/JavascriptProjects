const form = document.getElementById('form');
const submit = document.getElementById('submit');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('confirmpassword');

function showError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    // console.log(formControl);
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // if(username.value==='') {
    //     showError(username, 'Username is required');
    // }else {
    //     showSuccess(username);
    // }

    // if(email.value === '') {
    //     showError(email, 'Email is required');
    // }else {
    //     showSuccess(email);
    // }


    checkRequired([username, email, password, cpassword]);

});

function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getId(input.id)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function getId(id) {
    return id[0].toUpperCase() + id.slice(1);
}