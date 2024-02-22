import { Form } from "@remix-run/react"
import PrimaryTitle from "~/myComponents/PrimaryTitle"
import Input from "~/myComponents/Input"
import TextArea from "~/myComponents/TextArea"
import Button from "~/myComponents/Button"

import type { ActionFunction } from "@remix-run/node";
import { crearCategoria } from "data-access/category-service"
import LinkTo from "~/myComponents/LinkTo"

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const nombreCategoria = formData.get("nombreCategoria")
    const descripcionCategoria = formData.get("descripcionCategoria")

    if (!nombreCategoria) throw new Error("")
    if (!descripcionCategoria) throw new Error("")

    const nuevaCategoria = await crearCategoria({
        nombreCategoria: nombreCategoria as string,
        descriptionCategoria: descripcionCategoria as string,
    });
    console.log("Data category: ", nuevaCategoria);
    return null;
}

const CrearCategoria = () => {
    return (
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5">
            <PrimaryTitle text="Crear Categoria" />
            <Form method="POST" className="flex flex-col p-9">
                <Input name="nombreCategoria" type="text" placeholder="Escribe el nombre de la categoria" inputClassName="border px-4 py-2 mb-4" />
                <TextArea name="descripcionCategoria" type="text" placeholder="Escribe una descripcion para la categoria" textareaClassName="border px-4 py-2 mb-4" />
                <div className="flex flex-row space-x-5">
                    <Button text="Guardar Categoria" type="submit" buttonClassName="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl" />
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

export default CrearCategoria