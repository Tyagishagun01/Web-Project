document.getElementById('portfolioForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const personalDetails = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };

    const education = {
        degree: document.getElementById('degree').value,
        university: document.getElementById('university').value,
        year: document.getElementById('year').value
    };

    const skills = document.getElementById('skills').value.split(',').map(skill => skill.trim());
    
    const projects = document.getElementById('projects').value.split('\n').map(project => project.trim());
    
    const contactInfo = {
        linkedin: document.getElementById('linkedin').value,
        github: document.getElementById('github').value
    };

    const portfolioHTML = `
        <h2>${personalDetails.name}</h2>
        <p>Email: ${personalDetails.email}</p>
        <p>Phone: ${personalDetails.phone}</p>
        
        <h3>Education</h3>
        <p>${education.degree}, ${education.university}, ${education.year}</p>
        
        <h3>Skills</h3>
        <ul>
            ${skills.map(skill => `<li>${skill}</li>`).join('')}
        </ul>
        
        <h3>Projects</h3>
        <ul>
            ${projects.map(project => `<li>${project}</li>`).join('')}
        </ul>
        
        <h3>Contact Information</h3>
        <p>LinkedIn: <a href="${contactInfo.linkedin}">${contactInfo.linkedin}</a></p>
        <p>GitHub: <a href="${contactInfo.github}">${contactInfo.github}</a></p>
    `;

    document.getElementById('portfolio').innerHTML = portfolioHTML;
});