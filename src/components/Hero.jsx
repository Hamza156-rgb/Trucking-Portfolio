import { Phone, Arrow, Truck, Shield, Map } from './icons.jsx'
import { company } from './content.js'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow on-dark">
            MC# {company.mc} · Licensed &amp; Insured
          </span>
          <h1>
            Keep your freight <span className="accent">rolling.</span>
          </h1>
          <p className="lede">
            {company.name} moves freight direct for shippers across the Northeast
            corridor — book the truck straight from the carrier, no broker in the
            middle, tracked closely and delivered on schedule.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href={company.phoneHref}>
              <Phone /> Call {company.phone}
            </a>
            <a className="btn btn-ghost" href="#services">
              See what we move <Arrow />
            </a>
          </div>
          <div className="hero-tags">
            <span className="tag"><Truck style={{ width: 14, height: 14 }} /> {company.equipment}</span>
            <span className="tag"><Shield style={{ width: 14, height: 14 }} /> Fully insured</span>
            <span className="tag"><Map style={{ width: 14, height: 14 }} /> Northeast coverage</span>
          </div>
        </div>

        {/* Capacity side panel */}
        <div className="ticket" aria-hidden="true">
          <div className="ticket-head">
            <span>Available Capacity</span>
            <span className="live"><i></i> Available now</span>
          </div>
          <div className="ticket-row">
            <span className="k">Carrier</span>
            <span className="v">Excel Hauling</span>
          </div>
          <div className="ticket-row">
            <span className="k">MC Number</span>
            <span className="v amber">{company.mc}</span>
          </div>
          <div className="ticket-row">
            <span className="k">Equipment</span>
            <span className="v">26 ft Box</span>
          </div>
          <div className="ticket-row">
            <span className="k">Service area</span>
            <span className="v">Northeast</span>
          </div>
          <a className="ticket-foot" href={company.phoneHref}>
            <span>BOOK A LOAD</span>
            <span>{company.phone}</span>
          </a>
        </div>
      </div>
    </section>
  )
}
