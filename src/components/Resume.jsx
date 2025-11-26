import styles from "../styles/Resume.module.css";

function Resume() {
    const viewResume = () => {
        window.open("/resume.pdf", "_blank");
    };

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/resume.pdf";
        link.download = "Shanmukha_Potturi_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

const viewExperiences = () => {
    window.open("/experience-certificate.jpg", "_blank");
};

    return (
        <section className={styles.resume} id="resume">
            <div className="container">
                <h2 className="section-title">
                   Experience & Resume <span>Actions</span>
                </h2>

                <div className={styles.resumeActions}>
                    <button className="btn btn-primary" onClick={viewExperiences}>
                        <span className={styles.emoji}>💼</span> View Experiences
                    </button>

                    <button className="btn btn-outline" onClick={viewResume}>
                        <span className={styles.emoji}>📄</span> View Resume
                    </button>

                    <button className="btn btn-outline" onClick={downloadResume}>
                        <span className={styles.emoji}>⬇️</span> Download CV
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Resume;
