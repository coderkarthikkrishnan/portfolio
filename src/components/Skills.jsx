import './Skills.css'

const Icon = {
    JavaScript: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z" />
            <path d="M86.781 106.354c2.545 4.163 5.861 7.231 11.722 7.231 4.927 0 8.068-2.463 8.068-5.872 0-4.081-3.236-5.53-8.68-7.91l-2.981-1.276c-8.602-3.662-14.316-8.242-14.316-17.924 0-8.922 6.794-15.706 17.414-15.706 7.557 0 12.981 2.637 16.874 9.564l-9.241 5.92c-2.034-3.662-4.228-5.101-7.633-5.101-3.477 0-5.682 2.205-5.682 5.101 0 3.571 2.205 5.02 7.29 7.231l3.033 1.276c10.293 4.392 16.008 8.849 16.008 18.898 0 10.833-8.508 16.77-19.938 16.77-11.16 0-18.377-5.314-21.881-12.254zm-44.563 1.042c1.874 3.331 3.571 6.15 7.633 6.15 3.893 0 6.353-1.52 6.353-7.431V69.333h11.845v36.791c0 12.281-7.206 17.924-17.74 17.924-9.51 0-15.035-4.927-17.86-10.857z" />
        </svg>
    ),
    Python: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Interlocking Python snakes (simplified) */}
            <rect x="26" y="18" width="76" height="44" rx="12" fill="#3776AB" />
            <rect x="26" y="66" width="76" height="44" rx="12" fill="#FFD43B" />
            {/* Eyes */}
            <circle cx="80" cy="38" r="6" fill="#ffffff" opacity="0.9" />
            <circle cx="48" cy="88" r="6" fill="#2b2b2b" opacity="0.7" />
        </svg>
    ),
    Java: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Stylized cup with steam */}
            <path fill="none" stroke="#E76F00" strokeWidth="4" strokeLinecap="round" d="M54 38c10 6 20 6 30 0" />
            <path fill="none" stroke="#E76F00" strokeWidth="4" strokeLinecap="round" d="M58 28c6 4 12 4 18 0" />
            <path fill="none" stroke="#E76F00" strokeWidth="4" strokeLinecap="round" d="M62 20c3 2 6 2 9 0" />
            <path fill="none" stroke="#5382A1" strokeWidth="6" strokeLinejoin="round" d="M38 70h44c0 14-10 22-26 22S38 84 38 70Z" />
            <path fill="none" stroke="#5382A1" strokeWidth="6" strokeLinecap="round" d="M82 74c10 0 16 8 8 14-5 4-12 2-12 2" />
        </svg>
    ),
    React: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <circle cx="64" cy="64" r="8" fill="#61DAFB" />
            <g fill="none" stroke="#61DAFB" strokeWidth="6">
                <ellipse rx="40" ry="16" cx="64" cy="64" transform="rotate(0 64 64)" />
                <ellipse rx="40" ry="16" cx="64" cy="64" transform="rotate(60 64 64)" />
                <ellipse rx="40" ry="16" cx="64" cy="64" transform="rotate(120 64 64)" />
            </g>
        </svg>
    ),
    HTML5: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#E44D26" d="M19 114L10 2h108l-9 112-45 12z" />
            <path fill="#F16529" d="M64 117l36-10 8-95H64z" />
        </svg>
    ),
    CSS3: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#1572B6" d="M19 114L10 2h108l-9 112-45 12z" />
            <path fill="#33A9DC" d="M64 117l36-10 8-95H64z" />
        </svg>
    ),
    'Node.js': (
        <svg viewBox="0 0 256 272" width="28" height="28" aria-hidden>
            <path fill="#539E43" d="M128 0l128 74v124l-128 74L0 198V74z" />
        </svg>
    ),
    MySQL: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#00618A" d="M64 20c-20 0-36 16-36 36s16 36 36 36 36-16 36-36S84 20 64 20z" />
        </svg>
    ),
    MongoDB: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <path fill="#10AA50" d="M64 8s24 24 24 56-24 56-24 56-24-24-24-56 24-56 24-56z" />
        </svg>
    ),
    NumPy: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Cube */}
            <polygon points="64,16 100,36 64,56 28,36" fill="#4F77CF" />
            <polygon points="28,36 64,56 64,96 28,76" fill="#4067B3" />
            <polygon points="100,36 64,56 64,96 100,76" fill="#5C88E2" />
            {/* N */}
            <path d="M44 80V48h8l24 22V48h8v32h-8L52 58v22h-8z" fill="#ffffff" />
        </svg>
    ),
    Pandas: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Two vertical bars with squares */}
            <rect x="34" y="22" width="16" height="84" rx="4" fill="#A259FF" />
            <rect x="78" y="22" width="16" height="84" rx="4" fill="#F24E1E" />
            <rect x="34" y="34" width="16" height="16" rx="3" fill="#1ABCFE" />
            <rect x="78" y="78" width="16" height="16" rx="3" fill="#0ACF83" />
        </svg>
    ),
    matplotlib: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Pie chart style */}
            <circle cx="64" cy="64" r="32" fill="#1f2937" />
            <path d="M64 64 L64 32 A32 32 0 0 1 95 50 Z" fill="#F59E0B" />
            <path d="M64 64 L95 50 A32 32 0 0 1 90 90 Z" fill="#8B5CF6" />
            <path d="M64 64 L90 90 A32 32 0 0 1 64 96 Z" fill="#3B82F6" />
            <path d="M64 64 L64 96 A32 32 0 0 1 64 32 Z" fill="#10B981" />
        </svg>
    ),
    Git: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Rhombus background in Git orange */}
            <polygon points="64,8 120,64 64,120 8,64" fill="#F05033" />
            {/* Branch connections */}
            <path d="M54 56 L74 38" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
            <path d="M54 68 L86 86" stroke="#ffffff" strokeWidth="8" strokeLinecap="round" />
            {/* Nodes */}
            <circle cx="54" cy="62" r="8" fill="#ffffff" />
            <circle cx="74" cy="38" r="8" fill="#ffffff" />
            <circle cx="86" cy="86" r="8" fill="#ffffff" />
        </svg>
    ),
    Github: (
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
            <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.27 1.86 1.27 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.09.81 2.2v3.27c0 .32.21.7.82.58A12 12 0 0012 .5z" />
        </svg>
    ),
    Figma: (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            {/* Five rounded squares forming the Figma mark */}
            <rect x="44" y="20" width="28" height="28" rx="14" fill="#A259FF" />
            <rect x="72" y="20" width="28" height="28" rx="14" fill="#F24E1E" />
            <rect x="44" y="48" width="28" height="28" rx="14" fill="#1ABCFE" />
            <rect x="72" y="48" width="28" height="28" rx="14" fill="#FF7262" />
            <rect x="44" y="76" width="28" height="28" rx="14" fill="#0ACF83" />
        </svg>
    ),
    'Power BI': (
        <svg viewBox="0 0 128 128" width="28" height="28" aria-hidden>
            <rect x="16" y="64" width="12" height="36" fill="#F2C811" />
            <rect x="36" y="48" width="12" height="52" fill="#F2C811" />
            <rect x="56" y="32" width="12" height="68" fill="#F2C811" />
            <rect x="76" y="24" width="12" height="76" fill="#F2C811" />
        </svg>
    ),
}

