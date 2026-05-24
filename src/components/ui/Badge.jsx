const colorMap = {
  blue:   'bg-blue-900/40 text-blue-300 border-blue-700/40',
  indigo: 'bg-indigo-900/40 text-indigo-300 border-indigo-700/40',
  sky:    'bg-sky-900/40 text-sky-300 border-sky-700/40',
  slate:  'bg-slate-800/60 text-slate-300 border-slate-600/40',
  navy:   'bg-navy-800/60 text-navy-300 border-navy-600/40',
  red:    'bg-red-900/40 text-red-300 border-red-700/40',
  green:  'bg-green-900/40 text-green-300 border-green-700/40',
  purple: 'bg-purple-900/40 text-purple-300 border-purple-700/40',
}

export default function Badge({ children, color = 'blue', className = '' }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-0.5 rounded-sm text-xs font-semibold tracking-wider uppercase border ${colorMap[color] || colorMap.blue} ${className}`}
    >
      {children}
    </span>
  )
}
