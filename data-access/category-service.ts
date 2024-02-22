import prisma from "./prisma-config";

export const crearCategoria = async (data: {
    nombreCategoria: string;
    descriptionCategoria: string;
    productos?: { nombreProducto: string; precioProducto: string }[]; // Nuevos productos asociados a la categoría
}) => {
    try {
        const nuevaCategoria = await prisma.categorias.create({
            data: {
                nombre: data.nombreCategoria,
                descripcion: data.descriptionCategoria,
                productos: {
                    create: data.productos // Asociar productos a la categoría
                }
            },
            include: {
                productos: true // Incluir la información de los productos creados junto con la categoría
            }
        });

        return nuevaCategoria;
    } catch (error) {
        console.error("Error al crear la categoría:", error);
        throw error;
    }
};

