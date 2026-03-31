import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  Youtube,
  Music2,
  Instagram,
  Download,
  Sword,
  Eye,
  Sun,
  Moon,
} from 'lucide-react'

/* ============================================
   CONFIGURATION — Edit your links here
   ============================================ */
const PROFILE = {
  avatar: <img src="/andrey.foto.site.png" alt="Andrey" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />,
  username: 'ANDREY EXPLICA',
  subtitle: 'Select a link',
}
interface LinkItem {
  icon: React.ReactNode
  label: string
  href: string
  variant?: 'danger'
}

const LINKS: LinkItem[] = [
  {
    icon: <Youtube size={20} />,
    label: 'YOUTUBE',
    href: 'https://youtube.com',
  },
  {
    icon: <Music2 size={20} />,
    label: 'TIKTOK',
    href: 'https://tiktok.com',
  },
  {
    icon: <Instagram size={20} />,
    label: 'INSTAGRAM',
    href: 'https://instagram.com',
  },
  {
    icon: <Download size={20} />,
    label: 'MODELO DE CURRICULO',
    href: '#',
  },
  {
    icon: <Sword size={20} />,
    label: 'JORNADA ARCANA DEV',
    href: '#',
  },
  {
    icon: <Eye size={20} />,
    label: 'ANALISE DE PORTFOLIO',
    href: '#',
    variant: 'danger',
  },
]

/* ============================================
   COMPONENT
   ============================================ */
function Home() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div
      className="link-bio-container"
      data-theme={darkMode ? 'dark' : 'light'}
    >
      {/* Theme toggle */}
      <button
        className="theme-toggle"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      {/* Profile section */}
      <div className="profile-section">
        {/* Avatar */}
        <div className="avatar neon-border">
          <span className="avatar-emoji">{PROFILE.avatar}</span>
        </div>

        {/* Username */}
        <h1 className="username neon-text">{PROFILE.username}</h1>

        {/* Subtitle */}
        <p className="subtitle cursor">{`> ${PROFILE.subtitle.toUpperCase()}`}</p>
      </div>

      {/* Links */}
      <div className="links-section">
        {LINKS.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-button ${link.variant === 'danger' ? 'link-button--danger' : ''}`}
          >
            <span className="link-button__icon">{link.icon}</span>
            <span className="link-button__label">{link.label}</span>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="bio-footer">CYBERPUNK // LINK BIO</div>
    </div>
  )
}

export const Route = createFileRoute('/')({
  component: Home,
})
