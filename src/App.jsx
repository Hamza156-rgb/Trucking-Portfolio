import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Reveal from './components/Reveal.jsx'
import Chatbot from './components/Chatbot.jsx'
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
          <p>From the first call to the final signature, Excel Hauling moves your
            freight direct — organized, tracked, and on time, with no broker in
            the middle.</p>
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
          <span className="eyebrow">What shippers say</span>
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
    const f = new FormData(e.target)
    const v = (k) => (f.get(k) || '').toString().trim()
    const lines = [
      '*New quote request — Excel Hauling*',
      '',
      `*Name:* ${v('name')}`,
      `*Phone:* ${v('phone')}`,
      `*Email:* ${v('email')}`,
      v('company') && `*Company:* ${v('company')}`,
      '',
      '*Quote details*',
      `*Pickup:* ${v('pickup_when')} — ${v('pickup_where')}`,
      `*Delivery:* ${v('delivery_when')} — ${v('delivery_where')}`,
      '',
      '*Load details*',
      `*Commodity:* ${v('commodity')}`,
      `*Weight:* ${v('weight')}`,
      `*Dimensions:* ${v('dimensions')}`,
      v('rate') && `*Rate:* ${v('rate')}`,
    ].filter(Boolean)
    const url = `${company.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }
  return (
    <section className="section dark" id="contact">
      <div className="wrap">
        <Reveal className="contact-head">
          <span className="eyebrow on-dark">Get a quote</span>
          <h2 style={{ fontSize: 'clamp(30px,4vw,46px)', margin: '16px 0 12px' }}>
            Ready to move a load?
          </h2>
          <p style={{ color: '#AEB6C1', margin: 0, maxWidth: 620 }}>
            Send us the load details and we’ll get a rate back fast — call, WhatsApp,
            or fill out the form below.
          </p>
        </Reveal>

        <Reveal className="contact-bar">
          <a className="cbar-item" href={company.phoneHref}>
            <span className="ic"><Icon.Phone /></span>
            <span className="cbar-txt">
              <span className="k">Call us direct</span>
              <span className="v">{company.phone}</span>
            </span>
          </a>
          <a className="cbar-item" href={company.whatsappHref} target="_blank" rel="noopener noreferrer">
            <span className="ic ic-wa"><Icon.WhatsApp /></span>
            <span className="cbar-txt">
              <span className="k">WhatsApp</span>
              <span className="v">{company.phone}</span>
            </span>
          </a>
          <div className="cbar-item">
            <span className="ic"><Icon.Shield /></span>
            <span className="cbar-txt">
              <span className="k">MC Number</span>
              <span className="v">{company.mc}</span>
            </span>
          </div>
          <div className="cbar-item">
            <span className="ic"><Icon.Clock /></span>
            <span className="cbar-txt">
              <span className="k">Hours</span>
              <span className="v">{company.hours}</span>
            </span>
          </div>
          <div className="cbar-item">
            <span className="ic"><Icon.Pin /></span>
            <span className="cbar-txt">
              <span className="k">Service area</span>
              <span className="v">{company.region}</span>
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form className="form form-wide" onSubmit={onSubmit}>
            {sent && (
              <div className="ok">
                ✓ Opening WhatsApp with your details — just hit send to reach us. We’ll reply shortly.
              </div>
            )}

            <span className="form-group-label">Your contact</span>
            <div className="grid">
              <div className="field">
                <label>Your name</label>
                <input type="text" name="name" placeholder="Full name" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="(000) 000-0000" required />
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" name="email" placeholder="you@company.com" required />
              </div>
              <div className="field">
                <label>Company</label>
                <input type="text" name="company" placeholder="Company name" />
              </div>
            </div>

            <div className="form-group">
              <span className="form-group-label">Quote details</span>
              <div className="grid">
                <div className="field">
                  <label>Pickup — time &amp; date</label>
                  <input type="text" name="pickup_when" placeholder="e.g. Jun 24, 8:00 AM" required />
                </div>
                <div className="field">
                  <label>Pickup — location / ZIP</label>
                  <input type="text" name="pickup_where" placeholder="City, ST or ZIP" required />
                </div>
                <div className="field">
                  <label>Delivery — time &amp; date</label>
                  <input type="text" name="delivery_when" placeholder="e.g. Jun 25, 2:00 PM" required />
                </div>
                <div className="field">
                  <label>Delivery — location / ZIP</label>
                  <input type="text" name="delivery_where" placeholder="City, ST or ZIP" required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <span className="form-group-label">Load details</span>
              <div className="grid">
                <div className="field">
                  <label>Commodity</label>
                  <input type="text" name="commodity" placeholder="What are we hauling?" required />
                </div>
                <div className="field">
                  <label>Weight</label>
                  <input type="text" name="weight" placeholder="e.g. 6,000 lbs" required />
                </div>
                <div className="field">
                  <label>Dimensions</label>
                  <input type="text" name="dimensions" placeholder="L × W × H, or pallet count" required />
                </div>
                <div className="field">
                  <label>Your rate</label>
                  <input type="text" name="rate" placeholder="e.g. $850" required />
                </div>
              </div>
            </div>

            <button className="btn btn-primary" type="submit">
              <Icon.WhatsApp style={{ width: 18, height: 18 }} /> Send via WhatsApp
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
              <img className="logo-mark" src="/logo-icon.png" alt="Excel Hauling" />
              <span className="logo-text">
                <strong style={{ color: '#fff' }}>EXCEL HAULING</strong>
                <span>FREIGHT CARRIER · LLC</span>
              </span>
            </div>
            <p>Reliable box-truck freight capacity across the Northeast corridor.
              Book direct with the carrier — tracked closely, delivered on time.</p>
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
            <h4>Book a load</h4>
            <ul>
              <li><a href={company.phoneHref}>{company.phone}</a></li>
              <li><a href={company.whatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
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
      <Chatbot />
    </>
  )
}
