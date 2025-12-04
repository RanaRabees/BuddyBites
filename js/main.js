// chatbotscript

var script = document.createElement('script');
script.id = 'chatbotscript';
script.dataset.accountid = '4rNv2I/TxeuQ4yXOdvMKIA==';
script.dataset.websiteid = 'eV9CCL/fIg9KNly2bYrCpw==';
script.dataset.apidomain = 'https://api.robofy.ai/';
script.src = 'https://app.robofy.ai/bot/js/common.js?v=' + new Date().getTime();
document.head.appendChild(script);




// ===============================
// BACK TO TOP BUTTON VISIBILITY
// ===============================

// Select the "back to top" button
let backToTopBtn = document.querySelector('.back-to-top')

// When the user scrolls the page...
window.onscroll = () => {
    // Check if the user scrolled down more than 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        // Show the button (using flex to center content)
        backToTopBtn.style.display = 'flex'
    } else {
        // Hide the button again
        backToTopBtn.style.display = 'none'
    }
}



// ===============================
// TOP NAV MENU ACTIVE STATE
// ===============================

// Get all menu items that have the class 'menu-item'
let menuItems = document.getElementsByClassName('menu-item')

// Convert HTMLCollection into an array so we can loop easily
Array.from(menuItems).forEach((item, index) => {
    item.onclick = (e) => {
        // Find currently active menu item
        let currMenu = document.querySelector('.menu-item.active')

        // Remove highlight from current one
        currMenu.classList.remove('active')

        // Add highlight to the clicked one
        item.classList.add('active')
    }
})



// ===============================
// FOOD CATEGORY FILTER
// ===============================

// Select the big wrapper containing all food items
let foodMenuList = document.querySelector('.food-item-wrap')

// Select the category button container
let foodCategory = document.querySelector('.food-category')

// Select all category buttons inside it
let categories = foodCategory.querySelectorAll('button')

// Loop through each category button
Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        // Remove 'active' from currently selected category
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active')

        // Add 'active' to the clicked category
        e.target.classList.add('active')

        // Change the class of the food item container based on the clicked button
        // This is likely used in CSS to filter items
        foodMenuList.classList = 'food-item-wrap ' + e.target.getAttribute('data-food-type')
    }
})



// ===============================
// SCROLL ANIMATIONS
// ===============================

// Use requestAnimationFrame for smooth animation, fallback to setTimeout
let scroll = window.requestAnimationFrame || function (callback) {
    window.setTimeout(callback, 1000 / 60)
}

// Select all elements that should animate on scroll
let elToShow = document.querySelectorAll('.play-on-scroll')

// Function to check if an element is on screen
isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        // Element is above the top but its bottom is still visible
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        // Element is larger than the viewport but overlaps the bottom
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)
            && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        // Entire element is inside the viewport
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

// Loop function to track elements and add animation class
loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            // Start animation
            item.classList.add('start')
        } else {
            // Remove animation (optional depending on design)
            item.classList.remove('start')
        }
    })

    // Repeat this loop smoothly
    scroll(loop)
}

loop() // Start the animation checker



// ===============================
// MOBILE NAVIGATION BAR
// ===============================

// Select all mobile navigation buttons
let bottomNavItems = document.querySelectorAll('.mb-nav-item')

// Select the indicator (moving highlight bar)
let bottomMove = document.querySelector('.mb-move-item')

// Loop through each mobile nav item
bottomNavItems.forEach((item, index) => {
    item.onclick = (e) => {
        // Remove active state from the current one
        let crrItem = document.querySelector('.mb-nav-item.active')
        crrItem.classList.remove('active')

        // Add active to clicked item
        item.classList.add('active')

        // Move the highlight bar (25% per item if there are 4 items)
        bottomMove.style.left = index * 25 + '%'
    }
})

// Navbar Code
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});

// Reviews SLider

$("#testimonial-slider").owlCarousel({
    items: 3,
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 600,
    nav: true,
    dots: true,
    navText: ["<", ">"],
    animateOut: "rotate",
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 }
    }
});


// Review Form
const form = document.querySelector('.review-form');
const button = form.querySelector('button');
const requiredFields = form.querySelectorAll('[required]');

// Check if all required fields are filled
function checkFields() {
    let allFilled = true;
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            allFilled = false;
        }
    });

    if (allFilled) {
        button.disabled = false; // enable button
    } else {
        button.disabled = true; // keep disabled
    }
}

// Listen to input events on required fields
requiredFields.forEach(field => {
    field.addEventListener('input', checkFields);
});

// On form submit
form.addEventListener('submit', function (e) {
    alert("Thank you! Your review has been submitted.");
    e.preventDefault(); // prevent default form submission

    // Change button color to indicate success
    button.style.background = '#4CAF50'; // green
    button.textContent = "Submitted!";

    // Clear all fields
    form.reset();

    // Disable button again after clearing
    button.disabled = true;

    // Reset button color back to original after short delay
    setTimeout(() => {
        button.style.background = '#9d0f0f';
        button.textContent = "Submit Review";
    }, 3000);

});

// Counter

var a = 0;
$(window).scroll(function () {
    var oTop = $('.bb-counter-grid').offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
            var $this = $(this),
                countTo = $this.attr("data-count");

            $({ countNum: $this.text() }).animate(
                { countNum: countTo },
                {
                    duration: 2000,
                    easing: "swing",
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                }
            );
        });
        a = 1;
    }
});
