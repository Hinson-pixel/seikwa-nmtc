// Wait until the complete webpage DOM content loads safely
document.addEventListener("DOMContentLoaded", function() {
    
    const mobileToggle = document.getElementById("mobile-toggle");
    const navMenu = document.getElementById("nav-menu");
    const menuIcon = mobileToggle.querySelector("i");

    // Toggle Mobile Navigation Drawer visibility on tap
    mobileToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        
        // Dynamically morph the menu icon between Bars and an 'X' close graphic
        if (navMenu.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });

    // Automatically collapse drawer layout when any menu text link is clicked
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        });
    });
});
