interface LogoProps {
    src: string,
    className:string,
}

export const Logo = ({src, className}: LogoProps) => {

    return(
        <img src={src} className={className} alt="" />
    )
}