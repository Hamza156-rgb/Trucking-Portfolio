import { useState } from 'react'
import { Phone, Menu } from './icons.jsx'
import { company } from './content.js'

export default function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="wrap">
        <a href="#top" className="logo" onClick={close}>
          <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
            <rect width="64" height="64" rx="12" fill="#FFB300" />
            <path d="M14 44 L27 18 L35 18 L22 44 Z" fill="#12161D" />
            <path d="M31 44 L44 18 L52 18 L39 44 Z" fill="#12161D" />
          </svg>
          <span className="logo-text">
            <strong>EXCEL HAULING</strong>
            <span>MC# {company.mc}</span>
          </span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`}>
          <div className="nav-links">
            <a href="#services" onClick={close}>Services</a>
            <a href="#equipment" onClick={close}>Equipment</a>
            <a href="#process" onClick={close}>Process</a>
            <a href="#coverage" onClick={close}>Coverage</a>
            <a href="#contact" onClick={close}>Contact</a>
            <a className="btn btn-primary" href={company.phoneHref} onClick={close}>
              <Phone /> {company.phone}
            </a>
          </div>
        </nav>

        <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>
    </header>
  )
}
