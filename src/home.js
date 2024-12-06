export default function loadHome() {
    const contentDiv = document.getElementById("content");
    const homeContent = document.createElement("div");

    const welcomeMessage = document.createElement("h1");
    welcomeMessage.textContent = "The Pareto Restaurant";

    const description = document.createElement("p");
    description.textContent = `Welcome to the best restaurant in town!`;

    homeContent.appendChild(welcomeMessage);
    homeContent.appendChild(description);
    contentDiv.appendChild(homeContent);
}