const Skills = () => {
    const skills = [
        'JavaScript', 'Python', 'Java', 'C++', 'C', 'NumPy', 'Pandas', 'matplotlib',
        'React', 'HTML5', 'CSS3', 'Node.js', 'MySQL', 'MongoDB', 'Git', 'Github', 'Power BI', 'Figma'
    ]

    const renderIcon = (name) => {
        if (Icon[name]) return Icon[name]
        // Fallback: initial badge
        const initial = name.trim()[0]?.toUpperCase() || '?'
        return (
            <div style={{ fontWeight: 800, fontSize: 16 }}>{initial}</div>
        )
    }

    const subMap = {
        JavaScript: 'ES6+ / DOM',
        Python: 'Data/Backend',
        Java: 'OOP',
        React: 'SPA / Hooks',
        HTML5: 'Semantic',
        CSS3: 'Flex/Grid',
        'Node.js': 'API/CLI',
        MySQL: 'RDBMS',
        MongoDB: 'NoSQL',
        Git: 'VCS',
        Github: 'Code Hosting',
        Figma: 'Design',
        'Power BI': 'BI/Reports',
    }

    return (
        <section id="skills" className="section skills">
            <h2 className="section-title">Skills</h2>
            <div className="skills-content">
                <div className="skills-grid">
                    {skills.map((name) => (
                        <div key={name} className="skill-card">
                            <div className="skill-icon" aria-hidden>
                                {renderIcon(name)}
                            </div>
                            <div className="skill-label">
                                <span className="skill-name">{name}</span>
                                {subMap[name] && <span className="skill-sub">{subMap[name]}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills
