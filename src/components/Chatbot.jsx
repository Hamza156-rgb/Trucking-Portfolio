import { useEffect } from 'react'
import { chatbot } from './content.js'

// Loads the Chatbase AI chat widget using Chatbase's official embed logic.
// Set your bot id in content.js → `chatbot.chatbaseId`.
// While the id is empty the widget is skipped, so the site still
// runs locally without an account.
export default function Chatbot() {
  useEffect(() => {
    const id = chatbot.chatbaseId
    if (!id) return

    // The embed script tag carries the id, so this also guards against
    // a double-inject during React StrictMode's dev double-render.
    if (document.getElementById(id)) return

    if (!window.chatbase || window.chatbase('getState') !== 'initialized') {
      window.chatbase = (...args) => {
        if (!window.chatbase.q) window.chatbase.q = []
        window.chatbase.q.push(args)
      }
      window.chatbase = new Proxy(window.chatbase, {
        get(target, prop) {
          if (prop === 'q') return target.q
          return (...args) => target(prop, ...args)
        },
      })
    }

    const script = document.createElement('script')
    script.src = 'https://www.chatbase.co/embed.min.js'
    script.id = id
    script.domain = 'www.chatbase.co'
    document.body.appendChild(script)
  }, [])

  return null
}
