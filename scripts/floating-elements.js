$(document).ready(function() {
    adjustMenuMarginBottom();
    adjustFooterVerticalOffset();
    adjustMenuVerticalOffset();
    fixMobileMenuWidth();
});

window.addEventListener('scroll', () => {
    adjustFooterVerticalOffset();
    adjustMenuVerticalOffset();
    fixMobileMenuWidth();
});

window.addEventListener('resize', () => {
    adjustMenuMarginBottom();
    adjustFooterVerticalOffset();
    adjustMenuVerticalOffset();
    fixMobileMenuWidth();
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

function adjustMenuVerticalOffset() {
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

function adjustMenuMarginBottom() {
    var footerDiv = document.getElementById("footer");
    var footerHeight = footerDiv.offsetHeight;
    footerDiv.style.transform = "translateY(" + footerHeight + "px)";
}

function fixMobileMenuWidth() {
    var topbarWidth = document.body.offsetWidth;
    var menuWidth = document.getElementById("header-row").offsetWidth;
    var topbar = document.getElementById("topbar");
    topbar.style.width = menuWidth + "px"
    topbar.style.marginLeft = ((topbarWidth - menuWidth) / 2) + "px";
}
