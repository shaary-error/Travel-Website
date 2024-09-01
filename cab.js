document.getElementById('cab-form').addEventListener('submit', function(event) {
    event.preventDefault();
    bookCab();
});

async function bookCab() {
    const pickup = document.getElementById('pickup').value;
    const dropoff = document.getElementById('dropoff').value;

    try {
        const response = await fetch('https://api.example.com/v1/cabs/book', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer your_api_key_here',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pickup, dropoff })
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        displayConfirmation(data);
    } catch (error) {
        console.error('Error booking cab:', error);
        alert('Failed to book cab. Please try again.');
    }
}

function displayConfirmation(confirmation) {
    const confirmationDiv = document.getElementById('confirmation');
    confirmationDiv.innerHTML = `
        <h2>Your Booking is Confirmed!</h2>
        <p><strong>Booking ID:</strong> ${confirmation.bookingId}</p>
        <p><strong>Pickup Location:</strong> ${confirmation.pickup}</p>
        <p><strong>Dropoff Location:</strong> ${confirmation.dropoff}</p>
        <p><strong>Driver Name:</strong> ${confirmation.driverName}</p>
        <p><strong>Estimated Arrival:</strong> ${confirmation.estimatedArrival}</p>
    `;
}