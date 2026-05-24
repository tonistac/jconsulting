import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function AnimatedCounter({ end, suffix = '', prefix = '', decimals = 0, duration = 2.5 }) {
  const [ref, inView] = useInView({ triggerOnce: true, rootMargin: '-50px' })
  return (
    <span ref={ref} className="font-counter text-5xl md:text-6xl text-white tracking-wider">
      {prefix}
      {inView ? (
        <CountUp end={end} duration={duration} decimals={decimals} separator="," />
      ) : (
        <span>0</span>
      )}
      {suffix}
    </span>
  )
}
