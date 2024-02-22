
interface TableProps {
    data: string | any[];
    tableClassName?: string;
    thClassName?: string;
    trClassName?: string;
    tdClassName?: string;
}

const rowsForUser = {
    id: 'ID',
    nombreUsuario: 'Usuario',
    nombrePersona: 'Nombre',
    apellidoPaterno: 'Apellido Paterno',
    apellidoMaterno: 'Apellido Materno',
    correo: 'Correo',
    contrasena: 'Contrasena',
    direccion: 'Direccion',
    telefono: 'Telefono',
    rol: 'Rol',
}

const TableUsuario = ({ data, tableClassName, thClassName, trClassName, tdClassName }: TableProps) => {
    return (
        <table className={tableClassName || "w-full overflow-x-auto"}>
            <thead className={thClassName || "bg-gray-800 text-white"}>
                <tr>
                    <th>{rowsForUser.id}</th>
                    <th>{rowsForUser.nombreUsuario}</th>
                    <th>{rowsForUser.nombrePersona}</th>
                    <th>{rowsForUser.apellidoPaterno}</th>
                    <th>{rowsForUser.apellidoMaterno}</th>
                    <th>{rowsForUser.correo}</th>
                    <th>{rowsForUser.contrasena}</th>
                    <th>{rowsForUser.direccion}</th>
                    <th>{rowsForUser.telefono}</th>
                    <th>{rowsForUser.rol}</th>
                </tr>
            </thead>
            <tbody>
                {data && data.map((usuario: any) => ( // Asegúrate de que el tipo de usuario sea correcto
                    <tr key={usuario.id} className={trClassName || 'bg-gray-200'}>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.id}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.nombreUsuario}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.nombrePersona}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.apellidoPaterno}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.apellidoMaterno}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.email}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.contrasena}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.direccion}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.telefono}</td>
                        <td className={tdClassName || 'border px-4 py-2'}>{usuario.rol}</td>
                    </tr>
                ))}
                {!data && (
                    <tr className={trClassName || 'bg-gray-200'}>
                        <td colSpan={Object.keys(rowsForUser).length} className={tdClassName || 'border px-4 py-2'}>
                            Any data
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};

export default TableUsuario;