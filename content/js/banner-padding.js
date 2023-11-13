// Wait for the document to fully load
    document.addEventListener("DOMContentLoaded", function() {
        // Get the sticky header and banner elements by their IDs
        var stickyHeader = document.querySelector(".header"); // Use querySelector to get the first matching element
        var banner = document.getElementById("occation-intro-inner");

        // Check if both elements exist
        if (stickyHeader !== null && banner !== null) {
            // Get the height of the sticky header
            var headerHeight = stickyHeader.clientHeight;
            // console.log("inside loop" + headerHeight + stickyHeader.innerHTML);
            
            // Set the top margin of the banner element to match the header height
            banner.style.marginTop = headerHeight + "px";
        }
    });



