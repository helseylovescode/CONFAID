// Fetch resources from the backend and display them
document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/resources')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('resources-container');
            data.forEach(resource => {
                const resourceElement = document.createElement('div');
                resourceElement.classList.add('resource-item');
                resourceElement.innerHTML = `
                    <h3>${resource.title}</h3>
                    <p>${resource.description}</p>
                    <a href="${resource.link}" target="_blank">Learn More</a>
                `;
                container.appendChild(resourceElement);
            });
        })
        .catch(error => console.error('Error fetching resources:', error));
});
