interface TableProps {
    tableClassName: string;
    children: React.ReactNode;
}

const Table = ({ tableClassName, children } : TableProps) => {
    return(
        <table className={tableClassName}>
            {children}
        </table>
    )
}

export default Table;