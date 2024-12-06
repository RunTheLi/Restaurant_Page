import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function hideManageDp() {
    const manageDp = document.getElementById("manageDp");
    if (manageDp) {
        manageDp.style.display = "none"; // Hide manageDp when not in Home tab
    }
}

function showManageDp() {
    const manageDp = document.getElementById("manageDp");
    if (manageDp) {
        manageDp.style.display = "flex"; // Show manageDp when in Home tab
    }
}

function addEventListeners() {
    // Home tab
    document.getElementById("home-tab").addEventListener("click", () => {
        clearContent();
        showManageDp();  
        loadHome();  
    });

    // Menu tab
    document.getElementById("menu-tab").addEventListener("click", () => {
        clearContent();
        hideManageDp();  
        loadMenu();  
    });

    // About tab
    document.getElementById("about-tab").addEventListener("click", () => {
        clearContent();
        hideManageDp();  
        loadAbout();  
    });
}

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ''; 
}

// Initial page load
loadHome();  // Load the home tab by default
addEventListeners();  // Set up event listeners for the tabs
