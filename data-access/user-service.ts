import prisma from "./prisma-config";

export const crearUsuario = async (data: {
  nombreUsuario: string;
  nombrePersona: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  email: string;
  password: string;
  direccion: string;
  telefono: string;
  rol: string;
}) => {
  return prisma.usuarios.create({
    data: {
      nombreUsuario: data.nombreUsuario,
      nombrePersona: data.nombrePersona,
      apellidoPaterno: data.apellidoPaterno,
      apellidoMaterno: data.apellidoMaterno,
      email: data.email,
      contrasena: data.password,
      direccion: data.direccion,
      telefono: data.telefono,
      rol: data.rol,
    },
  });
};
