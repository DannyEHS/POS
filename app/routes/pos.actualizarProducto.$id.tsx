import { Form, redirect, useLoaderData } from "@remix-run/react"
import PrimaryTitle from "~/myComponents/PrimaryTitle"
import Input from "~/myComponents/Input"
import TextArea from "~/myComponents/TextArea"
import Button from "~/myComponents/Button"
import ComboBox2 from "~/myComponents/ComboBox"
import { PrismaClient } from "@prisma/client"
import LinkTo from "~/myComponents/LinkTo"
import { actualizarProducto } from "data-access/product-service"

export const loader = async () => {
    const prisma = new PrismaClient();

    const categorias = await prisma.categorias.findMany();
    console.log(categorias);
    
    return {
        categorias,
    };
};

export const loaderDataProduct = async ({params}) => {
    const prisma = new PrismaClient();
    const {id} = params;
    

    const informacion = await prisma.productos.findUnique({
        where: {
            id
        }
    })
    console.log("Información del producto:", informacion);
    console.log("ID del producto:", id);
    return{
        informacion
    }
    
}

export const action = async ({ request, params }: ActionArgs) => {
    try {
        const formData = await request.formData();
        const codigoBarras = await formData.get("codigoBarras");
        const nombreProducto = await formData.get("nombreProducto");
        const precioProducto = await formData.get("precioProducto");
        const costoProducto = await formData.get("costoProducto");
        const cantidadProducto = await formData.get("cantidadProducto");
        const descripcionProducto = formData.get("descripcionProducto");

        // Obtener la categoría seleccionada del ComboBox
        const categoria = await formData.get("categoriasProducto");

        if (!codigoBarras || !nombreProducto || !precioProducto || !costoProducto || !categoria || !cantidadProducto || !descripcionProducto) {
            throw new Error("Todos los campos deben estar llenos");
        }

        // Obtener el ID del producto a actualizar desde los parámetros de la ruta
        const idProducto = params.id;

        const productoActualizado = await actualizarProducto({
            id: idProducto,
            codigoBarras,
            nombreProducto,
            precioProducto,
            costoProducto,
            cantidadProducto,
            categoria,
            descripcionProducto,
        });

        console.log("Producto actualizado:", productoActualizado);

        // Puedes redirigir a una página de éxito o realizar otras acciones necesarias
        return redirect("/pos/administracion");
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        // Puedes redirigir a una página de error o manejar de otra manera
        //return redirect("/ruta-de-error");
    }
};


const ActualizarProducto = () => {

    const { categorias } = useLoaderData<typeof loader>()
    const nombresCategorias = categorias.map(categoria => ({ nombre: categoria.nombre, id: categoria.id }));
    console.log(nombresCategorias)

    const { informacion } = useLoaderData<typeof loaderDataProduct>()
    console.log("Info: ",informacion)

    return (
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5">
            <PrimaryTitle text="Editar Producto" />
            <Form method="post" className="flex flex-col p-9">
                <Input name="codigoBarras" type="text" placeholder="Escanea el codigo de barras del producto" inputClassName="border px-4 py-2 mb-4">
                    {informacion?.codigoBarras}
                </Input>
                <Input name="nombreProducto" type="text" placeholder="Escribe el nombre del producto" inputClassName="border px-4 py-2 mb-4">
                    {informacion?.nombre}
                </Input>
                <Input name="precioProducto" type="text" placeholder="Escribe el precio del producto" inputClassName="border px-4 py-2 mb-4">
                    {informacion?.precio}
                </Input>
                <Input name="costoProducto" type="text" placeholder="Escribe el costo del producto" inputClassName="border px-4 py-2 mb-4">
                    {informacion?.costo}
                </Input>
                <ComboBox2
                    comboClassName="border px-4 py-2 mb-4"
                    name="categoriasProducto"
                >
                    {nombresCategorias.map((option, index) => (
                        <option key={index} value={option.id}>
                            {option.nombre}
                        </option>
                    ))}
                </ComboBox2>
                <Input name="cantidadProducto" type="text" placeholder="Cantidad de productos" inputClassName="border px-4 py-2 mb-4">
                    {informacion?.stock}
                </Input>
                <TextArea name="descripcionProducto" type="text" placeholder="Escribe una descripcion para el producto" textareaClassName="border px-4 py-2 mb-4">
                    {informacion?.descripcion}
                </TextArea>
                <div className="flex flex-row space-x-5">
                    <Button text="Actualizar Producto" type="submit" buttonClassName="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl" />
                    <LinkTo
                        paDonde="/pos/administracion"
                        text="Regresar"
                        style="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl"
                    />
                </div>

            </Form>
        </div>
    )
}

export default ActualizarProducto