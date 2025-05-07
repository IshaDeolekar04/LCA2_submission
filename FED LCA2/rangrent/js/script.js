document.addEventListener('DOMContentLoaded', () => {

    // --- Basic Mobile Menu Toggle ---
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-nav');

    if (menuButton && mobileNav) {
        menuButton.addEventListener('click', () => {
            mobileNav.classList.toggle('active');
        });
    }

    // --- Simple Active Class Toggle for Option Buttons ---
    function setupOptionButtons(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (container) {
            const buttons = container.querySelectorAll('.option-button');
            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    // Remove active class from siblings within the same group
                    container.querySelectorAll('.option-button').forEach(sib => sib.classList.remove('active'));
                    // Add active class to the clicked button
                    button.classList.add('active');
                });
            });
        }
    }

    // Setup for Product Detail Page Options
    setupOptionButtons('.color-options');
    setupOptionButtons('.size-options');
    setupOptionButtons('.period-options');

    // --- Product Image Gallery (Product Detail Page Only) ---
    const thumbnails = document.querySelectorAll('.thumbnail-container .thumbnail');
    const mainImage = document.getElementById('mainProductImage');

    if (thumbnails.length > 0 && mainImage) {
        thumbnails.forEach(thumb => {
            thumb.addEventListener('click', function() { // Use function for 'this'
                const largeSrc = this.getAttribute('data-large-src');
                if (largeSrc) {
                    mainImage.src = largeSrc;
                    mainImage.alt = this.alt; // Update alt text

                    // Update active thumbnail class
                    document.querySelector('.thumbnail-container .thumbnail.active')?.classList.remove('active');
                    this.classList.add('active');
                }
            });
        });
    }

     // --- Basic Pagination Active State (Visual Only) ---
     const paginationLinks = document.querySelectorAll('.pagination a');
     if (paginationLinks) {
         paginationLinks.forEach(link => {
             // Skip prev/next buttons if they exist and don't have number content
             if (link.textContent.match(/^\d+$/) || link.classList.contains('active')) { // Check if it's a page number or already active
                 link.addEventListener('click', (e) => {
                     e.preventDefault(); // Prevent navigation for demo
                     document.querySelector('.pagination a.active')?.classList.remove('active');
                     link.classList.add('active');
                     // In a real app, you'd fetch data for the new page here
                     console.log("Clicked page:", link.textContent);
                 });
             } else {
                 // Add dummy click listener for prev/next
                  link.addEventListener('click', (e) => {
                      e.preventDefault();
                      console.log("Clicked:", link.textContent);
                  });
             }
         });
     }

}); // End DOMContentLoaded
