import { Section } from '~/components/section';
import { Heading } from '~/components/heading';
import styles from './tech-stack.module.css';

export function TechStack() {
  const items = [
    { key: 'python', label: 'Python', icon: '🐍' },
    { key: 'react', label: 'React', icon: '⚛️' },
    { key: 'tailwind', label: 'Tailwind', icon: '🌬️' },
    { key: 'node', label: 'Node.js', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#2D2D2D"/>
        <path d="M24 8L32 12V20L24 24L16 20V12L24 8Z" stroke="#00D26A" strokeWidth="2" fill="none"/>
        <path d="M24 24L32 28V36L24 40L16 36V28L24 24Z" stroke="#00D26A" strokeWidth="2" fill="none"/>
        <path d="M16 12L24 16L32 12" stroke="#00D26A" strokeWidth="2" fill="none"/>
        <path d="M16 28L24 32L32 28" stroke="#00D26A" strokeWidth="2" fill="none"/>
        <text x="24" y="30" textAnchor="middle" fill="#00D26A" fontSize="8" fontWeight="bold">JS</text>
      </svg>
    ) },
    { key: 'angular', label: 'Angular', icon: '🔺' },
    { key: 'django', label: 'Django', icon: '🧩' },
    { key: 'flask', label: 'Flask', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#000000"/>
        <path d="M24 8C24 8 20 12 20 20C20 28 24 32 24 32C24 32 28 28 28 20C28 12 24 8 24 8Z" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M24 32V40" stroke="#FFFFFF" strokeWidth="2"/>
        <path d="M20 40H28" stroke="#FFFFFF" strokeWidth="2"/>
      </svg>
    ) },
    { key: 'fastapi', label: 'FastAPI', icon: '🚀' },
    { key: 'blockchain', label: 'Blockchain', icon: '⛓️' },
    { key: 'web3', label: 'Web3', icon: '🌐' },
    { key: 'docker', label: 'Docker', icon: '🐳' },
    { key: 'kubernetes', label: 'Kubernetes', icon: '☸️' },
    { key: 'selenium', label: 'Selenium', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#43B02A"/>
        <path d="M12 24C12 17.373 17.373 12 24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24Z" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <path d="M18 24C18 20.686 20.686 18 24 18C27.314 18 30 20.686 30 24C30 27.314 27.314 30 24 30C20.686 30 18 27.314 18 24Z" stroke="#FFFFFF" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="24" r="2" fill="#FFFFFF"/>
      </svg>
    ) },
    { key: 'scraping', label: 'Web Scraping', icon: '🕸️' },
    { key: 'automation', label: 'Automation', icon: '🤖' },
    { key: 'bs4', label: 'BeautifulSoup', icon: '🥣' },
    { key: 'gsuite', label: 'G Suite', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#FFFFFF"/>
        <path d="M24 8C30.627 8 36 13.373 36 20C36 26.627 30.627 32 24 32C17.373 32 12 26.627 12 20C12 13.373 17.373 8 24 8Z" fill="#4285F4"/>
        <path d="M24 12C28.418 12 32 15.582 32 20C32 24.418 28.418 28 24 28C19.582 28 16 24.418 16 20C16 15.582 19.582 12 24 12Z" fill="#34A853"/>
        <path d="M24 16C26.209 16 28 17.791 28 20C28 22.209 26.209 24 24 24C21.791 24 20 22.209 20 20C20 17.791 21.791 16 24 16Z" fill="#FBBC04"/>
        <circle cx="24" cy="20" r="2" fill="#EA4335"/>
        <text x="24" y="38" textAnchor="middle" fill="#5F6368" fontSize="8" fontWeight="bold">G Suite</text>
      </svg>
    ) },
    { key: 'laravel', label: 'Laravel', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48"  fill="#FF2D20"/>
        <path d="M24 12L30 18L24 24L18 18L24 12Z" fill="#FFFFFF"/>
        <path d="M24 24L30 30L24 36L18 30L24 24Z" fill="#FFFFFF"/>
        <path d="M18 18L24 24L18 30L12 24L18 18Z" fill="#FFFFFF"/>
        <path d="M30 18L36 24L30 30L24 24L30 18Z" fill="#FFFFFF"/>
      </svg>
    ) },
    { key: 'php', label: 'PHP', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#777BB4"/>
        <text x="24" y="32" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">PHP</text>
      </svg>
    ) },
    { key: 'aws', label: 'AWS', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#FF9900"/>
        <path d="M24 12C28.418 12 32 15.582 32 20C32 24.418 28.418 28 24 28C19.582 28 16 24.418 16 20C16 15.582 19.582 12 24 12Z" fill="#FFFFFF"/>
        <path d="M24 28C28.418 28 32 31.582 32 36C32 40.418 28.418 44 24 44C19.582 44 16 40.418 16 36C16 31.582 19.582 28 24 28Z" fill="#FFFFFF"/>
        <path d="M12 20C16.418 20 20 23.582 20 28C20 32.418 16.418 36 12 36C7.582 36 4 32.418 4 28C4 23.582 7.582 20 12 20Z" fill="#FFFFFF"/>
        <path d="M36 20C40.418 20 44 23.582 44 28C44 32.418 40.418 36 36 36C31.582 36 28 32.418 28 28C28 23.582 31.582 20 36 20Z" fill="#FFFFFF"/>
      </svg>
    ) },
    { key: 'deploy', label: 'Deployments', icon: '🚀' },
    { key: 'gitlab', label: 'GitLab', icon: '🦊' },
    { key: 'dotnet', label: '.NET', icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="12" fill="#512BD4"/>
        <path d="M24 12C30.627 12 36 17.373 36 24C36 30.627 30.627 36 24 36C17.373 36 12 30.627 12 24C12 17.373 17.373 12 24 12Z" fill="#FFFFFF"/>
        <path d="M24 18C27.314 18 30 20.686 30 24C30 27.314 27.314 30 24 30C20.686 30 18 27.314 18 24C18 20.686 20.686 18 24 18Z" fill="#512BD4"/>
        <text x="24" y="26" textAnchor="middle" fill="#FFFFFF" fontSize="8" fontWeight="bold">.NET</text>
      </svg>
    ) },
    { key: 'powerbi', label: 'Power BI', icon: '📊' },
  ];
  

  return (
    <Section as="section" className={styles.section} id="stack">
      <Heading as="h2" level={3} className={styles.heading}>
        Tech Stack
      </Heading>
      <div className={styles.wrapper} aria-label="Tech stack">
        {items.map(item => (
          <div key={item.key} className={styles.item}>
            <div className={styles.icon} aria-hidden>
              {item.icon}
            </div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}


