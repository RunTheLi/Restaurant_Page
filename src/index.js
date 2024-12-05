import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

function clearContent() {
    const contentDiv = document.getElementById("content");
    contentDiv.textContent = ""; // Clear existing content
}

function addEventListeners() {
    document.getElementById("home-tab").addEventListener("click", () => {
        clearContent();
        loadHome();
    });

    document.getElementById("menu-tab").addEventListener("click", () => {
        clearContent();
        loadMenu();
    });

    document.getElementById("about-tab").addEventListener("click", () => {
        clearContent();
        loadAbout();
    });
}

// Initial page load
loadHome();
addEventListeners();
