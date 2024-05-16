document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Reset errors
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("ageError").textContent = "";

  // Get form values
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value.trim();
  var age = parseInt(document.getElementById("age").value);

  var valid = true;

  // Validate email
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required";
    valid = false;
  }

  // Validate password
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required";
    valid = false;
  }

  // Validate age
  if (isNaN(age) || age <= 0) {
    document.getElementById("ageError").textContent = "Age must be a positive number";
    valid = false;
  }

  // Verify email and password
  if (valid && !verifyCredentials(email, password)) {
    document.getElementById("emailError").textContent = "Invalid email or password";
    valid = false;
  }
  function verifyCredentials(email, password) {

  var validEmail = "abcd@gmail.com";
  var validPassword = "123";
  
  return email === validEmail && password === validPassword;
}

  if (valid) {
    // Display boxes equal to age
    var boxesHTML = "";
    for (var i = 0; i < age; i++) {
      boxesHTML += '<div style="width: 50px; height: 50px; background-color: gray; display: inline-block; margin: 5px;"></div>';
    }
    document.getElementById("boxes").innerHTML = boxesHTML;
  }
});


