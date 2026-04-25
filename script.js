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
const servicesGrid = document.getElementById('servicesGrid');
document.addEventListener('click', function(e) {

    if (e.target.closest('.btn-delete')) {
        const card = e.target.closest('article');

        if (confirm("Are you sure you want to permanently delete this service?")) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';

            setTimeout(() => card.remove(), 400);
        }
    }
});

if (e.target.closest('.btn-edit')) {
            const card = e.target.closest('.service-card');
            const title = card.querySelector('h3');
            const price = card.querySelector('.price');
            const img = card.querySelector('img');
    const newTitle = prompt("Update Service Name:", title.innerText);
            const newPrice = prompt("Update Price (Number only):", price.innerText.replace(' ريال', ''));

if (e.target.closest('#addServiceBtn')) {
            const n = prompt("What is the name of the new service?");
            const p = prompt("What is the price in SAR?");
            const i = prompt("Paste the Image URL (or leave for default):", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085");
