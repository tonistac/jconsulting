import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '@/utils/animations'

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignClass = {
    center: 'text-center mx-auto',
    left:   'text-left',
    right:  'text-right ml-auto',
  }[align]

  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0}
          className="flex items-center gap-3 mb-4 justify-center"
          style={{ justifyContent: align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center' }}
        >
          <span className="h-px w-8 bg-navy-500" />
          <span className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-navy-400">
            {eyebrow}
          </span>
          <span className="h-px w-8 bg-navy-500" />
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        custom={0.1}
        className={`font-display font-semibold leading-tight mb-4 ${
          light
            ? 'text-white'
            : 'gradient-text'
        }`}
        style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          custom={0.2}
          className="text-silver-400 text-lg leading-relaxed font-light"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
