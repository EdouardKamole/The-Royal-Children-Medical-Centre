let map;
let marker;
const branches = [
    { name: 'Hospital Branch 1', lat: 40.748817, lng: -73.985428, address: 'New York, NY', contact: '(123) 456-7890' },
    { name: 'Hospital Branch 2', lat: 34.052235, lng: -118.243683, address: 'Los Angeles, CA', contact: '(234) 567-8901' },
    { name: 'Hospital Branch 3', lat: 41.878113, lng: -87.629799, address: 'Chicago, IL', contact: '(345) 678-9012' },
    // Add more branches as needed
];

function initMap() {
    const center = { lat: 39.8283, lng: -98.5795 }; // Default center (USA)
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: center,
    });

    // Add markers for each branch
    branches.forEach(branch => {
        const marker = new google.maps.Marker({
            position: { lat: branch.lat, lng: branch.lng },
            map: map,
            title: branch.name,
        });
        const infoWindow = new google.maps.InfoWindow({
            content: `
                <h5>${branch.name}</h5>
                <p>${branch.address}</p>
                <p>Contact: ${branch.contact}</p>
            `,
        });
        marker.addListener('click', () => {
            infoWindow.open(map, marker);
        });
    });
}

function updateBranchList(location) {
    const branchList = document.getElementById("branchList");
    branchList.innerHTML = '';
    branches.forEach(branch => {
        if (branch.address.toLowerCase().includes(location.toLowerCase())) {
            const listItem = document.createElement('li');
            listItem.classList.add('list-group-item');
            listItem.innerHTML = `
                <h5>${branch.name}</h5>
                <p>${branch.address}</p>
                <p>Contact: ${branch.contact}</p>
            `;
            branchList.appendChild(listItem);
        }
    });
}

document.getElementById("searchBtn").addEventListener('click', () => {
    const location = document.getElementById("locationInput").value;
    updateBranchList(location);
    // Optionally, update the map view based on location (geolocation API or Google Maps Geocoding API can be used here)
});

