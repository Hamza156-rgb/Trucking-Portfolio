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
          <img className="logo-mark" src="/logo-icon.png" alt="Excel Hauling" />
          <span className="logo-text">
            <strong>EXCEL HAULING</strong>
            <span>FREIGHT CARRIER · LLC</span>
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
