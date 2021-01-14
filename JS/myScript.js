// Global Variables
var tabName;


// On page load will either load previous tab or default to About
//you have to add meta tags like this or else github wont load them properly
document.head.innerHTML = document.head.innerHTML +

    '  <!--SITE FAVICON-->' +
    '  <link rel="icon" type="image/x-icon" href="Favicon/favicon.ico" />' +
    ' <link rel="shortcut icon" type="image/x-icon" href="Favicon/favicon.ico" />' +
    ' <link rel="apple-touch-icon" sizes="180x180" href="Favicon/apple-touch-icon.png" />' +
    ' <link rel="icon" type="image/png" sizes="32x32" href="Favicon/favicon-32x32.png" />' +
    '<link rel="icon" type="image/png" sizes="16x16" href="Favicon/favicon-16x16.png" />' +
    '<link rel="manifest" href="Favicon/site.webmanifest">' +
    '<!--Open Graph Meta Tags-->' +
    '<meta property="og:title" content="Brandon Cuthbertson - Full Stack Developer"/>' +
    '<meta property="og:description" content="Hello, my name is Brandon Cuthbertson and I&apos;m a Junior Full-Stack Developer" />' +
    '<meta property="og:type" content="website" />'+
    '<meta property="og:url" content="https://brandoncuthbertson.github.io/" />'+
    '<meta property="og:image" content="IMG/BWC.jpg" />' +
    ' <meta name="description" content="A personal website and portfolio">' +
    '<meta name="keywords" content="HTML, CSS, JavaScript">' +
    '<meta name="author" content="Brandon Cuthbertson">' +
    ' <meta name="viewport" content="width=device-width, initial-scale=1.0">' +

    '';
// Maked the footer dynamic

var thisYear = new Date().getFullYear();
document.getElementById('Copyright').innerHTML += thisYear.toString();

if (sessionStorage.current != null) {//set the page to whats saved in session

    removeTabs();
    if (sessionStorage.current != 'Settings') {
        tabName = sessionStorage.getItem("current");
        document.getElementById(tabName).style.display = "block";
        document.getElementById('nav' + tabName).className += " active";
        document.getElementById('top-' + tabName).className += " active";
    }
    else { //settings is different because it is mobile only
        tabName = sessionStorage.getItem("current");
        document.getElementById(tabName).style.display = "block";
        document.getElementById('top-' + tabName).className += " active";
    }
    

}
else { //if no session id set to About page
    removeTabs();
    tabName = "About";
    document.getElementById(tabName).style.display = "block";
    document.getElementById("nav" + tabName).className += " active";
    document.getElementById("top-" + tabName).className += " active";
}
//Loads Favored theme
if (sessionStorage.currentTheme != null) {
    var currentTheme = sessionStorage.getItem("currentTheme");
    document.getElementById("myStyleSheet").href = currentTheme;
}
else {
    var day = new Date();
    var hour = day.getHours();
    if (hour <= 7 || hour >= 19) {
        //sets night theme
        document.getElementById("myStyleSheet").href = 'CSS/Theme-1.css';
    }
    else {
        document.getElementById("myStyleSheet").href = 'CSS/Theme-2.css';
    }
    
}
/*****************
 * Theme
 *****************/
function changeTheme(evt, Theme) {
    document.getElementById("myStyleSheet").href = Theme;
    ///Saves Current Theme
    sessionStorage.setItem("currentTheme", Theme);
}


/*****************
 * Different Tabs
 *****************/
// Clears all Tabs on Main Page 
function removeTabs() {
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


/********************
 * PORTFOLIO CARDS
 ********************/
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