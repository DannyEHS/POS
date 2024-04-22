interface TableRowProps {
    tRowClassName?: string
    children: React.ReactNode;
}

const TableRow = ({ tRowClassName, children } : TableRowProps) => {
    return(
        <tr className={tRowClassName}>
            {children}
        </tr>
    )
}

export default TableRow