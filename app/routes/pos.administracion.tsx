import { useState } from 'react';
import TableCategorias from '~/myComponents/TableCategorias';
import TableUsuario from '~/myComponents/TableUsuarios';

import Input from '~/myComponents/Input';
import ComboBox from '~/myComponents/ComboBox';
import LinkTo from '~/myComponents/LinkTo';
import PrimaryTitle from '~/myComponents/PrimaryTitle';

import prisma from 'data-access/prisma-config';
import TableProductos from '~/myComponents/TableProductos';
import { useLoaderData } from '@remix-run/react';
import DropDown from '~/myComponents/DropDown';


export const loader = async () => {

    const usuarios = await prisma.usuarios.findMany()
    const categorias = await prisma.categorias.findMany()
    const productosConCategorias = await prisma.productos.findMany({
        include: {
            categoria: true,
        },
    });

    return {
        usuarios,
        categorias,
        productos: productosConCategorias,
    }
}



const comboOptions = ["Categorias", "Usuarios", "Proveedores", "Productos"];

const Administracion = () => {

    const { usuarios, categorias, productos } = useLoaderData<typeof loader>();
    console.log(productos)
    const idProductos = productos.map(producto => (producto.id))
    //const idProductos = productos && productos.length > 0 ? productos.map(producto => producto.id) : [];

    const [selectedOption, setSelectedOption] = useState(comboOptions[0]);

    const handleClick = () => {
        const topicUrl = createTopicUrl(selectedOption);
        // Realizar acciones necesarias con la URL, como navegar a la nueva ruta
        console.log(topicUrl);
    };

    const createTopicUrl = (selectedOption: string): string => {
        switch (selectedOption) {
            case "Categorias":
                return "/pos/crearCategoria";
            case "Usuarios":
                return "/pos/crearUsuario";
            case "Proveedores":
                return "/pos/crearProveedor";
            case "Productos":
                return `/pos/crearProducto`;
            

        }
        console.log(selectedOption)
    };

    const renderTable = () => {
        switch (selectedOption) {
            case "Categorias":
                return <TableCategorias
                    data={categorias}
                    tableClassName="w-full"
                    thClassName="bg-gray-800 text-white"
                    trClassName="bg-gray-200"
                    tdClassName="border px-4 py-2"
                />
            case "Usuarios":
                return <TableUsuario
                    data={usuarios}
                    tableClassName="w-full"
                    thClassName="bg-gray-800 text-white"
                    trClassName="bg-gray-200"
                    tdClassName="border px-4 py-2"
                />

            case "Productos":
                return <TableProductos
                    data={productos}
                    tableClassName="w-full"
                    thClassName="bg-gray-800 text-white"
                    trClassName="bg-gray-200"
                    tdClassName="border px-4 py-2">
                    
                </TableProductos>
            default: return undefined

        }
    }

    return (
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5 overflow-x-auto">
            <PrimaryTitle text='Administracion' />
            <Input type="text" placeholder="Buscar" inputClassName="border px-4 py-2 mb-4" />
            <ComboBox
                comboClassName="border px-4 py-2 mb-4"
                onChange={(event) => setSelectedOption(event.target.value)}
            >
                {comboOptions && comboOptions.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </ComboBox>
            <LinkTo
                paDonde={createTopicUrl(selectedOption)}
                text="Create Category"
                style="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl"
            />
            {renderTable(selectedOption)}
        </div>
    );
};

export default Administracion;

