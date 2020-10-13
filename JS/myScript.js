var tabName;
// On load hides all tabs and displays About me
if (sessionStorage.current != null) {
   
    removeTabs();
    tabName = sessionStorage.getItem("current");
    document.getElementById(tabName).style.display = "block";
    document.getElementById('nav' + tabName).className += " active";
    document.getElementById('Top-' + tabName).className += " active";

}
else {
    removeTabs();
    tabName = 'About';
document.getElementById(tabName).style.display = "block";
document.getElementById('nav' + tabName).className += " active";
    document.getElementById('Top-' + tabName).className += " active";
}


function removeTabs(){
    // Declare all variables
    var i, tabcontent, tablinks;


    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
}

function openPage(evt, pageName) {
    removeTabs();

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
    sessionStorage.setItem("current", pageName);
}