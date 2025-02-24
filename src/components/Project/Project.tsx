import { Container } from './styles';
import githubIcon from '../../assets/github.svg';
import externalLink from '../../assets/external-link.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {/* Street-Niti Project */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/adiifier/Street-Niti" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repo" />
                </a>
                <a href="https://streetniti.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Demo" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Street-Niti: Smart Vendor Management System</h3>
              <p>
                A digital solution for urban vendor regulation, enabling secure applications, approvals, and vendor
                management. Features include **role-based access, authentication, and database optimization.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>Prisma</li>
                <li>PostgreSQL</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        {/* SecureNest Project */}
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/adiifier/SecureNest" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="GitHub Repo" />
                </a>
                <a href="https://secure-nest-xqmu.vercel.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Live Demo" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SecureNest: Authentication & User Management</h3>
              <p>
                A authentication system that securely manages user data locally on the device. Designed for
                privacy-focused applications, SecureNest ensures client-side encryption without relying on external
                databases or cloud storage.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>JavaScript</li>
                <li>Node.js</li>

                <li>JWT Authentication</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}
