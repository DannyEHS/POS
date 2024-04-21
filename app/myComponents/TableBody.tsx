interface TableBodyProps {
    tBodyClassName?: string
    children: React.ReactNode;
}

const TableBody = ({ tBodyClassName, children } : TableBodyProps) => {
    return(
        <tbody className={tBodyClassName}>
            {children}
        </tbody>
    )
}

export default TableBody