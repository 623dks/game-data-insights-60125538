const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid hsl(var(--border-subtle))' }} className="py-6">
      <div className="section-container flex justify-between items-center flex-wrap gap-3">
        <div className="text-[0.78rem] text-muted-custom">
          © {new Date().getFullYear()} Deep Shukla · CSCI 4502 · University of Colorado Boulder
        </div>
        <div className="flex items-center gap-2 text-[0.78rem] text-muted-custom">
          <span>Designed & Maintained by Deep Shukla</span>
          <span className="mx-1">·</span>
          <a
            href="https://linkedin.com/in/deep-shukla-b4035220a"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-icon inline-flex items-center gap-1 text-primary font-semibold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/623dks"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-icon inline-flex items-center gap-1 text-primary font-semibold"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            GitHub
          </a>
        </div>
      </div>
      <div className="section-container mt-3 flex justify-center">
        <span className="text-[0.72rem] text-muted-custom">
          Contact: <a href="mailto:deep.shukla@colorado.edu" className="text-primary hover:underline">📧 deep.shukla@colorado.edu</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
