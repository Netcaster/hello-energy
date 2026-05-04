export function Button({ children, className = '', asChild, variant, type = 'button', onClick }) {
  const base = `inline-flex items-center justify-center font-semibold transition active:scale-[.98] cursor-pointer ${className}`;
  if (asChild && children?.props) {
    const child = children;
    return <a {...child.props} className={`${base} ${child.props.className || ''}`}>{child.props.children}</a>;
  }
  return <button type={type} onClick={onClick} className={base}>{children}</button>;
}
