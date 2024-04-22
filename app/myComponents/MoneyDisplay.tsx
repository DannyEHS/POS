interface MoneyDisplayProps {
    id: string;
    mDisplayClassName: string;
    children: React.ReactNode;
}

const MoneyDisplay = ({ id, mDisplayClassName, children}: MoneyDisplayProps) => {

    return (
        <span 
            id={id}
            className={mDisplayClassName}
        >
            {children}
        </span>
    );
}

export default MoneyDisplay;
