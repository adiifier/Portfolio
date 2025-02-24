import { Container } from './styles';
import VinayakSingh from '../../assets/VinayakSingh.webp';

import htmlIcon from '../../assets/html-icon.svg';
import cssIcon from '../../assets/css-icon.svg';
import jsIcon from '../../assets/js-icon.svg';
import nodeIcon from '../../assets/node-icon.svg';
import reactIcon from '../../assets/react-icon.svg';
import typescriptIcon from '../../assets/typescript-icon.svg';

import ScrollAnimation from 'react-animate-on-scroll';
import nextjs from '../../assets/nextjs.svg';
import express from '../../assets/express.svg';
import aws from '../../assets/aws.svg';
import pfp from '../../assets/pfp.png';

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            {/* Hi there! I'm Vinayak, a website developer with a passion for creating custom online experiences for my
            clients. With a skill set including HTML, CSS, JavaScript, and React, I have the tools to bring any website
            vision to life. */}
            Hi there! I'm Aditya Yadav, a passionate Full-Stack Developer who loves building intuitive and efficient web
            applications. With expertise in React, TypeScript, Node.js, and PostgreSQL, I create seamless digital
            experiences that are both scalable and user-friendly.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: '2rem', marginBottom: '2rem' }}>
          <p>
            {/* But my services go beyond just custom development - I'm also proficient in using CMS systems like WordPress
            and Shopify, making it easy for my clients to take control of their own websites and keep them up to date. */}
            Beyond coding, I enjoy exploring new technologies, system design, and open-source contributions. I'm always
            eager to learn, collaborate, and push the boundaries of what's possible in web development.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            {/* So if you're in need of a new website or just looking to revamp your current online presence, I'd love to
            chat and see how I can help. Let's bring your website dreams to reality together! */}
            If you're looking to build something innovative or just want to discuss tech, feel free to reach out. Let’s
            create something amazing together!
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.1 * 1000}>
              <img src={express} alt="Wordpress" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.12 * 1000}>
              <img src={nextjs} alt="shopify" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.13 * 1000}>
              <img src={reactIcon} alt="React" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.14 * 1000}>
              <img src={typescriptIcon} alt="Typescript" />
            </ScrollAnimation>
          </div>
          {/* <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.15 * 1000}>
              <img src={vueIcon} alt="Vue" />
            </ScrollAnimation>
          </div> */}
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.16 * 1000}>
              <img src={nodeIcon} alt="Node" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.17 * 1000}>
              <img src={htmlIcon} alt="Html" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.18 * 1000}>
              <img src={cssIcon} alt="Css" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={aws} alt="bootstrap" />
            </ScrollAnimation>
          </div>
          <div className="hability">
            <ScrollAnimation animateIn="fadeInUp" delay={0.19 * 1000}>
              <img src={jsIcon} alt="JavaScript" />
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={pfp} alt="Aditya yadav" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
