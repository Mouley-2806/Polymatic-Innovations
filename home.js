document.addEventListener('DOMContentLoaded', function () {
    const bars = document.getElementById('bars');
    const navLinks = document.querySelector('.nav-links');

    if (bars && navLinks) {
        bars.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const icon = bars.querySelector('i');
            if (icon) {
                if (navLinks.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // Attach handlers to both top-level dropdowns and nested submenu items
    const dropdowns = document.querySelectorAll('.dropdown, .dropdown-submenu');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (window.innerWidth <= 900) {
                // Prevent following the link on mobile and toggle visibility
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });

    document.addEventListener('click', (e) => {
        if (
            window.innerWidth <= 900 &&
            navLinks &&
            navLinks.classList.contains('active') &&
            !e.target.closest('.nav-links') &&
            !e.target.closest('#bars')
        ) {
            navLinks.classList.remove('active');
            const icon = bars ? bars.querySelector('i') : null;
            if (icon) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        }
    });
});
