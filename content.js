// content.js

// Function to modify the page's HTML
function editPageHTML() {
    let username = "cbrahFor";
}

function addTitleToUserTagline() {
    // Select all <div> elements with the specified class
    const userTaglines = document.querySelectorAll('div.user-tagline-component');

    // Iterate through each selected <div> element
    userTaglines.forEach(userTagline => {
        // Check if the <div> element does not already have <a class="user-chess-title-component"> or <a class="mvp-badge-component">
        if (!userTagline.querySelector('a.user-chess-title-component') && !userTagline.querySelector('a.mvp-badge-component')) {
            // Create the new <a> element
            const titleLink = document.createElement('a');
            titleLink.className = 'user-chess-title-component';
            titleLink.href = '/members/titled-players';
            titleLink.target = '_blank';
            titleLink.setAttribute('data-tooltip-target', '288');
            titleLink.innerHTML = 'IM';

            // Insert the <a> element into the <div> element as the first child
            userTagline.insertBefore(titleLink, userTagline.firstChild);
        }
    });
}

addTitleToUserTagline();

editPageHTML();