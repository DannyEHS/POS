
interface TableProps {
    data: string | any[];
    tableClassName?: string;
    thClassName?: string;
    trClassName?: string;
    tdClassName?: string;
}

const rowsForProduct = {
    id: 'ID',
    nombre: 'Nombre',
    categoria: 'Categoria',
    costo: 'Costo',
    precio: 'Precio',
    existencia: 'Existencia',
    opciones: 'Opciones',
}

const TableProductos = ({ data, tableClassName, thClassName, trClassName, tdClassName }: TableProps) => {
    return (
        <table className={tableClassName || "w-full"}>
            <thead className={thClassName || "bg-gray-800 text-white"}>
                <tr>
                    <th>{rowsForProduct.id}</th>
                    <th>{rowsForProduct.nombre}</th>
                    <th>{rowsForProduct.categoria}</th>
                    <th>{rowsForProduct.costo}</th>
                    <th>{rowsForProduct.precio}</th>
                    <th>{rowsForProduct.existencia}</th>
                    <th>{rowsForProduct.opciones}</th>
                </tr>
            </thead>
            <tbody>
                {
                    !data ? (
                        <tr className={trClassName || 'bg-gray-200'}>
                            <td colSpan={Object.keys(rowsForProduct).length} className={tdClassName || 'border px-4 py-2'}>
                                Any data
                            </td>
                        </tr>
                    ) : null
                }


            </tbody>
        </table>
    );
};

export default TableProductos;