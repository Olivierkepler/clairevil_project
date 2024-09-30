document.getElementById('menu-icon').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('show');
    this.classList.toggle('change');
    this.classList.toggle('active');
});

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        var navLinks = document.getElementById('nav-links');
        navLinks.classList.remove('show');
        var menuIcon = document.getElementById('menu-icon');
        menuIcon.classList.remove('change');
        menuIcon.classList.remove('active');
    });
});

var topBtn = document.getElementById('topBtn');

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

topBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//accordion
// Select all accordion headers
const accordionHeaders = document.querySelectorAll('.accordion-header');

// Loop through each header and add a click event listener
accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const openAccordion = document.querySelector('.accordion-content.show');

        // Close the previously opened accordion, if any
        if (openAccordion && openAccordion !== header.nextElementSibling) {
            openAccordion.classList.remove('show');
            openAccordion.style.display = 'none';
        }

        // Toggle the current accordion content
        const accordionContent = header.nextElementSibling;
        accordionContent.classList.toggle('show');
        accordionContent.style.display = accordionContent.classList.contains('show') ? 'block' : 'none';
    });
});



// tabs
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//   tlies

// Function to convert units to meters
function convertToMeters(value, unit) {
    if (unit === "centimeters") {
        return value / 100; // Convert cm to meters
    } else if (unit === "feet") {
        return value * 0.3048; // Convert feet to meters
    } else if (unit === "inches") {
        return value * 0.0254; // Convert inches to meters
    }
    return value; // If meters, no conversion needed
}

// Main function to calculate tiles and cost
function calculateTiles() {
    // Get input values for room dimensions
    const roomLength = parseFloat(document.getElementById('roomLength').value);
    const roomWidth = parseFloat(document.getElementById('roomWidth').value);
    const roomUnit = document.getElementById('roomUnit').value;

    // Get input values for tile dimensions
    const tileLength = parseFloat(document.getElementById('tileLength').value);
    const tileWidth = parseFloat(document.getElementById('tileWidth').value);
    const tileUnit = document.getElementById('tileUnit').value;

    // Get tile price
    const tilePrice = parseFloat(document.getElementById('tilePrice').value);

    // Validation to ensure inputs are numbers and positive
    if (roomLength <= 0 || roomWidth <= 0 || tileLength <= 0 || tileWidth <= 0 || tilePrice <= 0) {
        document.getElementById('result').textContent = "Please enter valid positive dimensions and price.";
        return;
    }

    // Convert all dimensions to meters for consistency
    const roomLengthInMeters = convertToMeters(roomLength, roomUnit);
    const roomWidthInMeters = convertToMeters(roomWidth, roomUnit);
    const tileLengthInMeters = convertToMeters(tileLength, tileUnit);
    const tileWidthInMeters = convertToMeters(tileWidth, tileUnit);

    // Calculate how many tiles fit in each direction
    const tilesHorizontally = Math.ceil(roomLengthInMeters / tileLengthInMeters); // Round up to cover partial tiles
    const tilesVertically = Math.ceil(roomWidthInMeters / tileWidthInMeters);     // Round up to cover partial tiles

    // Calculate total number of tiles
    const totalTiles = tilesHorizontally * tilesVertically;

    // Calculate total price
    const totalPrice = totalTiles * tilePrice;

    // Display result
    document.getElementById('result').textContent = `Total tiles required: ${totalTiles}, Total cost: $${totalPrice.toFixed(2)}`;
}



// floorings


 // Function to convert units to meters for flooring calculation
 function convertToMetersForflooring(value, unit) {
    if (unit === "centimeters") {
        return value / 100; // Convert cm to meters
    } else if (unit === "feet") {
        return value * 0.3048; // Convert feet to meters
    } else if (unit === "inches") {
        return value * 0.0254; // Convert inches to meters
    }
    return value; // If meters, no conversion needed
}

// Main function to calculate number of floorings and total price for the flooring calculator
function calculateflooringDimensions() {
    // Get input values for room dimensions from flooring calculator
    const roomLength = parseFloat(document.getElementById('flooringRoomLengthInput').value);
    const roomWidth = parseFloat(document.getElementById('flooringRoomWidthInput').value);
    const roomUnit = document.getElementById('flooringRoomUnitSelect').value;

    // Get input values for flooring dimensions
    const flooringLength = parseFloat(document.getElementById('flooringLengthInput').value);
    const flooringWidth = parseFloat(document.getElementById('flooringWidthInput').value);
    const flooringUnit = document.getElementById('flooringUnitSelect').value;

    // Get flooring price
    const flooringPrice = parseFloat(document.getElementById('flooringPriceInput').value);

    // Validation to ensure inputs are numbers and positive
    if (roomLength <= 0 || roomWidth <= 0 || flooringLength <= 0 || flooringWidth <= 0 || flooringPrice <= 0) {
        document.getElementById('flooringCalculationResult').textContent = "Please enter valid positive dimensions and price.";
        return;
    }

    // Convert all dimensions to meters for consistency in flooring calculation
    const roomLengthInMeters = convertToMetersForflooring(roomLength, roomUnit);
    const roomWidthInMeters = convertToMetersForflooring(roomWidth, roomUnit);
    const flooringLengthInMeters = convertToMetersForflooring(flooringLength, flooringUnit);
    const flooringWidthInMeters = convertToMetersForflooring(flooringWidth, flooringUnit);

    // Calculate how many floorings fit in each direction
    const flooringsHorizontally = Math.ceil(roomLengthInMeters / flooringLengthInMeters); // Round up to cover partial floorings
    const flooringsVertically = Math.ceil(roomWidthInMeters / flooringWidthInMeters);     // Round up to cover partial floorings

    // Calculate total number of floorings
    const totalfloorings = flooringsHorizontally * flooringsVertically;

    // Calculate total price for the floorings
    const totalPrice = totalfloorings * flooringPrice;

    // Display result in the flooring calculator
    document.getElementById('flooringCalculationResult').textContent = `Total floorings required: ${totalfloorings}, Total cost: $${totalPrice.toFixed(2)}`;
}



// Prevent conflict with previous code by using unique IDs and function names
function calculateTotalCost() {
    // Retrieve input values
    const projectName = document.getElementById('projectName').value;
    const length = parseFloat(document.getElementById('length').value) || 0;
    const width = parseFloat(document.getElementById('width').value) || 0;
    const depth = parseFloat(document.getElementById('depth').value) || 0;
    const materialCost = parseFloat(document.getElementById('materialCost').value) || 0;
    const laborCost = parseFloat(document.getElementById('laborCost').value) || 0;
    const hoursWorked = parseFloat(document.getElementById('hoursWorked').value) || 0;

    // Calculate total material volume in cubic meters
    const totalVolume = length * width * depth;

    // Calculate the total material cost
    const totalMaterialCost = totalVolume * materialCost;

    // Calculate the total labor cost
    const totalLaborCost = laborCost * hoursWorked;

    // Calculate the total project cost
    const totalCost = totalMaterialCost + totalLaborCost;

    // Display the project summary
    const projectSummary = `
        <strong>Project:</strong> ${projectName || "Unnamed Project"}<br>
        <strong>Material Volume:</strong> ${totalVolume.toFixed(2)} cubic unit<br>
        <strong>Total Material Cost:</strong> $${totalMaterialCost.toFixed(2)}<br>
        <strong>Total Labor Cost:</strong> $${totalLaborCost.toFixed(2)}<br>
        <strong>Total Project Cost:</strong> $${totalCost.toFixed(2)}
    `;
    document.getElementById('projectSummary').innerHTML = projectSummary;
}
