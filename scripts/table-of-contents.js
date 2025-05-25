$(document).ready(function() {
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