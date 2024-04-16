// Top Nav Bar
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Skills

const SkillsArray = [
    {
        name: 'Java',
        icon: '<i class="devicon-java-plain colored"></i>'
    },
    {
        name: 'Python',
        icon: '<i class="devicon-python-plain colored"></i>'
    },
    {
        name: 'HTML',
        icon: '<i class="devicon-html5-plain colored"></i>'
    },
    {
        name: 'CSS',
        icon: '<i class="devicon-css3-plain colored"></i>'
    },
    {
        name: 'JavaScript',
        icon: '<i class="devicon-javascript-plain colored"></i>'
    },
    {
        name: 'Flask',
        icon: '<i class="devicon-flask-original colored"></i>'
    },
    {
        name: 'Swift',
        icon: '<i class="devicon-swift-plain colored"></i>'
    },
    {
        name: 'Bootstrap',
        icon: '<i class="devicon-bootstrap-plain colored"></i>'
    },
    {
        name: 'Firebase',
        icon: '<i class="devicon-firebase-plain colored"></i>'
    },
    {
        name: 'React',
        icon: '<i class="devicon-react-original colored"></i>'
    },
    {
        name: 'Node.js',
        icon: '<i class="devicon-nodejs-plain colored"></i>'
    },
    {
        name: 'Express',
        icon: '<i class="devicon-express-original colored"></i>'
    },
    {
        name: 'MongoDB',
        icon: '<i class="devicon-mongodb-plain colored"></i>'
    },
    {
        name: 'SQLite',
        icon: '<i class="devicon-sqlite-plain colored"></i>'
    }
];

document.addEventListener("DOMContentLoaded", function () {
    const skillsContainer = document.getElementById('skills-container');

    SkillsArray.forEach(skill => {
        const skillElement = document.createElement('div');
        skillElement.classList.add('skills-data');
        
        const iconElement = document.createElement('div');
        iconElement.classList.add('skill-icon');
        iconElement.innerHTML = skill.icon;

        const nameElement = document.createElement('label');
        nameElement.classList.add('skill-name');
        nameElement.textContent = skill.name;

        skillElement.appendChild(iconElement);
        skillElement.appendChild(nameElement);

        skillsContainer.appendChild(skillElement);
    });
});