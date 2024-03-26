//import { ReactNode } from "react";
import DropDown from "./DropDown";
import LinkTo from "./LinkTo";
import Button from "./Button"
import { eliminarProducto } from "data-access/product-service";
import { redirect } from "@remix-run/node";

interface TableProps {
    data: string | any[];
    tableClassName?: string;
    thClassName?: string;
    trClassName?: string;
    tdClassName?: string;
    //children?: ReactNode;
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

export const action = async ({ request, params }: ActionArgs) => {
    const formData = await request.formData();
    const deleteData = formData.get('delete');

    if (deleteData === 'delete') {
        await eliminarProducto(params.id)
        return redirect('/pos')
    }
}


const TableProductos = ({ data, tableClassName, thClassName, trClassName, tdClassName }: TableProps) => {
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
                        <td className={tdClassName || 'border px-4 py-2'}>
                            <DropDown text='Accion' dropDownClassName='bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl'>
                                <LinkTo
                                    //key={}
                                    paDonde={`/pos/actualizar-producto/${producto.id}`}
                                    text="Editar"
                                    style="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl"
                                >

                                </LinkTo>

                                <Button
                                    text="Eliminar"
                                    type="button" // Puedes ajustar el tipo según tus necesidades
                                    buttonClassName="bg-red-500 rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl"
                                    name="delete"
                                />


                            </DropDown>
                        </td>
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