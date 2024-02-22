const Background = ({ children, style } : { children : any, style : any }) => {
    return(
        <div className={style}>
            {children}
        </div>
    )
}

export default Background