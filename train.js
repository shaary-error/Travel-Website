document.getElementById("trainBookingForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the form from submitting in the traditional way

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let departureStation = document.getElementById("departureStation").value;
    let arrivalStation = document.getElementById("arrivalStation").value;
    let departureDate = document.getElementById("departureDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let passengers = document.getElementById("passengers").value;
    let trainClass = document.getElementById("trainClass").value;

    // Simple validation
    if (name && email && departureStation && arrivalStation && departureDate && passengers && trainClass) {
        let message = `Thank you, ${name}! Your train from ${departureStation} to ${arrivalStation} has been booked for ${departureDate}.`;
        if (returnDate) {
            message += ` Your return journey is scheduled for ${returnDate}.`;
        }
        document.getElementById("message").innerText = message;
    } else {
        document.getElementById("message").innerText = "Please fill in all required fields.";
    }
});
