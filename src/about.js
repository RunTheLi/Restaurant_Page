export default function loadAbout() {
    const contentDiv = document.getElementById("content");
    const aboutContent = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contract";

    const description = document.createElement("p");
    description.textContent =
        "At Pareto Restaurant, we take pride in offering a selection of mouth-watering desserts.";

    aboutContent.appendChild(heading);
    aboutContent.appendChild(description);
    contentDiv.appendChild(aboutContent);
}
