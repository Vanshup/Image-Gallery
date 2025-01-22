document.addEventListener("DOMContentLoaded", function() {
  // Signup form handling
  document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
      localStorage.setItem('vanshitap147', username);
      localStorage.setItem('1234', password);
      document.getElementById('formMessage').textContent = 'Sign up successful!';
      document.getElementById('formMessage').style.color = 'green';
    } else {
      document.getElementById('formMessage').textContent = 'Please fill out all fields.';
      document.getElementById('formMessage').style.color = 'red';
    }
  });

  // Login form handling
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;
    const storedUsername = localStorage.getItem('vanshitap147');
    const storedPassword = localStorage.getItem('1234');
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
      document.getElementById('loginMessage').textContent = 'Login successful!';
      document.getElementById('loginMessage').style.color = 'green';
      setTimeout(function() {
        window.location.href = 'index.html'; // Redirect to home page after successful login
      }, 1000); // Redirect after 1 second to allow user to see the success message
    } else {
      document.getElementById('loginMessage').textContent = 'Invalid username or password.';
      document.getElementById('loginMessage').style.color = 'red';
    }
  });

  // Gallery filter functionality
  const filterContainer = document.querySelector(".gallery-filter"),
    galleryItems = document.querySelectorAll(".gallery-item"),
    searchInput = document.getElementById("searchInput");

  filterContainer.addEventListener("click", function(event) {
    if (event.target.classList.contains("filter-item")) {
      filterContainer.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      const filterValue = event.target.getAttribute("data-filter");
      galleryItems.forEach(function(item) {
        if (item.classList.contains(filterValue) || filterValue === 'all') {
          item.classList.remove("hide");
          item.classList.add("show");
        } else {
          item.classList.remove("show");
          item.classList.add("hide");
        }
      });
    }
  });

  // Search functionality
  document.querySelector(".search-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();
    galleryItems.forEach(function(item) {
      const altText = item.querySelector("img").alt.toLowerCase();
      if (altText.includes(searchTerm)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
