const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

// Toggle mobile menu and icon
mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Toggle icon between hamburger and cross
    if (menuIcon.classList.contains('fa-list-check')) {
        menuIcon.classList.remove('fa-list-check');
        menuIcon.classList.add('fa-xmark'); // cross icon
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-list-check'); // hamburger icon
    }
});

// Smooth scroll for mobile menu links
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // header height offset
                behavior: 'smooth'
            });
        }
        // hide menu after click
        mobileMenu.classList.add('hidden');
        // restore hamburger icon
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-list-check');
    });
});
