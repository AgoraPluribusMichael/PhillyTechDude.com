$(document).ready(function() {
    adjustVerticalOffset();
    fixMobileMenuWidth();
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

function fixMobileMenuWidth() {
    var topbarWidth = document.body.offsetWidth;
    var menuWidth = document.getElementById("header-row").offsetWidth;
    if (topbarWidth != menuWidth) {
        var topbar = document.getElementById("topbar");
        topbar.style.width = menuWidth + "px"
        topbar.style.marginLeft = ((topbarWidth - menuWidth) / 2) + "px";
    }
}
