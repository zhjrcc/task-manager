function Button({ className = "", icon, label, ...rest }) {
  return (
    <button className={`icon-button ${className}`} {...rest}>
      <img src={`icons/${icon}.svg`} alt={label} draggable={false} />
    </button>
  )
}

export default Button
