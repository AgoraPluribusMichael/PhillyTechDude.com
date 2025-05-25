$(document).ready(function() {
    var sections = document.getElementsByClassName("section");
    var tocBodyObj = document.getElementById("toc-body");
    for (var i=0; i < sections.length; i++) {
        var section = sections[i];
        var id = section.id;
        var label = document.getElementById(id).innerText;

        var liObj = document.createElement("ol");
        var aObj = document.createElement("a");
        aObj.href = "#" + id;
        aObj.innerText = label;
        aObj.classList.add("toc-item");
        liObj.appendChild(aObj);
        tocBodyObj.appendChild(liObj);
    }
});