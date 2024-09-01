document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let departureCity = document.getElementById("departureCity").value;
    let arrivalCity = document.getElementById("arrivalCity").value;
    let departureDate = document.getElementById("departureDate").value;
    let returnDate = document.getElementById("returnDate").value;
    let passengers = document.getElementById("passengers").value;

    if (name && email && departureCity && arrivalCity && departureDate && passengers) {
        document.getElementById("message").innerText = `Thank you, ${name}! Your flight from ${departureCity} to ${arrivalCity} has been booked.`;
    } else {
        document.getElementById("message").innerText = "Please fill in all required fields.";
    }
});
