import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-navy-600 hover:bg-navy-500 text-white border border-navy-500 hover:border-navy-400 shadow-glow-sm hover:shadow-glow',
  secondary:
    'bg-transparent hover:bg-white/5 text-white border border-white/20 hover:border-white/40',
  ghost:
    'bg-transparent hover:bg-white/5 text-silver-300 hover:text-white border border-transparent',
  outline:
    'bg-transparent text-white border border-navy-500 hover:bg-navy-600/20',
  glass:
    'glass text-white hover:bg-white/10 border border-white/10 hover:border-white/20',
  danger:
    'bg-red-700 hover:bg-red-600 text-white border border-red-600',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm font-medium',
  lg: 'px-8 py-4 text-base font-medium',
  xl: 'px-10 py-5 text-lg font-semibold',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  icon,
  iconRight,
  disabled,
  loading,
  onClick,
  type = 'button',
}) {
  const base =
    'inline-flex items-center gap-2 rounded-sm font-sans tracking-wide transition-all duration-300 cursor-pointer select-none'
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${disabled || loading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`

  const content = (
    <>
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : icon ? (
        <span className="text-lg leading-none">{icon}</span>
      ) : null}
      <span>{children}</span>
      {iconRight && <span className="text-lg leading-none">{iconRight}</span>}
    </>
  )

  if (to)
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {content}
      </Link>
    )

  if (href)
    return (
      <motion.a
        href={href}
        className={cls}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {content}
      </motion.a>
    )

  return (
    <motion.button
      type={type}
      className={cls}
      onClick={disabled || loading ? undefined : onClick}
      whileHover={disabled || loading ? {} : { scale: 1.02 }}
      whileTap={disabled || loading ? {} : { scale: 0.98 }}
    >
      {content}
    </motion.button>
  )
}
