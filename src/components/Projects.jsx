import styles from '../styles/Projects.module.css'

function Projects() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Full-featured online store with payment integration and admin dashboard.',
            image: 'https://via.placeholder.com/400x250/081b29/00abf0?text=E-Commerce+Platform',
            tags: ['React', 'Node.js', 'MongoDB'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'Task Management App',
            description: 'Productivity application with real-time collaboration features.',
            image: 'https://via.placeholder.com/400x250/081b29/00abf0?text=Task+Manager',
            tags: ['Vue.js', 'Firebase', 'WebSockets'],
            liveLink: '#',
            codeLink: '#'
        },
        {
            title: 'Hospital Management System',
            description: 'Comprehensive system for managing hospital operations and patient records.',
            image: 'https://via.placeholder.com/400x250/081b29/00abf0?text=Hospital+System',
            tags: ['React.js', 'Node.js', 'MongoDB'],
            liveLink: '#',
            codeLink: '#'
        }
    ]

    return (
        <section className={styles.projects} id="projects">
            <div className="container">
                <h2 className="section-title">Latest <span>Projects</span></h2>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div key={index} className={styles.projectCard}>
                            <div className={styles.projectImage}>
                                <img src={project.image} alt={project.title} />
                                <div className={styles.projectOverlay}>
                                    <div className={styles.projectLinks}>
                                        <a href={project.liveLink} className={styles.projectLink} aria-label="View Project">
                                            <i className="fas fa-external-link-alt"></i>
                                        </a>
                                        <a href={project.codeLink} className={styles.projectLink} aria-label="View Code">
                                            <i className="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                                <div className={styles.projectTech}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <span key={tagIndex} className={styles.techTag}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects
