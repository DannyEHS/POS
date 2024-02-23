import { ReactNode } from "react";

interface TableProps {
    data: string | any[];
    tableClassName?: string;
    thClassName?: string;
    trClassName?: string;
    tdClassName?: string;
    children?: ReactNode;
}

const rowsForProduct = {
    codigoBarras: 'C. Barras',
    nombre: 'Nombre',
    categoria: 'Categoria',
    costo: 'Costo',
    precio: 'Precio',
    existencia: 'Existencia',
    opciones: 'Opciones',
}

const TableProductos = ({ children, data, tableClassName, thClassName, trClassName, tdClassName }: TableProps) => {
    return (
        <table className={tableClassName || "w-full"}>
            <thead className={thClassName || "bg-gray-800 text-white"}>
                <tr>
                    <th>{rowsForProduct.codigoBarras}</th>
                    <th>{rowsForProduct.nombre}</th>
                    <th>{rowsForProduct.categoria}</th>
                    <th>{rowsForProduct.costo}</th>
                    <th>{rowsForProduct.precio}</th>
                    <th>{rowsForProduct.existencia}</th>
                    <th>{rowsForProduct.opciones}</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((producto: any) => (
                    <tr key={producto.id} className={trClassName || 'bg-gray-200'}>
                        <td className={tdClassName || 'border px-4 py-2'}>{producto.codigoBarras}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{producto.nombre}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{producto.categoria?.nombre}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{producto.costo}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{producto.precio}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{producto.stock}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{children}</td>
                    </tr>
                ))}
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