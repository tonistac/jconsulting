import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [msg, setMsg]   = useState('')

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-80 glass-strong rounded-sm overflow-hidden shadow-premium border border-white/10"
          >
            {/* Header */}
            <div className="bg-navy-800/80 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
                <span className="text-sm font-semibold text-white">JConsulting Support</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-silver-400 hover:text-white text-lg"
              >×</button>
            </div>

            {/* Chat area */}
            <div className="h-56 p-4 overflow-y-auto flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="w-7 h-7 bg-navy-600 rounded-sm flex items-center justify-center text-xs font-bold text-white flex-shrink-0">J</div>
                <div className="glass rounded-sm px-3 py-2 text-xs text-silver-300 leading-relaxed max-w-[80%]">
                  Hi! 👋 Welcome to JConsulting. How can we help you today? A consultant will respond within minutes.
                </div>
              </div>
              <div className="text-center">
                <span className="text-xs text-silver-600 glass px-3 py-1 rounded-sm">Average response: &lt;2 min</span>
              </div>
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-white/5 flex gap-2">
              <input
                type="text"
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-sm px-3 py-2 text-xs text-white placeholder-silver-600 focus:outline-none focus:border-navy-500 transition-colors"
              />
              <button
                onClick={() => setMsg('')}
                className="px-3 py-2 bg-navy-600 hover:bg-navy-500 text-white text-xs rounded-sm transition-colors"
              >
                →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <motion.button
        onClick={() => setOpen(p => !p)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open live chat"
        className="w-14 h-14 bg-navy-600 hover:bg-navy-500 rounded-sm flex items-center justify-center text-white shadow-glow border border-navy-500 transition-all duration-300"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={open ? 'close' : 'open'}
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xl"
          >
            {open ? '×' : '💬'}
          </motion.span>
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
