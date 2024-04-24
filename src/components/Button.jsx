import ButtonSvg from '../assets/svg/ButtonSvg';

const Button = ({ className,href,onClick,children,px,white }) => {
    const classes = `relative button inline-flex justify-center items-center h-11 transition-colors hover:text-color-1 ${white ? 'text-n-8' : 'text-n-1'} ${px || 'px-7'} ${className || " "}`
    const renderButton = () => (
        <button className={classes} onClick={onClick}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </button>
    )
    const renderLink = () => (
        <a href={href} className={classes}>
            <span>{children}</span>
            {ButtonSvg(white)}
        </a>
    )
    return (href ? renderLink() : renderButton());
}

export default Button