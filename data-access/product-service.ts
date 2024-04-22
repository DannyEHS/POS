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
  try {
    const nuevoProducto = await prisma.productos.create({
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
    return nuevoProducto;
  } catch (error) {
    throw new Error(`Error al crear el producto: ${error}`);
  }
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
  try {
    const productoActualizado = await prisma.productos.update({
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
    return productoActualizado;
  } catch (error) {
    throw new Error(`Error al actualizar el producto: ${error}`);
  }
};

export const eliminarProducto = async (id: string) => {
  try {
    const data = await prisma.productos.delete({
      where: {
        id,
      },
    });
    return data;
  } catch (error) {
    throw new Error(`Error al eliminar el producto: ${error}`);
  }
};

export const encontrarProductoPorCodigoBarras = async (
  codigoBarras: string
) => {
  try {
    const producto = await prisma.productos.findFirst({
      where: {
        codigoBarras,
      },
    });
    return producto;
  } catch (error) {
    throw new Error(
      `Error al encontrar el producto por el código de barras: ${error}`
    );
  }
};
