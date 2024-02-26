const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;

  const userDetails = {
    Username: username,
    Email: email,
    Phone: phone,
  };

  const userDetailsString = JSON.stringify(userDetails);

  localStorage.setItem("User Details", userDetailsString);

  console.log(localStorage);

  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
});
