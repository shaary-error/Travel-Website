document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const passengers = document.getElementById('passengers').value;

    // Display confirmation message
    const confirmation = document.getElementById('confirmation');
    const confirmationDetails = document.getElementById('confirmationDetails');

    confirmationDetails.innerHTML = `
        <strong>From:</strong> ${from}<br>
        <strong>To:</strong> ${to}<br>
        <strong>Date:</strong> ${date}<br>
        <strong>Time:</strong> ${time}<br>
        <strong>Passengers:</strong> ${passengers}
    `;
    confirmation.classList.remove('hidden');
});