import { Form } from "@remix-run/react"
import PrimaryTitle from "~/myComponents/PrimaryTitle"
import Input from "~/myComponents/Input"
import Button from "~/myComponents/Button"
import ComboBox from "~/myComponents/ComboBox"

import { FaCircleInfo } from "react-icons/fa6";

import type { ActionFunction } from "@remix-run/node";
import { crearUsuario } from '../../data-access/user-service';
import Tooltip from "~/myComponents/ToolTip"
import LinkTo from "~/myComponents/LinkTo"

const comboOptions = ["Administrador", "Cajero", "Lider", "Ayudante"];

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const nombreUsuario = formData.get("nombreUsuario");
    const nombrePersona = formData.get("nombrePersona");
    const apellidoPaterno = formData.get("apellidoPaterno");
    const apellidoMaterno = formData.get("apellidoMaterno");
    const email = formData.get("email");
    const password = formData.get("contraseña");
    const direccion = formData.get("direccion");
    const telefono = formData.get("telefono");
    const rol = formData.get("opciones");

    if (!nombreUsuario) throw new Error("")
    if (!nombrePersona) throw new Error("")
    if (!apellidoPaterno) throw new Error("")
    if (!apellidoMaterno) throw new Error("")
    if (!email) throw new Error("")
    if (!password) throw new Error("")
    if (!direccion) throw new Error("")
    if (!telefono) throw new Error("")
    if (!rol) throw new Error("")

    const nuevoUsuario = await crearUsuario({
        nombreUsuario: nombreUsuario as string,
        nombrePersona: nombrePersona as string,
        apellidoPaterno: apellidoPaterno as string,
        apellidoMaterno: apellidoMaterno as string,
        email: email as string,
        password: password as string,
        direccion: direccion as string,
        telefono: telefono as string,
        rol: rol as string
    });
    console.log("Data del user: ", nuevoUsuario)

    return null;

}

const CrearUsuario = () => {
    return (
        <div className="bg-[#F7F7F7] p-4 rounded-md w-11/12 my-5">
            <PrimaryTitle text="Crear Usuario" />
            <Form method="post" className="flex flex-col p-9">
                <div className="relative flex items-center">
                    <Input name="nombreUsuario" type="text" placeholder="Escribe el nombre de usuario" inputClassName="border px-4 py-2 mb-4 w-full" />
                    <Tooltip text="Aqui debes ingresar el nombre de usuario que identificara a la persona, es diferente al nombre real">
                        <FaCircleInfo className="absolute right-0 cursor-pointer text-blue-500 hover:opacity-75 mr-4" />
                    </Tooltip>
                </div>

                <Input name="nombrePersona" type="text" placeholder="Escribe el nombre de la persona" inputClassName="border px-4 py-2 mb-4" />
                <Input name="apellidoPaterno" type="text" placeholder="Escribe el apellido paterno" inputClassName="border px-4 py-2 mb-4" />
                <Input name="apellidoMaterno" type="text" placeholder="Escribe el apellido materno" inputClassName="border px-4 py-2 mb-4" />
                <Input name="email" type="email" placeholder="Escribe el correo electronico" inputClassName="border px-4 py-2 mb-4" />
                <Input name="contraseña" type="password" placeholder="Escribe el contraseña" inputClassName="border px-4 py-2 mb-4" />
                <Input type="password" placeholder="Confirme el contraseña" inputClassName="border px-4 py-2 mb-4" />
                <Input name="direccion" type="text" placeholder="Escribe la direccion" inputClassName="border px-4 py-2 mb-4" />
                <Input name="telefono" type="text" placeholder="Escribe el numero de telefono" inputClassName="border px-4 py-2 mb-4" />
                <ComboBox
                    comboClassName="border px-4 py-2 mb-4"
                    name="opciones"
                >
                    {comboOptions && comboOptions.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </ComboBox>
                <div className="flex flex-row space-x-5">
                    <Button text="Guardar Usuario" type="submit" buttonClassName="bg-[#3e90cc] rounded-md mt-3 mb-2 p-1 text-white text-center w-40 hover:shadow-xl" />
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

export default CrearUsuario