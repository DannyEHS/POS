interface TableDataProps {
    tDataClassName?: string
    children?: React.ReactNode;
    data?: string | any[]
}

const TableData = ({ tDataClassName, children , data} : TableDataProps) => {
    return(
        <td className={tDataClassName}>
            {children}
            {
                    !data ? (
                        <tr className={'bg-gray-200'}>
                            <td className={'border px-4 py-2'}>
                                Any data
                            </td>
                        </tr>
                    ) : null
                }
        </td>
    )
}

export default TableData