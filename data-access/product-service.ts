import prisma from "./prisma-config";

export const crearProducto = async (data: {
  codigoBarras: string;
  nombreProducto: string;
  precioProducto: string;
  costoProducto: string;
  cantidadProducto: string;
  categoria: string;
  descripcionProducto: string;
}) => {

  return prisma.productos.create({
    data: {
      categoria: {
        connect: {
          id: data.categoria
        },
      },
      codigoBarras: data.codigoBarras,
      nombre: data.nombreProducto,
      precio: data.precioProducto,
      costo: data.costoProducto,
      stock: data.cantidadProducto,
      descripcion: data.descripcionProducto,
    },
  });
};
