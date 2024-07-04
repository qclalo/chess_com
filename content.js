function addTitleLinkToUserTagline() {
    let username = "cbrahFor";
    let title = "IM";
    // Select all div elements with the specified class
    const userTaglines = document.querySelectorAll(
        'div.user-tagline-component'
    );

    // Iterate through each div element
    userTaglines.forEach(userTagline => {
        // Select the <a> element with the specified class and data-test-element attribute inside the div
        const userUsername = userTagline.querySelector(
            'a.user-username-component.user-username-white.user-username-link.' +
            'user-tagline-username[data-test-element="user-tagline-username"]'
        );

        // Check if the <a> element contains the username text
        // Create the new <a> element
        // Insert the <a> element into the <div> element as the first child

        if (userUsername && userUsername.textContent.trim() === username) {
            const titleLink = document.createElement('a');
            titleLink.className = 'user-chess-title-component';
            titleLink.href = '/members/titled-players';
            titleLink.target = '_blank';
            titleLink.innerHTML = title;

            userTagline.insertBefore(
                titleLink, userTagline.firstChild
            );
        }
    });
}

// Call the function to add the title links
addTitleLinkToUserTagline();
