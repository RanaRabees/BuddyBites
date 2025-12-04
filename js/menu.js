const itemsPerPage = 4;
const container = document.getElementById('food-items-container');
const pagination = document.getElementById('pagination');
const allItems = Array.from(container.children);
let currentPage = 1;
let currentFilter = 'all';

// Category buttons
const categoryButtons = document.querySelectorAll('.food-category button');
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        currentFilter = btn.getAttribute('data-food-type');
        currentPage = 1; // reset to first page
        showPage(currentPage);
    });
});

function showPage(page) {
    // Filter items based on category
    const filteredItems = (currentFilter === 'all')
        ? allItems
        : allItems.filter(item => item.classList.contains(`${currentFilter}-type`));

    // Hide all items first
    allItems.forEach(item => item.style.display = 'none');

    // Show only current page items
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    filteredItems.forEach((item, index) => {
        if (index >= start && index < end) item.style.display = 'block';
    });

    // Show pagination only if more than 1 page exists
    if (filteredItems.length > itemsPerPage) {
        createPagination(filteredItems);
        pagination.style.display = 'block';
    } else {
        pagination.style.display = 'none';
    }
}

function createPagination(filteredItems) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.innerText = i;
        btn.className = (i === currentPage) ? 'active' : '';
        btn.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
        });
        pagination.appendChild(btn);
    }
}

// Initialize
showPage(currentPage);
