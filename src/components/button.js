const Button = ({ children, className = 'btn-primary', ...restOfProps }) => {
    return (
        <button className=
            {`btn ${className}`}{...restOfProps}>
            {children}

        </button >
    )
}

export default Button