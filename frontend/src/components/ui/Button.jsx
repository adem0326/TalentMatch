const variants = {
  primary: 'btn--primary',
  secondary: 'btn--secondary',
}

export function Button({
  children,
  variant = 'primary',
  as = 'button',
  className = '',
  ...props
}) {
  const Component = as === 'a' ? 'a' : 'button'
  const buttonClassName = ['btn', variants[variant] ?? variants.primary, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={buttonClassName} {...props}>
      {children}
    </Component>
  )
}
