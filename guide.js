// Example data for 10 tourist guides
const guides = [
    {
        name: "Arpit singh",
        experience: "5 years",
        languages: "English, Spanish, Hindi",
        description: "Expert in historical tours with a passion for local culture.",
        contact: "arpit.singh@example.com"
    },
    {
        name: "Bobby rathore",
        experience: "8 years",
        languages: "English, French, Hindi",
        description: "Specializes in food and wine tours.",
        contact: "bobby.rathore@example.com"
    },
    {
        name: "Chitra sinha",
        experience: "4 years",
        languages: "English, German, Hindi",
        description: "A guide with a love for nature and outdoor adventures.",
        contact: "chitra.sinha@example.com"
    },
    // Add more guides here
    // Example:
    // {
    //     name: "Guide Name",
    //     experience: "X years",
    //     languages: "Languages spoken",
    //     description: "Brief description",
    //     contact: "email@example.com"
    // }
];

function createGuideCard(guide) {
    return `
        <div class="guide-card">
            <h2>${guide.name}</h2>
            <p><strong>Experience:</strong> ${guide.experience}</p>
            <p><strong>Languages:</strong> ${guide.languages}</p>
            <p>${guide.description}</p>
            <p class="contact"><strong>Contact:</strong> <a href="mailto:${guide.contact}">${guide.contact}</a></p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    const guidesContainer = document.getElementById('guides-container');
    guidesContainer.innerHTML = guides.map(createGuideCard).join('');
});