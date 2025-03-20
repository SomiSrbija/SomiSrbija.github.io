document.addEventListener('DOMContentLoaded', () => {
    const planets = document.querySelectorAll('.planet');
    const planetInfoBox = document.getElementById('planet-info-box');
    const infoContent = document.getElementById('info-content');
    const closeInfoBtn = document.getElementById('close-info-btn');

    // Information content for each planet (customize this!)
    const planetData = {
        'projects-info': {
            title: 'My Projects',
            content: `
                <h2>Featured Projects</h2>
                <ul>
                    <li><a href="YOUR_PROJECT_1_LINK" target="_blank">Project 1 Name</a> - Brief description of project 1.</li>
                    <li><a href="YOUR_PROJECT_2_LINK" target="_blank">Project 2 Name</a> - Brief description of project 2.</li>
                    <li><a href="YOUR_PROJECT_3_LINK" target="_blank">Project 3 Name</a> - Brief description of project 3.</li>
                </ul>
                <p>Check out more on my <a href="YOUR_GITHUB_PROFILE_LINK?tab=repositories" target="_blank">GitHub Repositories</a>.</p>
            `
        },
        'skills-info': {
            title: 'Skills & Technologies',
            content: `
                <h2>Skills</h2>
                <ul>
                    <li>JavaScript (ES6+)</li>
                    <li>HTML5 & CSS3</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>Python</li>
                    <li>Git & GitHub</li>
                    <!-- Add more skills -->
                </ul>
                <p>...and always learning more!</p>
            `
        },
        'repos-info': {
            title: 'Key Repositories',
            content: `
                <h2>Featured Repositories</h2>
                <ul>
                    <li><a href="YOUR_REPO_1_LINK" target="_blank">Repo 1 Name</a> - Short repo description.</li>
                    <li><a href="YOUR_REPO_2_LINK" target="_blank">Repo 2 Name</a> - Short repo description.</li>
                    <li><a href="YOUR_REPO_3_LINK" target="_blank">Repo 3 Name</a> - Short repo description.</li>
                </ul>
                <p>Explore all my <a href="YOUR_GITHUB_PROFILE_LINK?tab=repositories" target="_blank">repositories on GitHub</a>.</p>
            `
        },
        'blog-info': {
            title: 'Blog & Articles',
            content: `
                <h2>Latest Blog Posts</h2>
                <p>Coming soon! (Or link to your blog if you have one)</p>
                <!-- Example if you have a blog -->
                <!--
                <ul>
                    <li><a href="YOUR_BLOG_POST_1_LINK" target="_blank">Blog Post Title 1</a></li>
                    <li><a href="YOUR_BLOG_POST_2_LINK" target="_blank">Blog Post Title 2</a></li>
                </ul>
                -->
            `
        },
        'contact-info': {
            title: 'Contact & Social',
            content: `
                <h2>Let's Connect!</h2>
                <p>Email: <a href="mailto:YOUR_EMAIL_ADDRESS">YOUR_EMAIL_ADDRESS</a></p>
                <p>LinkedIn: <a href="YOUR_LINKEDIN_PROFILE_LINK" target="_blank">LinkedIn Profile</a></p>
                <p>Twitter: <a href="YOUR_TWITTER_PROFILE_LINK" target="_blank">Twitter Profile</a></p>
                <!-- Add more social links -->
            `
        },
        'about-info': {
            title: 'About Me',
            content: `
                <h2>About Me</h2>
                <p>Write a brief paragraph about yourself here.  Highlight your background, interests in development, and what you're passionate about.</p>
                <p>You can also link to a more detailed "About Me" page if you have one.</p>
            `
        }
    };

    planets.forEach(planet => {
        planet.addEventListener('click', () => {
            const infoId = planet.dataset.info;
            const info = planetData[infoId];

            if (info) {
                infoContent.innerHTML = `<h2>${info.title}</h2>${info.content}`;
                planetInfoBox.style.display = 'block'; // Show info box
            }
        });
    });

    closeInfoBtn.addEventListener('click', () => {
        planetInfoBox.style.display = 'none'; // Hide info box
    });

    // Close info box if clicking outside of it (optional)
    window.addEventListener('click', (event) => {
        if (event.target === planetInfoBox) {
            planetInfoBox.style.display = 'none';
        }
    });
});
