$(document).ready(function() {
    adjustVerticalOffset();
});

window.addEventListener('scroll', () => {
    adjustVerticalOffset();
});

window.addEventListener('resize', () => {
    adjustVerticalOffset();
});

function adjustVerticalOffset() {
    var scrollY = window.scrollY;
    var scrollMaxY = window.scrollMaxY;
    var copyrightDiv = document.getElementById("footer");
    var copyrightHeight = copyrightDiv.offsetHeight;
    var footerBarDiv = document.getElementById("footer-bar");
    if (scrollMaxY - scrollY <= copyrightHeight) {
        footerBarDiv.classList.remove("floating");
        footerBarDiv.classList.add("anchored");
    } else {
        footerBarDiv.classList.remove("anchored");
        footerBarDiv.classList.add("floating");
    }
}
