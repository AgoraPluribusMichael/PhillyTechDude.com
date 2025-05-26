$(document).ready(function() {
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
    var sections = document.getElementsByClassName("section");
    var tocBodyObj = document.getElementById("toc-body");

    var maxWidth = 0;

    for (var i=0; i < sections.length; i++) {
        var section = sections[i];
        var id = section.id;
        var label = document.getElementById(id).innerText;

        var liObj = document.createElement("li");
        var aObj = document.createElement("a");
        aObj.href = "#" + id;
        aObj.innerText = label;
        aObj.classList.add("toc-label");
        liObj.appendChild(aObj);
        tocBodyObj.appendChild(liObj);

        var width = aObj.offsetWidth;
        if (width > maxWidth) {
            maxWidth = width;
        }
    }
});