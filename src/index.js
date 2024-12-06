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
        showManageDp();  // Show manageDp when home tab is clicked
        loadHome();  // Load home content when home tab is clicked
    });

    // Menu tab
    document.getElementById("menu-tab").addEventListener("click", () => {
        clearContent();
        hideManageDp();  // Hide manageDp when menu tab is clicked
        loadMenu();  // Load menu content when menu tab is clicked
    });

    // About tab
    document.getElementById("about-tab").addEventListener("click", () => {
        clearContent();
        hideManageDp();  // Hide manageDp when about tab is clicked
        loadAbout();  // Load about content when about tab is clicked
    });
}

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = ''; // Clear existing content inside #content
}

// Initial page load
loadHome();  // Load the home tab by default
addEventListeners();  // Set up event listeners for the tabs
