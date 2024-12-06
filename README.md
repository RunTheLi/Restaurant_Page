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

---- For More Js, Html ,css files checkout the main branch ----
![1](https://github.com/user-attachments/assets/a79069e3-0c59-46ec-b10c-0b2f42f41150)


![2](https://github.com/user-attachments/assets/19cdb8e8-a3cc-41a2-a67c-b5a40f59537b)


![3](https://github.com/user-attachments/assets/1ee8b49a-c2ac-4ae0-9015-e1dfa2575d1b)
