import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Reveal from './components/Reveal.jsx'
import * as Icon from './components/icons.jsx'
import {
  company, stats, services, specs, steps, regions, lanes, testimonials,
} from './components/content.js'

/* ---------- Dispatch ticker (signature element) ---------- */
function Ticker() {
  const items = [...lanes, ...lanes] // duplicate for seamless loop
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((l, i) => (
          <span className="ticker-item" key={i}>
            <span>{l.route}</span>
            <span className="sep">·</span>
            <span className="status">{l.status}</span>
            <span className="sep">///</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ---------- Road divider ---------- */
const Road = () => <div className="road" aria-hidden="true" />

/* ---------- Stats ---------- */
function Stats() {
  return (
    <section className="section dark">
      <div className="wrap">
        <Reveal className="stats">
          {stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="num">
                {s.prefix || ''}{s.num}<small>{s.suffix}</small>
              </div>
              <div className="lbl">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Services ---------- */
function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">What we do</span>
          <h2>Freight handled end to end.</h2>
          <p>From sourcing the load to the final signature, Excel Hauling keeps every
            move organized, tracked, and on time.</p>
        </Reveal>
        <div className="cards">
          {services.map((s, i) => {
            const I = Icon[s.icon]
            return (
              <Reveal className="card" key={i} delay={i * 70}>
                <span className="no">0{i + 1}</span>
                <div className="ic"><I /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ---------- Equipment ---------- */
function TruckArt() {
  return (
    <svg className="truck-svg" viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="26 foot box truck">
      {/* ground line */}
      <line x1="10" y1="180" x2="410" y2="180" stroke="#FFB300" strokeWidth="2" strokeDasharray="14 10" />
      {/* box body */}
      <rect x="30" y="50" width="230" height="110" rx="6" fill="#272E39" stroke="#3A4350" strokeWidth="2" />
      {/* box ridges */}
      <line x1="70" y1="50" x2="70" y2="160" stroke="#3A4350" strokeWidth="2" />
      <line x1="120" y1="50" x2="120" y2="160" stroke="#3A4350" strokeWidth="2" />
      <line x1="170" y1="50" x2="170" y2="160" stroke="#3A4350" strokeWidth="2" />
      <line x1="220" y1="50" x2="220" y2="160" stroke="#3A4350" strokeWidth="2" />
      {/* label plate */}
      <rect x="48" y="78" width="120" height="40" rx="4" fill="#FFB300" />
      <text x="108" y="103" textAnchor="middle" fontFamily="Archivo, sans-serif" fontWeight="900" fontSize="18" fill="#12161D">26 FT</text>
      {/* cab */}
      <path d="M260 90 h40 l34 34 v36 h-74 z" fill="#FFB300" />
      <path d="M268 96 h26 l24 26 h-50 z" fill="#12161D" />
      {/* wheels */}
      <circle cx="95" cy="165" r="20" fill="#12161D" stroke="#3A4350" strokeWidth="3" />
      <circle cx="95" cy="165" r="7" fill="#3A4350" />
      <circle cx="200" cy="165" r="20" fill="#12161D" stroke="#3A4350" strokeWidth="3" />
      <circle cx="200" cy="165" r="7" fill="#3A4350" />
      <circle cx="305" cy="165" r="20" fill="#12161D" stroke="#3A4350" strokeWidth="3" />
      <circle cx="305" cy="165" r="7" fill="#3A4350" />
    </svg>
  )
}

function Equipment() {
  return (
    <section className="section dark" id="equipment">
      <div className="wrap equip">
        <Reveal className="equip-visual">
          <span className="badge">SPEC SHEET</span>
          <TruckArt />
        </Reveal>
        <Reveal delay={120}>
          <span className="eyebrow on-dark">The equipment</span>
          <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', margin: '16px 0 14px' }}>
            One truck, dialed&nbsp;in.
          </h2>
          <p style={{ color: '#AEB6C1', marginTop: 0 }}>
            A clean, well-maintained 26&nbsp;ft box truck built for regional freight —
            plenty of room for pallets, liftgate ready, and kept road-ready every day.
          </p>
          <ul className="equip-specs">
            {specs.map((s, i) => (
              <li key={i}>
                <span className="k">{s.k}</span>
                <span className="v">{s.v}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Process ---------- */
function Process() {
  return (
    <section className="section concrete" id="process">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>From call to delivered in four steps.</h2>
        </Reveal>
        <div className="steps">
          {steps.map((s, i) => (
            <Reveal className="step" key={i} delay={i * 80}>
              <div className="no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Coverage ---------- */
function Coverage() {
  return (
    <section className="section dark" id="coverage">
      <div className="wrap coverage">
        <Reveal>
          <span className="eyebrow on-dark">Where we run</span>
          <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', margin: '16px 0 14px' }}>
            Based in Philly. Built for the corridor.
          </h2>
          <p style={{ color: '#AEB6C1' }}>
            We run daily lanes out of the Greater Philadelphia area and across the
            Northeast corridor, with over-the-road capacity when the load calls for it.
          </p>
          <div className="region-list">
            {regions.map((r, i) => (
              <span className={`region ${r.hub ? 'hub' : ''}`} key={i}>
                {r.hub ? '★ ' : ''}{r.name}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={120} className="equip-visual" >
          <span className="badge">HOME BASE</span>
          <Icon.Map style={{ width: 64, height: 64, color: '#FFB300', margin: '0 auto 18px' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 900, fontSize: 30, color: '#fff' }}>
              Philadelphia, PA
            </div>
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.14em', color: '#8A95A2', marginTop: 8 }}>
              SERVING THE NORTHEAST · {company.hours.toUpperCase()}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Testimonials ---------- */
function Testimonials() {
  return (
    <section className="section">
      <div className="wrap">
        <Reveal className="section-head">
          <span className="eyebrow">Shippers &amp; brokers</span>
          <h2>Trusted to deliver.</h2>
        </Reveal>
        <div className="quotes">
          {testimonials.map((t, i) => (
            <Reveal className="quote" key={i} delay={i * 80}>
              <div className="stars">{'★'.repeat(t.stars)}</div>
              <p>“{t.text}”</p>
              <div className="by">
                <span className="av">{t.name.split(' ').map(n => n[0]).join('')}</span>
                <span><b>{t.name}</b><span>{t.role}</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Contact ---------- */
function Contact() {
  const [sent, setSent] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }
  return (
    <section className="section dark" id="contact">
      <div className="wrap contact-grid">
        <Reveal className="contact-info">
          <span className="eyebrow on-dark">Get a quote</span>
          <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', margin: '16px 0 28px' }}>
            Ready to move a load?
          </h2>
          <div className="row">
            <span className="ic"><Icon.Phone /></span>
            <div>
              <div className="k">Call dispatch</div>
              <a className="v" href={company.phoneHref}>{company.phone}</a>
            </div>
          </div>
          <div className="row">
            <span className="ic"><Icon.Shield /></span>
            <div>
              <div className="k">MC Number</div>
              <div className="v">{company.mc}</div>
            </div>
          </div>
          <div className="row">
            <span className="ic"><Icon.Clock /></span>
            <div>
              <div className="k">Hours</div>
              <div className="v">{company.hours}</div>
            </div>
          </div>
          <div className="row">
            <span className="ic"><Icon.Pin /></span>
            <div>
              <div className="k">Service area</div>
              <div className="v">{company.region}</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className="form" onSubmit={onSubmit}>
            {sent && (
              <div className="ok">
                ✓ Thanks — your request was received. We’ll call you back shortly.
              </div>
            )}
            <div className="two">
              <div className="field">
                <label>Your name</label>
                <input type="text" placeholder="Full name" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" placeholder="(000) 000-0000" required />
              </div>
            </div>
            <div className="field">
              <label>Company</label>
              <input type="text" placeholder="Company name" />
            </div>
            <div className="two">
              <div className="field">
                <label>Pickup</label>
                <input type="text" placeholder="City, ST" required />
              </div>
              <div className="field">
                <label>Delivery</label>
                <input type="text" placeholder="City, ST" required />
              </div>
            </div>
            <div className="field">
              <label>Load details</label>
              <textarea placeholder="Weight, pallets, timing, anything we should know…" />
            </div>
            <button className="btn btn-primary" type="submit">
              Request a quote <Icon.Arrow />
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="logo" style={{ marginBottom: 16 }}>
              <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
                <rect width="64" height="64" rx="12" fill="#FFB300" />
                <path d="M14 44 L27 18 L35 18 L22 44 Z" fill="#12161D" />
                <path d="M31 44 L44 18 L52 18 L39 44 Z" fill="#12161D" />
              </svg>
              <span className="logo-text">
                <strong style={{ color: '#fff' }}>EXCEL HAULING</strong>
                <span>LLC</span>
              </span>
            </div>
            <p>Reliable box-truck freight and dispatch across the Northeast corridor.
              Booked fast, tracked closely, delivered on time.</p>
            <div className="footer-credentials">
              <span className="tag"><span className="dot"></span>MC# {company.mc}</span>
              <span className="tag"><span className="dot"></span>{company.equipment}</span>
            </div>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#services">Services</a></li>
              <li><a href="#equipment">Equipment</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#coverage">Coverage</a></li>
            </ul>
          </div>
          <div>
            <h4>Dispatch</h4>
            <ul>
              <li><a href={company.phoneHref}>{company.phone}</a></li>
              <li><a href="#contact">Request a quote</a></li>
              <li>{company.hours}</li>
              <li>{company.region}</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>MC# {company.mc} · USDOT registered</span>
        </div>
      </div>
    </footer>
  )
}

/* ---------- App ---------- */
export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Ticker />
      <Stats />
      <Road />
      <Services />
      <Equipment />
      <Process />
      <Coverage />
      <Testimonials />
      <Road />
      <Contact />
      <Footer />
    </>
  )
}
