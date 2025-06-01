
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
    var skylineBannerImg = document.getElementById("philly-skyline-banner");
    var offset = skylineBannerImg.offsetHeight;
    var mainArticle = document.getElementById("main-article");

    var isMobile = document.body.offsetWidth <= 768;
    if (!isMobile) {
        var fixedBar = document.getElementById("topbar");
        if (window.scrollY >= offset) {
            var fixedBarOffset = fixedBar.offsetHeight;
            fixedBar.classList.add('fixed');
            mainArticle.style.transform = "translateY(" + fixedBarOffset + "px)";
        } else {
            fixedBar.classList.remove('fixed');
            mainArticle.style.transform = "translateY(" + 0 + "px)";
        }
    } else {
        mainArticle.style.transform = "translateY(" + offset + "px)";
    }
}