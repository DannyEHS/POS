
interface TableProps {
    data: string | any[];
    tableClassName?: string;
    thClassName?: string;
    trClassName?: string;
    tdClassName?: string;
}

const rowsForCategory = {
    id: 'ID',
    nombre: 'Nombre',
    descripcion: 'Descripcion',
}

const TableCategorias = ({ data, tableClassName, thClassName, trClassName, tdClassName }: TableProps) => {
    return (
        <table className={tableClassName || "w-full"}>
            <thead className={thClassName || "bg-gray-800 text-white"}>
                <tr>
                    <th>{rowsForCategory.id}</th>
                    <th>{rowsForCategory.nombre}</th>
                    <th>{rowsForCategory.descripcion}</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((categoria: any) => (
                    <tr key={categoria.id} className={trClassName || 'bg-gray-200'}>
                        <td className={tdClassName || 'border px-4 py-2'}>{categoria.id}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{categoria.nombre}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{categoria.descripcion}</td>
                    </tr>
                ))}
                {!data && (
                    <tr className={trClassName || 'bg-gray-200'}>
                        <td colSpan={Object.keys(rowsForCategory).length} className={tdClassName || 'border px-4 py-2'}>
                            Any data
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default TableCategorias;