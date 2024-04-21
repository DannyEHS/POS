interface TableHeaderProps {
    tHeaderClassName: string
    children: React.ReactNode;
}

const TableHeader = ({ tHeaderClassName, children } : TableHeaderProps) => {
    return(
        <thead className={tHeaderClassName}>
            {children}
        </thead>
    )
}

export default TableHeader