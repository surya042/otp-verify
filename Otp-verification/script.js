// Function to generate a random OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
}

// Function to send OTP to the server
function sendOTPToServer(email, otp) {
    $.ajax({
        type: 'POST',
        url: '/sendotp',
        data: JSON.stringify({ email, otp }),
        contentType: 'application/json',
        success: function (response) {
            console.log(response);
        },
        error: function (error) {
            console.error(error);
        },
    });
}

// Event listener for the "Generate OTP" button
document.getElementById('generateOTP').addEventListener('click', function () {
    const otpInput = document.getElementById('otp');
    const generatedOTP = generateOTP();
    otpInput.value = generatedOTP;

    // Get the user's email from the form
    const userEmail = document.getElementById('email').value;

    // Send the OTP to the server
    sendOTPToServer(userEmail, generatedOTP);
});

// Event listener for the registration form submission
document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission

    // Retrieve form input values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const otp = document.getElementById('otp').value;
    const generatedOTP = document.getElementById('generatedOTP').value;
    const userEmail = document.getElementById('userEmail').value;

    // Perform validation (you can add more validation rules as needed)
    if (username === '' || email === '' || password === '' || otp === '') {
        document.getElementById('message').innerHTML = 'All fields are required.';
    } else if (otp !== generatedOTP) {
        document.getElementById('message').innerHTML = 'Invalid OTP. Please check your email.';
    } else if (email !== userEmail) {
        document.getElementById('message').innerHTML = 'Email mismatch. Please enter the same email you received the OTP at.';
    } else {
        document.getElementById('message').innerHTML = 'Registration successful!';
        // You can send the registration data to the server for further processing here
    }
});
