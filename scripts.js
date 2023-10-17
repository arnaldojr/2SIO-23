
document.addEventListener("DOMContentLoaded", function() {
    // Get all anchor links on the page
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    for (let link of anchorLinks) {
        link.addEventListener("click", function(event) {
            // Prevent default behavior
            event.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Smooth scroll to the target element
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    }
});


// Project filtering
const projectSearch = document.getElementById('projectSearch');
const projectCards = document.querySelectorAll('.card');

projectSearch.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    for (let card of projectCards) {
        const projectName = card.querySelector('h3').textContent.toLowerCase();
        if (projectName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
});