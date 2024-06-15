// content.js

// Function to modify the page's HTML
function editPageHTML() {
    // Select all <div> elements with the specified class
    const userTaglines = document.querySelectorAll('div.user-tagline-component');

    // Iterate through each selected <div> element
    userTaglines.forEach(userTagline => {
        // Get the first child element of the <div>
        const firstChild = userTagline.firstElementChild;

        // Check if the first child element exists
        if (firstChild) {
            // Get the class of the first child element
            const firstChildClass = firstChild.className;

            // Check if the class matches the specified class
            const classToCheck = 'user-username-component user-username-white user-username-link user-tagline-username';
            if (firstChildClass === classToCheck) {
                // Create the new <a> element
                const titleLink = document.createElement('a');
                titleLink.className = 'user-chess-title-component';
                titleLink.href = '/members/titled-players';
                titleLink.target = '_blank';
                titleLink.setAttribute('data-tooltip-target', '11');
                titleLink.innerHTML = 'GM';

                // Insert the <a> element into the <div> element as the first child
                userTagline.insertBefore(titleLink, userTagline.firstChild);
            } else {
                console.log('No match:', firstChildClass);
            }
        } else {
            console.log('No child elements found for this user tagline.');
        }
    });
}

editPageHTML();