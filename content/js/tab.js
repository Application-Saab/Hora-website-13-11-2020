document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav.citymenu a");
    const sections = document.querySelectorAll("section");

    // Add click event listeners to navigation links
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Prevent default behavior of anchor link

            // Get the target section's ID from the "data-section" attribute
            const targetSectionId = link.getAttribute("data-section");

            // Scroll to the target section smoothly
            document.getElementById(targetSectionId).scrollIntoView({
                behavior: "smooth"
            });

            // Highlight the active link
            highlightActiveLink(targetSectionId);
        });
    });

    // Function to highlight the active link
    function highlightActiveLink(targetSectionId) {
        navLinks.forEach(function (link) {
            // Remove the "active" class from all links
            link.classList.remove("active");

            if (link.getAttribute("data-section") === targetSectionId) {
                // Add the "active" class to the clicked link
                link.classList.add("active");
            }
        });
    }

    // Add a scroll event listener to update the active link based on scroll position
    window.addEventListener("scroll", function () {
        sections.forEach(function (section) {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionId = section.getAttribute("id");

            if (sectionTop <= 0 && sectionTop >= -section.clientHeight) {
                // Highlight the active link corresponding to the section in view
                highlightActiveLink(sectionId);
            }
        });
    });
});
