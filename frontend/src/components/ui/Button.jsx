const variants = {
  primary: 'btn--primary',
  red: 'btn--primary',
  secondary: 'btn--secondary',
}

export function Button({
  children,
  variant = 'primary',
  as = 'button',
  className = '',
  ...props
}) {
  const Component = as || 'button'
  const buttonClassName = ['btn', variants[variant] ?? variants.primary, className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={buttonClassName} {...props}>
      {children}
    </Component>
  )
}
