import React from 'react';
import Navbar from '../component-library/Navbar';
import Footer from '../component-library/Footer';
import Section from '../component-library/Section';
import Card from '../component-library/Card';
import Pill from '../component-library/Pill';
import { workItems } from '../content/work';
import { skills } from '../content/skills';
import { resources } from '../content/resources';

export default function App() {
  return (
    <>
      <header className="navbar">
        <div className="navbar-inner">
          <div style={{display:'flex', alignItems:'center', gap:12}}>
            <img src={"/images/avatar.png"} alt="avatar" width="32" height="32" style={{borderRadius:999, border:'1px solid var(--border)'}}/>
            <strong>Brandan Brajkovich</strong>
          </div>
          <div className="badge">Assignment 14 • Portfolio</div>
        </div>
      </header>

      <main className="container">
        <Section title="Basic information" desc="A concise snapshot of who I am and what I’m focused on right now.">
          <div className="card">
            <p><strong>Role:</strong> Senior Full-Stack Software Engineer</p>
            <p><strong>Location:</strong> Winnipeg, MB</p>
            <p><strong>Focus:</strong> React, Node.js, TypeScript, Java, CI/CD, Docker, AWS</p>
            <p><strong>About:</strong> I build reliable, fast web apps and love smoothing the developer experience with great tooling and automation.</p>
          </div>
        </Section>

        <Section title="Work" desc="Selected course work and projects with tech stacks and links.">
          <div className="grid grid-3">
            {workItems.map((item) => (
              <Card key={item.title}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div style={{margin:'8px 0 12px'}}>
                  {item.tech.map((t) => <Pill key={t} text={t} />)}
                </div>
                <a href={item.link} target="_blank" rel="noreferrer">View</a>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Skills" desc={skills.description}>
          <div className="card">
            <h3>Languages & Frameworks</h3>
            <div style={{margin:'8px 0 16px'}}>
              {skills.languages.map((t) => <Pill key={t} text={t} />)}
            </div>
            <h3>Tools</h3>
            <div>
              {skills.tools.map((t) => <Pill key={t} text={t} />)}
            </div>
          </div>
        </Section>

        <Section title="Resources" desc="Helpful references and learning links.">
          <div className="grid grid-3">
            {resources.map(r => (
              <Card key={r.title}>
                <img src={r.image} alt={r.title}/>
                <h3>{r.title}</h3>
                <p>{r.summary}</p>
                <a href={r.link} target="_blank" rel="noreferrer">Open</a>
              </Card>
            ))}
          </div>
        </Section>

        <Section title="Developer Setup" desc="Editor & terminal preferences so contributors can match my environment.">
          <div className="grid grid-2">
            <Card>
              <h3>VS Code setup</h3>
              <ul>
                <li>Extensions: ESLint, Prettier, GitLens</li>
                <li>Format on save</li>
                <li>Auto import suggestions</li>
              </ul>
            </Card>
            <Card>
              <h3>Terminal setup</h3>
              <ul>
                <li>Windows Terminal with PowerShell</li>
                <li>Node 20 LTS via nvm-windows</li>
                <li>Docker Desktop (WSL2 backend)</li>
              </ul>
            </Card>
          </div>
          <div className="card" style={{marginTop:16}}>
            <h3>Preferred editor font</h3>
            <p>JetBrains Mono / Cascadia Code with ligatures.</p>
          </div>
        </Section>
      </main>

      <Footer />
    </>
  );
}
