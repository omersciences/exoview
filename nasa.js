// Wait for the document to load before running the script
document.addEventListener('DOMContentLoaded', function() {
    
    // Create an array of directive points with corresponding information
    const directives = [
        {
            id: 1,
            position: { top: '10%', left: '30%' },
            info: "This is Point 1: A crater formed by a meteor impact. Rich in iron deposits."
        },
        {
            id: 2,
            position: { top: '50%', left: '50%' },
            info: "This is Point 2: A mysterious structure detected. Likely an alien artifact."
        },
        {
            id: 3,
            position: { top: '70%', left: '40%' },
            info: "This is Point 3: A high-energy source. Possibly geothermal activity."
        }
    ];

    // Function to update the "Info Tab" with specific information
    function updateInfo(info) {
        const infoBox = document.querySelector('.info-box p');
        infoBox.textContent = info;
    }

    // Create directive points dynamically based on the array
    const directiveSelection = document.querySelector('.directive-selection');

    directives.forEach((directive) => {
        const directiveItem = document.createElement('div');
        directiveItem.classList.add('directive-item');
        
        // Set the position of the directive item
        directiveItem.style.top = directive.position.top;
        directiveItem.style.left = directive.position.left;
        
        // Add an event listener to update the Info Tab when clicked
        directiveItem.addEventListener('click', () => {
            updateInfo(directive.info);
        });

        // Append the directive item to the directive selection container
        directiveSelection.appendChild(directiveItem);
    });

    // Optional: Display default info on page load
    updateInfo("Click on one of the points on the planet simulation to explore.");
});

// Wait for the document to load
document.addEventListener('DOMContentLoaded', function() {

    // Array of planet data
    const planets = [
        {
            name: "Kepler 442b",
            info: "Kepler-442b is an exoplanet orbiting the star Kepler-442, located about 1,120 light-years away."
        },
        {
            name: "Kepler-186f",
            info: "Kepler-186f is an exoplanet that orbits the red dwarf star Kepler-186, approximately 500 light-years away."
        },
        {
            name: "Proxima Centauri-b",
            info: "Proxima Centauri-b is an exoplanet orbiting the star Proxima Centauri, the closest star to the Sun."
        },
        {
            name: "Kepler-62f",
            info: "Kepler-62f is a super-Earth exoplanet orbiting the star Kepler-62, located about 1,200 light-years from Earth."
        },
        {
            name: "Kepler-22b",
            info: "Kepler-22b is an exoplanet orbiting the sun-like star Kepler-22, about 600 light-years from Earth."
        }
    ];

    // Get elements for the info box
    const infoBox = document.getElementById('info-box');
    const infoBoxTitle = document.getElementById('info-box-title');
    const infoBoxContent = document.getElementById('info-box-content');
    const closeInfoBoxButton = document.getElementById('close-info-box');

    // Function to show the info box with the correct planet info
    function showInfoBox(planet) {
        infoBoxTitle.textContent = planet.name;
        infoBoxContent.textContent = planet.info;
        infoBox.classList.remove('hidden');
    }

    // Function to hide the info box
    function hideInfoBox() {
        infoBox.classList.add('hidden');
    }

    // Add event listener to the close button to hide the info box when clicked
    closeInfoBoxButton.addEventListener('click', hideInfoBox);

    // Loop through planets and assign a click event to each sidebar list item
    const sidebarItems = document.querySelectorAll('.sidebar ul li');
    
    sidebarItems.forEach((item, index) => {
        // Add a click event listener for each planet item in the sidebar
        item.addEventListener('click', () => {
            showInfoBox(planets[index]);
        });
    });

    // Optional: Show a default message when page loads
    infoBoxTitle.textContent = "Click on a planet to explore!";
    infoBoxContent.textContent = "Select one of the planets from the sidebar to view its information.";
});

document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.planet-point');
    const infoBox = document.querySelector('#planet-info p');
    
    // Example facts for planet points
    const facts = {
        point1: "This is Point 1: A massive crater caused by asteroid impacts.",
        point2: "This is Point 2: A volcanic area with visible lava flows.",
        point3: "This is Point 3: A high-energy source. Possibly geothermal activity."
    };

    points.forEach(point => {
        point.addEventListener('click', function() {
            const pointId = this.id;
            infoBox.textContent = facts[pointId]; // Display the fact in the Info Tab
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const points = document.querySelectorAll('.planet-point');
    const infoBox = document.querySelector('#planet-info p');
    const planetImage = document.querySelector('#planet-image');
    const planetLink = document.querySelector('#planet-link');
    
    const planetData = {
        point1: {
            info: "This is Point 1: A massive crater caused by asteroid impacts.",
            img: "crater.jpg",
            link: "https://example.com/crater"
        },
        point2: {
            info: "This is Point 2: A volcanic area with visible lava flows.",
            img: "volcano.jpg",
            link: "https://example.com/volcano"
        },
        point3: {
            info: "This is Point 3: A high-energy source. Possibly geothermal activity.",
            img: "geothermal.jpg",
            link: "https://example.com/geothermal"
        }
    };

    points.forEach(point => {
        point.addEventListener('click', function() {
            const pointId = this.id;
            infoBox.textContent = planetData[pointId].info;
            planetImage.src = planetData[pointId].img;
            planetImage.style.display = 'block';
            planetLink.href = planetData[pointId].link;
            planetLink.style.display = 'block';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('close-info-box'); // Target the close button
    const infoBox = document.getElementById('info-box');  // Target the info box

    // Add click event listener to the close button
    closeButton.addEventListener('click', function() {
        infoBox.style.display = 'none';  // Hide the info box when the button is clicked
        document.getElementById('open-info-box').addEventListener('click', function() {
            infoBox.style.display = 'block';  // Show the info box when "Open Info" is clicked
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const closeButton = document.getElementById('close-info-box'); // Close button
    const openButton = document.getElementById('open-info-box');  // Open button
    const infoBox = document.getElementById('info-box');  // Info box

    // Function to close the info box with a fade-out effect
    closeButton.addEventListener('click', function() {
        infoBox.classList.add('hide');  // Add the 'hide' class to fade out
        setTimeout(function() {
            infoBox.style.display = 'none';  // Completely hide the box after fading
            openButton.style.display = 'block';  // Show the open button
        }, 500);  // Match the CSS transition time (0.5s)
    });

    // Function to open the info box with a fade-in effect
    openButton.addEventListener('click', function() {
        infoBox.style.display = 'block';  // Show the info box first
        setTimeout(function() {
            infoBox.classList.remove('hide');  // Remove the 'hide' class to fade in
        }, 10);  // Small delay to trigger the fade-in effect
        openButton.style.display = 'none';  // Hide the open button
    });
});
