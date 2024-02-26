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

  // Retrieve existing user details from local storage or initialize empty array
  let userDetailsArray = JSON.parse(localStorage.getItem("UserDetails")) || [];

  // Add new user details to array
  userDetailsArray.push(userDetails);

  // Convert array to JSON string and store in local storage
  localStorage.setItem("UserDetails", JSON.stringify(userDetailsArray));

  // Clear form fields
  document.getElementById("username").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";

  // Update displayed user list
  displayUsers(userDetailsArray);
});

function displayUsers(users) {
  const userList = document.getElementById("userList");

  // Clear existing list items
  userList.innerHTML = "";

  // Loop through each user and create list item to display their details
  users.forEach((user) => {
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${user.Username}, Email: ${user.Email}, Phone: ${user.Phone}`;
    userList.appendChild(listItem);
  });
}
