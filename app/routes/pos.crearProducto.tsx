import { Form, useLoaderData } from "@remix-run/react"
import PrimaryTitle from "~/myComponents/PrimaryTitle"
import Input from "~/myComponents/Input"
import TextArea from "~/myComponents/TextArea"
import Button from "~/myComponents/Button"
import ComboBox2 from "~/myComponents/ComboBox"
import { PrismaClient } from "@prisma/client"
import { crearProducto } from "data-access/product-service"
import LinkTo from "~/myComponents/LinkTo"

export const loader = async () => {
    const prisma = new PrismaClient();
  
    const categorias = await prisma.categorias.findMany();
    console.log(categorias);
  
    return {
      categorias,
    };
  };

export const action = async ({ request }: ActionArgs) => {

    const formData = await request.formData();
    const codigoBarras = await formData.get("codigoBarras")
    const nombreProducto = await formData.get("nombreProducto")
    const precioProducto = await formData.get("precioProducto")
    const costoProducto = await formData.get("costoProducto")
    const cantidadProducto = await formData.get("cantidadProducto")
    const descripcionProducto = formData.get("descripcionProducto")

    // Obtener la categoría seleccionada del ComboBox
    const categoria = await formData.get("categoriasProducto");

    if (!codigoBarras) throw new Error("")
    if (!nombreProducto) throw new Error("")
    if (!precioProducto) throw new Error("")
    if (!costoProducto) throw new Error("")
    if (!categoria) throw new Error("")
    if (!cantidadProducto) throw new Error("")
    if (!descripcionProducto) throw new Error("")

    console.log(categoria)

    const nuevoProducto = await crearProducto({
        codigoBarras,
        nombreProducto,
        precioProducto,
        costoProducto,
        cantidadProducto,
        categoria, 
        descripcionProducto,
    });

    console.log("Data del producto: ", nuevoProducto);

    return null;

}

const CrearProducto = () => {

    const { categorias } = useLoaderData<typeof loader>()
    const nombresCategorias = categorias.map(categoria => ({nombre: categoria.nombre , id: categoria.id}));
    console.log(nombresCategorias)

    return (
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5">
            <PrimaryTitle text="Crear Producto" />
            <Form method="post" className="flex flex-col p-9">
                <Input name="codigoBarras" type="text" placeholder="Escanea el codigo de barras del producto" inputClassName="border px-4 py-2 mb-4" />
                <Input name="nombreProducto" type="text" placeholder="Escribe el nombre del producto" inputClassName="border px-4 py-2 mb-4" />
                <Input name="precioProducto" type="text" placeholder="Escribe el precio del producto" inputClassName="border px-4 py-2 mb-4" />
                <Input name="costoProducto" type="text" placeholder="Escribe el costo del producto" inputClassName="border px-4 py-2 mb-4" />
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
                <Input name="cantidadProducto" type="text" placeholder="Cantidad de productos" inputClassName="border px-4 py-2 mb-4" />
                <TextArea name="descripcionProducto" type="text" placeholder="Escribe una descripcion para el producto" textareaClassName="border px-4 py-2 mb-4" />
                <div className="flex flex-row space-x-5">
                    <Button text="Guardar Producto" type="submit" buttonClassName="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl" />
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

export default CrearProducto