export default function loadMenu() {
    const contentDiv = document.getElementById("content");
    const menuContent = document.createElement("div");

    // Add heading for the menu
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    menuContent.appendChild(heading);

    // Add static description for specialties
    const menuItemsDescription = document.createElement("p");
    menuItemsDescription.textContent = "Our specialties: Cheesecakes, Donuts, Pies.";
    menuContent.appendChild(menuItemsDescription);

    // Dynamically add menu items with names and prices
    const menuItems = [
        { name: "Cheesecake", price: "$5" },
        { name: "Donuts", price: "$2" },
        { name: "Apple Pie", price: "$4" },
        { name: "Honey Tea", price: "$5" },
        { name: "Tirimisu", price: "$8" },
    ];

    // Loop through the menu items and create a div for each one
    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item"); // Style this class in CSS

        const itemName = document.createElement("p");
        itemName.textContent = `${item.name} - ${item.price}`;
        itemDiv.appendChild(itemName);

        menuContent.appendChild(itemDiv); // Add item to menu
    });

    contentDiv.appendChild(menuContent); // Add all content to the main content div
}
