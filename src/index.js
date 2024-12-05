import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = ""; // Clear existing content inside #content
}

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
    document.getElementById("home-tab").addEventListener("click", () => {
        clearContent();
        showManageDp();  // Show manageDp when home tab is clicked
        loadHome();  // Load home content when home tab is clicked
    });

    document.getElementById("menu-tab").addEventListener("click", () => {
        clearContent();
        hideManageDp();  // Hide manageDp when menu tab is clicked
        loadMenu();  // Load menu content when menu tab is clicked
    });

    document.getElementById("about-tab").addEventListener("click", () => {
        clearContent();
        hideManageDp();  // Hide manageDp when about tab is clicked
        loadAbout();  // Load about content when about tab is clicked
    });
}

// Initial page load
loadHome();  // Load the home tab by default
addEventListeners();
