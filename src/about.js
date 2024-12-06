export default function loadAbout() {
    const contentDiv = document.getElementById("content");
    const aboutContent = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Contact";
    aboutContent.appendChild(heading);

    const description = document.createElement("p");
    description.textContent = "99/2 Village No. 4, Super Highway Chiang Mai-Lampang Road, Fa Ham Subdistrict, Mueang Chiang Mai District, Chiang Mai 50000 Thailand";
    aboutContent.appendChild(description);

    const location = [
        { phone: "123-456-789", email: "tiramisucnx@gmail.com" },
        { phone: "312-465-879", email: "dessertcnx@gmail.com" },
    ];

    location.forEach(item => {
        const locationDiv = document.createElement('div');
        locationDiv.classList.add("locate");

        const locateName = document.createElement("p");
        locateName.textContent = `Phone: ${item.phone} Email: ${item.email}`;
        locationDiv.appendChild(locateName);

        aboutContent.appendChild(locationDiv); // Append the location div to the aboutContent
    });

    const iframe = document.createElement("iframe");

    iframe.src = "https://www.google.com/maps/embed?pb=..."
    iframe.classList.add("worldframe");
    iframe.width = "150";
    iframe.height = "150";
    iframe.style.border = "0";
    iframe.allowFullscreen = "";
    iframe.loading = "lazy"; // Optional for lazy loading
    aboutContent.appendChild(iframe);

    contentDiv.appendChild(aboutContent); // Append the complete content to the main content div
}
