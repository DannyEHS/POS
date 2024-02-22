import { Form } from "@remix-run/react"
import PrimaryTitle from "~/myComponents/PrimaryTitle"
import Input from "~/myComponents/Input"
import TextArea from "~/myComponents/TextArea"
import Button from "~/myComponents/Button"

const CrearProveedor = () => {
    return(
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5">
            <PrimaryTitle text="Crear Proveedor"/>
            <Form className="flex flex-col p-9">
                <Input type="text" placeholder="Escribe el nombre del proveedor" inputClassName="border px-4 py-2 mb-4" />
                <TextArea type="text" placeholder="Escribe una descripcion para el proveedor" textareaClassName="border px-4 py-2 mb-4" />
                <Button text="Guardar Usuario" type="submit" buttonClassName="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl"/>
            </Form>
        </div>
    )
}

export default CrearProveedor