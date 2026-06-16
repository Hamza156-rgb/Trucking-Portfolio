// ───────────────────────────────────────────────────────────
//  Excel Hauling LLC — site content
//  Edit this file to update company info, services, stats, etc.
//  NOTE: stats & testimonials below are placeholder demo copy —
//  replace with the client's real figures before going live.
// ───────────────────────────────────────────────────────────

export const company = {
  name: 'Excel Hauling LLC',
  mc: '1633202',
  phone: '267-678-8860',
  phoneHref: 'tel:+12676788860',
  email: 'dispatch@excelhauling.com',     // placeholder
  region: 'Greater Philadelphia · Northeast Corridor',
  hours: 'Mon–Sat · 6:00 AM – 8:00 PM',
  equipment: '26 ft Box Truck',
}

export const stats = [
  { num: '98', suffix: '%', label: 'On-time delivery' },
  { num: '1,200', suffix: '+', label: 'Loads delivered' },
  { num: '30', prefix: '<', suffix: 'min', label: 'Dispatch response' },
  { num: '8', suffix: '', label: 'States covered' },
]

export const services = [
  { icon: 'Headset', title: 'Freight Dispatch', text: 'We source loads, negotiate rates, and handle the paperwork so the wheels keep turning and you keep earning.' },
  { icon: 'Truck', title: 'Box-Truck Hauling', text: 'A clean, well-maintained 26 ft box truck for LTL and full loads — handled with care from dock to dock.' },
  { icon: 'Bolt', title: 'Expedited Freight', text: 'Time-critical runs across the corridor. When a load has to move now, we route it the fastest safe way.' },
  { icon: 'Route', title: 'Local & Regional', text: 'Daily lanes through the Philadelphia metro and the Northeast — predictable schedules, dependable arrivals.' },
  { icon: 'Box', title: 'Last-Mile & Commercial', text: 'Store, warehouse, and jobsite drop-offs with liftgate service and careful, professional handling.' },
  { icon: 'Pin', title: 'Tracking & Updates', text: 'Clear status from pickup to drop. You always know where your freight is and when it lands.' },
]

export const specs = [
  { k: 'Vehicle', v: '26 ft Box Truck' },
  { k: 'Cargo space', v: '≈ 1,800 cu ft' },
  { k: 'Max payload', v: 'up to 10,000 lbs' },
  { k: 'Pallet capacity', v: '≈ 12 pallets' },
  { k: 'Loading', v: 'Rear roll-up + liftgate' },
  { k: 'Coverage', v: 'Regional & OTR' },
]

export const steps = [
  { no: '01', title: 'Request', text: 'Call or send your load details — pickup, drop, weight, and timing.' },
  { no: '02', title: 'Dispatch', text: 'We confirm the rate, lock the schedule, and assign the truck.' },
  { no: '03', title: 'Haul', text: 'Secured, monitored transit with check-ins along the route.' },
  { no: '04', title: 'Deliver', text: 'On-time drop-off with delivery confirmation and clean paperwork.' },
]

// Hub first, then the corridor states.
export const regions = [
  { name: 'Philadelphia, PA', hub: true },
  { name: 'New Jersey' }, { name: 'New York' }, { name: 'Delaware' },
  { name: 'Maryland' }, { name: 'Connecticut' }, { name: 'Massachusetts' },
  { name: 'Virginia' }, { name: 'Washington, D.C.' },
]

export const lanes = [
  { route: 'PHILADELPHIA → NEW YORK', status: 'ON TIME' },
  { route: 'BALTIMORE → PHILADELPHIA', status: 'IN TRANSIT' },
  { route: 'NEWARK → BOSTON', status: 'BOOKED' },
  { route: 'WILMINGTON → D.C.', status: 'ON TIME' },
  { route: 'TRENTON → HARTFORD', status: 'DELIVERED' },
  { route: 'PHILADELPHIA → RICHMOND', status: 'IN TRANSIT' },
]

export const testimonials = [
  { stars: 5, text: 'Excel Hauling has been our go-to for regional freight. Quick to dispatch and always on time.', name: 'Marcus Reed', role: 'Ops Manager, Keystone Supply' },
  { stars: 5, text: 'Booked a same-day expedited load and they handled it without a hitch. Communication was excellent.', name: 'Dana Whitfield', role: 'Logistics Lead, Harbor Goods' },
  { stars: 5, text: 'Reliable, professional, and easy to work with. The tracking updates give us real peace of mind.', name: 'Tony Alvarez', role: 'Warehouse Director, Delco Distribution' },
]
