// important functions
function openNewPage (url) {
    windows.location.href = url;
}
//  Initializing Emailjs
(function () {
  emailjs.init("AOUrr576y84N2sKQK")
})

// registration section 
var details = document.querySelectorAll(".button").length;
  var users =[];

// for loop added to it 
for(var i = 0; i < details; i++){
// Adding Event listener with property submit
 document.getElementById('myForm').addEventListener('submit', function(event) {
  (event).preventDefault();
  // Check if conditionals are Valid or true
  let isValid = true;
  
  // Clear previous messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';
  document.getElementById('confirmPasswordError').textContent = '';
  document.getElementById('formMessage').textContent = '';
 
  // Validate Name
  const name = document.getElementById('name').value;
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    isValid = false;
  }

  // Validate Email
  const email = document.getElementById('email').value;
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById('emailError').textContent = 'Email is Incorrect';
    isValid = false;
  }

  // Validate Password
  const password = document.getElementById('password').value;
  if (password === "") {
    document.getElementById('passwordError').textContent = 'Password is required';
    isValid = false;
  }

    // confirm password
    const confirmPassword = document.getElementById('confirmPassword').value;
    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").textContent = 'confirm Password is required';
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('emailError').textContent = 'Email is Incorrect';
      isValid = false;
    }

  // If all fields are valid
  if (isValid) {
    document.getElementById('formMessage').textContent = 'Registered successfully!';
    document.getElementById('formMessage').className = 'success';
  } else {
    document.getElementById('formMessage').textContent = 'Please fill in details required.';
    document.getElementById('formMessage').className = 'error';
  }
  // Object verification
  // if (user === name, email) {
  //   document.getElementById('formMessage').textContent = 'You already have a Registered Account!';
  //   document.getElementById('formMessage').className = 'success';
  // } else {

  // }
    // object created
    const user = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }
    let addUser = users.push(user)

    

})};



// Login section
var details = document.querySelectorAll(".loginButton").length;
// for loop added to it 

for(var i = 0; i < details; i++){

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let isValid = true;
  
  // Clear previous messages
  document.getElementById('loginNameError').textContent = '';
  document.getElementById('loginPasswordError').textContent = '';
  document.getElementById('loginMessage').textContent = '';
 
  // Validate Name
  const loginName = document.getElementById('loginName').value;
  if (loginName === '') {
    document.getElementById('loginNameError').textContent = 'Name is required';
    isValid = false;
  } else if (loginName === users.name) {
    document.getElementById('loginNameError').textContent = 'Name Is Incorrect';
    isValid = false;
  }

  const loginPassword = document.getElementById('loginPassword').value;
  if (loginPassword === '') {
    document.getElementById('loginPasswordError').textContent = 'Password is required!';
    isValid = false;
  } else if (loginPassword === users.password) {
    document.getElementById('passwordError').textContent = 'Password does not match!';
    isValid = false;
  }

  // Object verification
  if (addUser === users.name, users.confirmPassword) {
    document.getElementById('loginMessage').textContent = 'Please re-check Details !';
    isValid = false;
  } else {
    document.getElementById('loginMessage').textContent = '-In successfully!';
    document.getElementById('loginMessage').className = 'success';
  } 

  // If all fields are valid
  if (isValid) {
    document.getElementById('loginMessage').textContent = 'Logged-In successfully!';
    document.getElementById('loginMessage').className = 'success';
  } else {
    document.getElementById('loginMessage').textContent = 'Please fill in details required.';
    document.getElementById('loginMessage').className = 'error';

    document.location.href = 'body.html';
  }

  // button login
  if (usernameInput === validUsername && passwordInput === validPassword) {
    // Show the spinner
    document.getElementById('spinner').style.display = 'block';

    // Simulate a 3-second loading time
    setTimeout(() => {
        document.getElementById('spinner').style.display = 'none';
        document.getElementById('message').textContent = 'Login Successful!';
    }, 3000);
} else {
    document.getElementById('message').textContent = 'Invalid username or password.';
}

  const serviceID = "service_nasu71m"
  const templateID = "template_9wuqu9m"

  emailjs.send (serviceID, templateID, user)
  .then (
    res => {
      if (isValid) {
        document.getElementById('loginMessage').textContent = 'Logged-In successfully!';
        document.getElementById('loginMessage').className = 'success';
        console.log(res)
        alert("Your Message sent successfully!")
      } 
    }
  )
    
})
};
