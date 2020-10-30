

// Global Variables
var tabName;


// On page load will either load previous tab or default to About
if (sessionStorage.current != null) {
   
    removeTabs();
    tabName = sessionStorage.getItem("current");
    document.getElementById(tabName).style.display = "block";
    document.getElementById('nav' + tabName).className += " active";
    document.getElementById('top-' + tabName).className += " active";

}
else {
    removeTabs();
    tabName = "About";
    document.getElementById(tabName).style.display = "block";
    document.getElementById("nav" + tabName).className += " active";
    document.getElementById("top-" + tabName).className += " active";
}

/*
 * Different Tabs
 */
// Clears all Tabs on Main Page 
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

//Loads Tabs
function openPage(evt, pageName) {
    removeTabs();

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
    sessionStorage.setItem("current", pageName); //adds it to session
    //console.log("Logging Tab Name " + pageName);
}


/*
 * PORTFOLIO CARDS
 */
//Sets all to hidden then shows selected
function togglePortfolio(evt, portfolioItem) {
    // Declare all variables
    var i, porfolioCard, portfolioLink;


    // Get all elements with class="porfolioCard" and hide them
    porfolioCard = document.getElementsByClassName("porfolioCard");
    for (i = 0; i < porfolioCard.length; i++) {
        porfolioCard[i].style.display = "none";
    }

    // Get all elements with class="portfolioLink" and remove the class "active"
    portfolioLink = document.getElementsByClassName("portfolioLink");
    for (i = 0; i < portfolioLink.length; i++) {
        portfolioLink[i].className = portfolioLink[i].className.replace(" active", "");
    }

    // Get all elements with class="portfolioItem" and show them
    porfolioCard = document.getElementsByClassName(portfolioItem);
    for (i = 0; i < porfolioCard.length; i++) {
        porfolioCard[i].style.display = "block";
    }

    // Set portfolioLink to active
    portfolioLink = document.getElementsByClassName(portfolioItem);
    for (i = 0; i < portfolioLink.length; i++) {
        portfolioLink[i].className = portfolioLink[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    
    //console.log(portfolioLink + " Activated");

}