const Footer = () => {
    return (
        <footer className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
            <div style={{ textAlign: 'center', color: '#9aa7b1' }}>
                © {new Date().getFullYear()} Karthik Krishnan GS • Built with React & CSS
            </div>
            {/* Mobile contact footer */}
            <div className="mobile-footer" aria-label="Contact links">
                <a className="mobile-footer-link" href="https://github.com/coderkarthikkrishnan" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.1-.76.08-.74.08-.74 1.22.09 1.86 1.27 1.86 1.27 1.08 1.85 2.84 1.31 3.53 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.09.81 2.2v3.27c0 .32.21.7.82.58A12 12 0 0012 .5z" />
                    </svg>
                    <span>GitHub</span>
                </a>
                <a className="mobile-footer-link" href="https://www.linkedin.com/in/karthikkrishnangs" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer
