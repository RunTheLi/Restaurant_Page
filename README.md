Project Overview
We built a simple restaurant website using JavaScript, HTML, and CSS.
The website includes dynamic page switching functionality and allows the user to navigate through different sections: Home, Menu, and Contact. Each section is dynamically rendered using JavaScript modules.

Key Features
Dynamic Navigation:

Tabs for Home, Menu, and Contact are implemented.
JavaScript dynamically loads content for each tab when clicked, clearing the previous content.
Home Page:

Displays an introduction to the restaurant.
Includes information like location, operating hours, and a brief description of the restaurant.
The content is styled for better readability and user experience.
Menu Page:

Lists menu items dynamically using JavaScript.
Each menu item includes a name, price, and description.
Responsive design ensures the menu looks consistent across all screen sizes.
Contact Page:

Displays contact information, including phone numbers and email addresses.
Embedded a Google Map iframe for the restaurant's location.
Responsive Design:

Ensured that the layout adapts to smaller screens using CSS media queries.
Added styling improvements for better aesthetics and usability.
JavaScript Modules:

Separated functionality into different modules (home.js, menu.js, about.js) for better organization and maintainability.
The index.js file manages navigation and links the modules together.
CSS Enhancements:

Used a clean and consistent design across all sections.
Ensured proper alignment and spacing for a professional look.
GitHub Pages Deployment:

Configured the repository to use the gh-pages branch for hosting.
Deployed the project on GitHub Pages for easy sharing and viewing.
Technical Highlights
Dynamic DOM Manipulation: Leveraged JavaScript to create and inject HTML elements dynamically based on user interaction.

Git Workflow: Utilized Git for version control and managed branches to implement and test features effectively.

Bug Fixes:

Addressed issues with misplaced content.
Ensured smooth functionality for hiding and showing content dynamically.
Fixed errors like incorrect class or property usage (classList.add issue).
Challenges and Solutions
Content Overlap Between Tabs:
Fixed by clearing existing content before loading a new section (clearContent() function).
Dynamic Class Addition Error:
Corrected by ensuring proper usage of classList.add in the Contact page module.
Responsive Design Issues:
Addressed by applying CSS media queries to ensure proper layout across devices.

//---- For More Js, Html ,css files checkout the main branch ----//

// ---- https://runtheli.github.io/Restaurant_Page/ ----//

![1](https://github.com/user-attachments/assets/a782eeeb-d360-43e1-b37d-57734590c2d9)

![2](https://github.com/user-attachments/assets/23fe83cc-96ba-48ab-9af7-fe334bab3fcc)

![3](https://github.com/user-attachments/assets/607cc70e-83d0-4902-b16c-469b1a7dc3f2)

