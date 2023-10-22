function validateForm() {
      
    document.getElementById('errorMessages').innerHTML = '';

  
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;


    if (!/^[a-zA-Z]+$/.test(name.trim())) {
        displayError('Name should contain only letters.');
        return;
    }


    if (password.trim() === '') {
        displayError('Password is required.');
        return;
    }

    if (password.length < 8) {
        displayError('Password must be at least 8 characters.');
        return;
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        displayError('Password must contain at least one special character.');
        return;
    }

  
    alert('Form submitted successfully!');
}

function displayError(message) {
    var errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = message;
}