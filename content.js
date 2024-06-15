// content.js

// Function to modify the page's HTML
function editPageHTML() {
    // Select all <div> elements with the specified class
    const userTaglines = document.querySelectorAll('div.user-tagline-component');

    // Iterate through each selected <div> element
    userTaglines.forEach(userTagline => {
        // Remove all existing children with class 'user-chess-title-component'
        const childrenWithClass = userTagline.querySelectorAll('.user-chess-title-component');
        childrenWithClass.forEach(child => child.remove());
    });
}

// Run the function to edit the page's HTML
editPageHTML();
