const pages = {
    home: `
        <h2>Welcome</h2>
        <p>This is a modern dynamic website without PHP.</p>
    `,
    about: `
        <h2>About Us</h2>
        <p>We create beautiful websites using JavaScript.</p>
    `,
    services: `
        <h2>Our Services</h2>
        <ul>
            <li>Web Design</li>
            <li>Tour Booking</li>
            <li>Hotel Websites</li>
        </ul>
    `
};

function loadPage(page) {
    document.getElementById("content").innerHTML = pages[page];
}

// default page
loadPage('home');