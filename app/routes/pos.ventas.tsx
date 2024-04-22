import PrimaryTitle from "~/myComponents/PrimaryTitle";
import Label from "../myComponents/Label";
import Input from "~/myComponents/Input";
import Table from "../myComponents/Table";
import TableHeader from "~/myComponents/TableHeader";
import TableRow from "~/myComponents/TableRow";
import TableBody from "~/myComponents/TableBody";
import TableData from "~/myComponents/TableData";
import TableColumnTitle from "~/myComponents/TableColumnTitle";
import Button from "~/myComponents/Button";

import { FaTrashAlt, FaEdit, FaSearch } from "react-icons/fa";
import MoneyDisplay from "~/myComponents/MoneyDisplay";

import { useState } from "react";
import { Form } from "@remix-run/react";
import { encontrarProductoPorCodigoBarras } from "data-access/product-service";

export const action = async ({ request }: ActionArgs) => {
    const formData = await request.formData();
    const intent = formData.get('intent');
    const codigoBarrasProducto = formData.get('codigoBarrasProducto')
    console.log("Data intent: ", intent)
    console.log("Data codigoBarras: ", codigoBarrasProducto)

    if (intent === 'buscarCodigo'){
        await encontrarProductoPorCodigoBarras(codigoBarrasProducto)
        console.log("Se encontro codigo: ", codigoBarrasProducto)
    }
    return null
}


const nameColumns = {
    cantidad: 'Cantidad',
    codigo: 'Codigo',
    nombre: 'Nombre',
    precio: 'Precio',
    total: 'Total',
}

const Ventas = () => {

    const initialValue = 0
    const [monto, setMonto] = useState(initialValue);

    return (
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5 overflow-x-auto">
            <PrimaryTitle text='Ventas' />
            <div className="flex flex-row mb-5 items-center p-2 ">
                <Label text="Escanea tus productos" labelClassName="text-gray-500 text-base font-bold mb-4" />
                <Form method="post">
                    <Input
                        type="numbre"
                        name="codigoBarrasProducto"
                        placeholder="Ingresa el codigo de barras"
                        inputClassName="rounded-md border border-gray-400 ml-5 p-2 w-64"
                    />
                    <Button value="buscarCodigo" name="intent" text="Buscar" type="submit" buttonClassName="bg-gray-200 m-5 h-10 w-36 rounded-md hover:bg-gray-400 flex justify-center items-center">
                        <FaSearch className="ml-2" />
                    </Button>
                </Form>

                <Button text="Cancelar Venta" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-36 rounded-md hover:bg-gray-400 flex justify-center items-center">
                    <FaTrashAlt className="ml-2" /> {/* Agrega margen a la derecha del icono */}
                </Button>
                <Button text="Editar Venta" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-36 rounded-md hover:bg-gray-400 flex justify-center items-center">
                    <FaEdit className="ml-2" />
                </Button>
            </div>
            <div>
                <Table tableClassName="w-full overflow-x-auto rounded-lg border border-black mb-4">
                    <TableHeader tHeaderClassName="bg-gray-800 text-white">
                        <TableRow>
                            <TableColumnTitle>{nameColumns.cantidad}</TableColumnTitle>
                            <TableColumnTitle>{nameColumns.codigo}</TableColumnTitle>
                            <TableColumnTitle>{nameColumns.nombre}</TableColumnTitle>
                            <TableColumnTitle>{nameColumns.precio}</TableColumnTitle>
                            <TableColumnTitle>{nameColumns.total}</TableColumnTitle>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableData>

                        </TableData>
                    </TableBody>
                </Table>
            </div>

            <div className="flex flex-row items-center">
                <Input
                    type="numbre"
                    placeholder="Ingresa el monto $$$"
                    inputClassName="rounded-md border border-gray-400 ml-5 p-2 w-64 h-10"
                />

            </div>
            <div className="flex flex-row w-">
                <Button text="$20" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-32 rounded-md hover:bg-gray-400" />
                <Button text="$50" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-32 rounded-md hover:bg-gray-400" />
                <Button text="$100" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-32 rounded-md hover:bg-gray-400" />
                <Button text="$200" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-32 rounded-md hover:bg-gray-400" />
                <Button text="$500" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-32 rounded-md hover:bg-gray-400" />
                <Button text="$1000" type="button" buttonClassName="bg-gray-200 m-5 h-10 w-32 rounded-md hover:bg-gray-400" />
            </div>
            <div className="font-semibold flex items-center gap-2 text-2xl">
                <Label text="Cambio" labelClassName="text-[#252525]" />
                <MoneyDisplay id="monto" mDisplayClassName="text-[#252525] ml-auto">
                    {monto.toFixed(2)}
                </MoneyDisplay>
            </div>

        </div>
    );
};

export default Ventas;