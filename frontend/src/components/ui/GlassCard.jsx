export function GlassCard({ children, className = '', ...props }) {
  return (
    <div className={['glass-card', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}
