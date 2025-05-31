$(document).ready(function() {
    var backToTopButton = document.createElement("button");
    backToTopButton.id = "back-to-top";
    backToTopButton.title = "Back to Top";
    backToTopButton.innerText = "Back to Top";
    $("body").append(backToTopButton);

    // Scroll to top when clicked
    document.getElementById("back-to-top").addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.onscroll = function() {
        showButton();
    };
    showButton();
});

// Show button after scrolling down 800px
function showButton() {
    const btn = document.getElementById("back-to-top");
    btn.style.display = window.scrollY > 800 ? "block" : "none";
}
