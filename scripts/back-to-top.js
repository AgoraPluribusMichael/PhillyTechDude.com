$(document).ready(function() {
    var backToTopButton = document.createElement("button");
    backToTopButton.id = "backToTop";
    backToTopButton.title = "Back to Top";
    backToTopButton.innerText = "Back to Top";
    $("body").append(backToTopButton);

    // Scroll to top when clicked
    document.getElementById("backToTop").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Show button after scrolling down 800px
window.onscroll = function() {
    const btn = document.getElementById("backToTop");
    btn.style.display = window.scrollY > 800 ? "block" : "none";
};