import { useEffect, useRef } from 'react'
import styles from '../styles/Skills.module.css'

function Skills() {
    const skillsRef = useRef([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const progressBar = entry.target.querySelector(`.${styles.progressFill}`)
                        if (progressBar) {
                            const percent = progressBar.getAttribute('data-percent')
                            progressBar.style.width = percent
                        }
                    }
                })
            },
            { threshold: 0.5 }
        )

        skillsRef.current.forEach((skill) => {
            if (skill) observer.observe(skill)
        })

        return () => observer.disconnect()
    }, [])

    const skills = [
        { name: 'HTML', icon: 'fab fa-html5', percent: '90%' },
        { name: 'CSS', icon: 'fab fa-css3-alt', percent: '85%' },
        { name: 'JavaScript', icon: 'fab fa-js', percent: '80%' },
        { name: 'React', icon: 'fab fa-react', percent: '75%' },
        { name: 'Engineering Drawing', icon: 'fas fa-drafting-compass', percent: '95%' },
        { name: 'Figma', icon: 'fab fa-figma', percent: '70%' },
    ]

    return (
        <section className={styles.skills} id="skills">
            <div className="container">
                <h2 className="section-title">My <span>Skills</span></h2>

                <div className={styles.skillsGrid}>
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={styles.skillCard}
                            ref={(el) => (skillsRef.current[index] = el)}
                        >
                            <div className={styles.skillIcon}>
                                <i className={skill.icon}></i>
                            </div>
                            <h3 className={styles.skillName}>{skill.name}</h3>
                            <div className={styles.skillProgress}>
                                <div className={styles.progressBar}>
                                    <div
                                        className={styles.progressFill}
                                        data-percent={skill.percent}
                                    ></div>
                                </div>
                                <span className={styles.skillPercent}>{skill.percent}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
