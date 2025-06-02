$(document).ready(function() {
    adjustFooterVerticalOffset();
});

window.addEventListener('scroll', () => {
    adjustFooterVerticalOffset();
});

window.addEventListener('resize', () => {
    adjustFooterVerticalOffset();
});

function adjustFooterVerticalOffset() {
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
