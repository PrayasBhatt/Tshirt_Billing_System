let isLogin = true;
const formBox = document.getElementById("formBox");

function toggleForm() {
  if (isLogin) {
    formBox.innerHTML = `
      <h2 id="formTitle" class="text-2xl font-bold text-center text-blue-900 mb-6">Signup</h2>
      <input id="nameInput" type="text" placeholder="Full Name" 
             class="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
      <input id="emailInput" type="email" placeholder="Email" 
             class="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
      <input id="passwordInput" type="password" placeholder="Password" 
             class="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
      <button onclick="validateLogin()" 
              class="w-full bg-blue-900 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
        Signup
      </button>
      <p class="text-center text-sm mt-4">Already have an account? 
        <span onclick="toggleForm()" class="text-blue-700 font-semibold cursor-pointer">Login</span>
      </p>
    `;
  } else {
    formBox.innerHTML = `
      <h2 id="formTitle" class="text-2xl font-bold text-center text-blue-900 mb-6">Login</h2>
      <input id="emailInput" type="email" placeholder="Email" 
             class="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
      <input id="passwordInput" type="password" placeholder="Password" 
             class="w-full px-4 py-2 mb-4 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
      <button onclick="validateLogin()" 
              class="w-full bg-blue-900 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold transition">
        Login
      </button>
      <p class="text-center text-sm mt-4">Don't have an account? 
        <span onclick="toggleForm()" class="text-blue-700 font-semibold cursor-pointer">Signup</span>
      </p>
    `;
  }
  isLogin = !isLogin;
}

function validateLogin() {
  const email = document.getElementById("emailInput").value;
  const password = document.getElementById("passwordInput").value;

  if (!email.endsWith("@gmail.com")) {
    alert("Only @gmail.com emails are allowed!");
    return;
  }
  if (password.trim() === "") {
    alert("Please enter your password.");
    return;
  }

  window.location.href = "billing.html";
}
