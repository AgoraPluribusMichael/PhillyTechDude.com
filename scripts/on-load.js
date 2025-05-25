$(document).ready(function() {
    $("head").prepend(
    '<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />'
    );
    $("head").append(
        '<!-- Google tag (gtag.js) -->'+
        '<script async src="https://www.googletagmanager.com/gtag/js?id=G-TR4TKL038J"></script>'+
        '<script>'+
        '  window.dataLayer = window.dataLayer || [];'+
        '  function gtag(){dataLayer.push(arguments);}'+
        "  gtag('js', new Date());"+
        "  gtag('config', 'G-TR4TKL038J');"+
        '</script>'
    );
    $("body").prepend(
        '<div id="topbanner" style="background-image: url(images/banner.jpg);"></div>'+
        '<nav id="topbar">'+
            '<ul id="nav">'+
                '<a href="index.html"><li id="homeTopbar" class="menuButton">✊Rise Up</li></a>'+
                '<a href="democracy.html"><li id="democracyTopbar" class="menuButton">🗽Democracy</li></a>'+
                '<a href="economy.html"><li id="economyTopbar" class="menuButton">💸Economy</li></a>'+
                '<a href="taxes.html"><li id="taxesTopbar" class="menuButton">🔰Taxes</li></a>'+
                '<a href="social_security.html"><li id="socialSecurityTopbar" class="menuButton">👴Social Security</li></a>'+
                '<a href="policies.html"><li id="policiesTopbar" class="menuButton">⚖️Other Policies</li></a>'+
            '</ul>'+
        '</nav>'
    );
    $("body").append(
        '<div class="text panel panel-default">'+
            '<footer>'+
                '<p><img src="PhillyTechDude.png"></img></p>'+
                '<p>I\'m a 28-year-old software engineer living in South Philly who is considering running for office in 2026 to represent PA-03 in Congress, because I\'m tired of writing code designed to make the rich people richer by harming our society, and I would instead prefer to advocate for and write laws to help serve the common good.</p>'+
            '</footer>'+
        '</div>'
    );
});