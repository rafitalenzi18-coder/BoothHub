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
const newImg = prompt("Update Image URL (Optional):", img.src);
    if (newTitle !== null && newTitle !== "") title.innerText = newTitle;
            if (newPrice !== null && newPrice !== "") price.innerText = newPrice + " ريال";
            if (newImg !== null && newImg !== "") img.src = newImg;
        }

if (e.target.closest('#addServiceBtn')) {
            const n = prompt("What is the name of the new service?");
            const p = prompt("What is the price in SAR?");
            const i = prompt("Paste the Image URL (or leave for default):", "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085");

    if (n && p) {
                const newCard = document.createElement('article');
                newCard.className = 'service-card';
                newCard.style.opacity = '0';
                newCard.innerHTML = `
                    <img src="${i}" alt="${n}">
                    <div class="service-info">
                        <h3>${n}</h3>
                        <span class="price">${p} ريال</span>
                        <div class="card-actions">
                            <button class="btn-edit"><i class="fa fa-pen"></i> Edit</button>
                            <button class="btn-delete"><i class="fa fa-trash"></i></button>
                        </div>
                    </div>
                `;
                servicesGrid.insertBefore(newCard, document.getElementById('addServiceBtn'));
                setTimeout(() => newCard.style.opacity = '1', 10);
            }
        }
const defaultData = [
        { name: "Jury Albuzaid", booth: "Coffee Booth", date: "Apr 20", amount: 1500, status: "Accepted" },
{ name: "Fajer Alsharekh", booth: "Photography Booth", date: "Apr 19", amount: 2000, status: "Pending"},
{ name: "Roba Alqhtani", booth: "Coffee Booth", date: "Apr 18", amount: 1500, status: "Rejected" },
{ name: "Retaj Afit", booth: "Photography Booth ", date: "Apr 15", amount: 2000, status: "Accepted" },
{ name: "Dr. Nabeel", booth: "Coffee Booth ", date: "Apr 25", amount:1500, status: "Accepted" },
{ name: "Layan Omar", booth: "Coffee Booth", date: "Apr 22", amount:1500, status: "Pending" },
{ name: "Fahad Saad", booth: "Photography Booth", date: "Apr 10", amount:2000, status: "Accepted" },
{ name: "Reem Saleh", booth: "Photography Booth", date: "Apr 24", amount: 2000, status: "Pending" }
    ];



let allOrders = JSON.parse(localStorage.getItem('boothOrders')) || defaultData;
    let currentPage = 1;
    const rowsPerPage = 4;

    function getInitials(name) {
        let p = name.split(' ');
        return p.length >= 2 ? (p[0][0] + p[1][0]).toUpperCase() : name.substring(0, 2).toUpperCase();
    }


    function displayOrders() {
        const tbody = document.getElementById('ordersTableBody');
        if (!tbody) return;

        tbody.innerHTML = "";
       
        const colorClasses = ['color-beige', 'color-gray', 'color-green', 'color-blue', 'color-pink'];
        
        let start = (currentPage - 1) * rowsPerPage;
        let end = start + rowsPerPage;
        let pageItems = allOrders.slice(start, end);

        pageItems.forEach((order, index) => {
            let initials = getInitials(order.name);
            let assignedColor = colorClasses[index % colorClasses.length];
            
if (document.getElementById('prevBtn'))
    document.getElementById('prevBtn').disabled = (currentPage === 1);

if (document.getElementById('nextBtn'))
    document.getElementById('nextBtn').disabled = (currentPage * rowsPerPage >= allOrders.length);
    });
}        
                        


window.deleteOrder = function(idx) {
    if (confirm("Are you sure you want to delete this order?")) {
        allOrders.splice(idx, 1);
        localStorage.setItem('boothOrders', JSON.stringify(allOrders));
        displayOrders();
    }
};

window.sortOrders = function(type) {
    if (type === 'highest') allOrders.sort((a, b) => b.amount - a.amount);
    if (type === 'newest') allOrders.sort((a, b) => new Date(b.date) - new Date(a.date));

    currentPage = 1;
    displayOrders();
    document.getElementById('filterMenu').style.display = 'none';
};
