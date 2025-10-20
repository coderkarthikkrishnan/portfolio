import './Projects.css'

const Projects = () => {
    const projects = [
        { title: 'GDG AASC', desc: 'A modern web app with React and firebase for Google Developers Group in Alpha Arts and Science College.', link: 'https://gdgaasc.netlify.app/' },
        { title: 'Project Two', desc: 'on progress' },

    ]
    return (
        <section id="projects" className="section projects">
            <h2 className="section-title">Projects</h2>
            <div className="projects-grid">
                {projects.map((p) => (
                    <div key={p.title} className="card project-card">
                        <h3 style={{ marginBottom: 8 }}>{p.title}</h3>
                        <p style={{ color: '#c9d1d9' }}>{p.desc}</p>
                        {p.link && (
                            <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ marginTop: 8, display: 'inline-block' }}>
                                View Project
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
