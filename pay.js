// Format credit card number with dashes
document.getElementById('cardNum').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
        value = value.match(new RegExp('.{1,4}', 'g')).join('-');
    }
    e.target.value = value;
});// Form validation
document.querySelector('form').addEventListener('submit', function(e) {
    let isValid = true;
    const inputs = this.querySelectorAll('input[required], select[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    // Validate email format
    const email = document.getElementById('email');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value && !emailPattern.test(email.value)) {
        isValid = false;
        email.style.borderColor = 'red';
        alert('Please enter a valid email address');
    }
    
    // Validate CVV length
    const cvv = document.getElementById('cvv');
    if (cvv.value && cvv.value.length < 3) {
        isValid = false;
        cvv.style.borderColor = 'red';
        alert('CVV must be at least 3 digits');
    }
    
    if (!isValid) {
        e.preventDefault();
        alert('Please fill all required fields correctly');
    }
});