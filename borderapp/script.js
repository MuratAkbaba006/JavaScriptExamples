document.getElementById("form").addEventListener("mouseup", function (e) {

    var table = document.getElementById("area");
    var displayscreen = document.getElementById("goruntule");
    var color = document.getElementById("color").value;
    var borderwidthkenar = document.getElementById("border-width").value;
    var borderstyle = document.getElementById("border-style").value;
    var borderradius = document.getElementById("border-radius").value;
    var borderwidth = document.getElementById("width").value;
    var borderheight = document.getElementById("height").value;
    var csstext = document.getElementById("css");
    
    
    displayscreen.style.width = borderwidth + "px";
    displayscreen.style.height = borderheight + "px";
    displayscreen.style.border = `${borderwidthkenar} ${borderstyle} ${color}`;
    displayscreen.style.borderRadius = `${borderradius}`;

    var a = displayscreen.style.cssText;
    csstext.innerHTML = a;


    e.preventDefault();

});
