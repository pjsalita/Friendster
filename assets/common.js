var menuids = ["treemenu1"];
// home, subpages and profile page
function buildsubmenus_horizontal(imagesUrl) {
    for (var i = 0; i < menuids.length; i++) {
        var ultags = document.getElementById(menuids[i]).getElementsByTagName("ul")
        for (var t = 0; t < ultags.length; t++) {
            if (ultags[t].parentNode.parentNode.id == menuids[i]) {
                ultags[t].parentNode.getElementsByTagName("a")[0].className = "mainfoldericon"
            }
            ultags[t].parentNode.onmouseover = function() {
                this.getElementsByTagName("ul")[0].style.visibility = "visible"
                this.getElementsByTagName("a")[0].style.backgroundImage = "url(" + imagesUrl + "/arrow_down.gif)";
                this.getElementsByTagName("a")[0].style.backgroundRepeat = "no-repeat";
                this.getElementsByTagName("a")[0].style.backgroundPosition = "center right";
                // hideSelect();
            }
            ultags[t].parentNode.onmouseout = function() {
                this.getElementsByTagName("ul")[0].style.visibility = "hidden"
                this.getElementsByTagName("a")[0].style.background = "none";
                this.getElementsByTagName("a")[0].style.backgroundImage = "url(" + imagesUrl + "/arrow_down.gif)";
                this.getElementsByTagName("a")[0].style.backgroundRepeat = "no-repeat";
                this.getElementsByTagName("a")[0].style.backgroundPosition = "center right";
                // showSelect();
            }
        }
    }
}

$(function() {
    $(window).bind('hashchange', function() {
        history.replaceState(null, null, ' ');
    });
});