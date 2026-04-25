document.addEventListener('DOMContentLoaded', function() {

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            
            if (user === "Dr.Nabeel" && pass === "BestWebDr@IAU") {
                window.location.href = "dashboard.html";
            } else {
                alert("Incorrect username or password. Please try again.");
            }
        });
    }
 });




if (e.target.closest('#addServiceBtn')) {
            const n = prompt("What is the name of the new service?");
            const p = prompt("What is the price in SAR?");
            const i = prompt("Paste the Image URL (or leave for default):", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085");
