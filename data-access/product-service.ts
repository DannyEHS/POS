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
          id: data.categoria,
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

export const actualizarProducto = async (data: {
  id: string;
  codigoBarras: string;
  nombreProducto: string;
  precioProducto: string;
  costoProducto: string;
  cantidadProducto: string;
  categoria: string;
  descripcionProducto: string;
}) => {
  return prisma.productos.update({
    where: { id: data.id },
    data: {
      codigoBarras: data.codigoBarras,
      nombre: data.nombreProducto,
      precio: data.precioProducto,
      costo: data.costoProducto,
      stock: data.cantidadProducto,
      descripcion: data.descripcionProducto,
      categoria: {
        connect: {
          id: data.categoria,
        },
      },
    },
  });
};

export const eliminarProducto = async (id: string) => {
  return prisma.productos.delete({
    where: { id },
  });
};
