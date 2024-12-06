export default function loadMenu() {
    const contentDiv = document.getElementById("content");
    const menuContent = document.createElement("div");

    // Add heading for the menu
    const heading = document.createElement("h1");
    heading.textContent = "Menu";
    menuContent.appendChild(heading);

    // Add static description for specialties
    const menuItemsDescription = document.createElement("p");
    menuItemsDescription.textContent = "Our specialties: tiramisu, Honey Tea, Cheese Cake.";
    menuContent.appendChild(menuItemsDescription);

    const menuItems = [
        { name: "Cheesecake", price: "$7", description: "A rich and creamy dessert with a buttery graham cracker crust." },
        { name: "Donuts", price: "$2", description: "Freshly fried, fluffy, and glazed with a variety of toppings." },
        { name: "Apple Pie", price: "$4", description: "Classic pie filled with cinnamon-spiced apples in a buttery crust." },
        { name: "Honey Tea", price: "$5", description: "A soothing tea sweetened with natural honey." },
        { name: "Tiramisu", price: "$8", description: "A delicious Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream." },
    ];

    // Loop through the menu items and create a div for each one
    menuItems.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item"); // Style this class in CSS

        const itemName = document.createElement("p");
        itemName.textContent = `${item.name} ${item.price}`;
        itemDiv.appendChild(itemName);

        // Create description element and apply the description class
        const itemDescription = document.createElement("p");
        itemDescription.classList.add("description");
        itemDescription.textContent = item.description;
        itemDiv.appendChild(itemDescription);

        menuContent.appendChild(itemDiv); // Add item to menu
    });

    contentDiv.appendChild(menuContent); // Add all content to the main content div
}
