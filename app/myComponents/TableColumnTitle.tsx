interface TableColumnTitleProps {
    tColumnTitleClassName?: string
    children: React.ReactNode;
}

const TableColumnTitle = ({ tColumnTitleClassName, children } : TableColumnTitleProps) => {
    return(
        <th className={tColumnTitleClassName}>
            {children}
        </th>
    )
}

export default TableColumnTitle