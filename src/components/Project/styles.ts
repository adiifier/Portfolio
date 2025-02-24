import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Dynamic responsive grid */
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;
  }

  .project {
    padding: 2rem 1.8rem;
    background-color: #2b2b2b;
    border-radius: 1.2rem;
    transition: 0.25s;
    display: flex;
    flex-direction: column;
    min-height: 100%; /* Ensures project cards have uniform height */
    color: #fff;
    word-wrap: break-word; /* Prevents content overflow */

    &:hover {
      transform: translateY(-5px);
      background-color: var(--pink);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: var(--blue);
      margin-bottom: 2rem;

      .project-links {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      a > img {
        width: 4.5rem; /* Adjusted for better responsiveness */
      }
    }

    h3 {
      margin-bottom: 1.5rem;
      font-size: 1.8rem;
    }

    p {
      letter-spacing: 0.12rem;
      margin-bottom: 2rem;
      font-size: 1.4rem;
      line-height: 1.6; /* Improved readability */

      a {
        color: #fff;
        border-bottom: 1px solid var(--green);
        transition: color 0.25s;

        &:hover {
          color: var(--green);
        }
      }
    }

    footer {
      margin-top: auto;

      .tech-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap; /* Ensures tech stacks don’t overflow */
        gap: 1rem;
        font-size: 1.4rem;
        opacity: 0.6;
      }
    }
  }

  /* Responsive Design */
  @media (max-width: 1024px) {
    .projects {
      grid-template-columns: 1fr 1fr; /* Two columns on medium screens */
    }
  }

  @media (max-width: 768px) {
    .projects {
      grid-template-columns: 1fr; /* Single column on smaller screens */
      gap: 1.5rem;
    }

    .project {
      padding: 1.5rem; /* Adjusted spacing */
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 3rem;
    }

    .projects {
      gap: 1rem;
    }

    .project {
      padding: 1.2rem;
    }

    header a > img {
      width: 3.5rem; /* Smaller size for better fit */
    }
  }
`;
