function addTitleLinkToUserTagline() {
    let username = "cbrahFor"
    // Select all div elements with the specified class
    const userTaglines = document.querySelectorAll('div.user-tagline-component');
    
    // Iterate through each div element
    userTaglines.forEach(userTagline => {
        // Select the <a> element with the specified class and data-test-element attribute inside the div
        const userUsername = userTagline.querySelector('a.user-username-component.user-username-white.user-username-link.user-tagline-username[data-test-element="user-tagline-username"]');
        
        // Check if the <a> element contains the text 'cbrahFor'
        if (userUsername && userUsername.textContent.trim() === username) {
            // Create the new <a> element
            const titleLink = document.createElement('a');
            titleLink.className = 'user-chess-title-component';
            titleLink.href = '/members/titled-players';
            titleLink.target = '_blank';
            titleLink.setAttribute('data-tooltip-target', '11');
            titleLink.innerHTML = 'GM';
            
            // Insert the <a> element into the <div> element as the first child
            userTagline.insertBefore(titleLink, userTagline.firstChild);
        }
    });
}

// Call the function to add the title links
addTitleLinkToUserTagline();
