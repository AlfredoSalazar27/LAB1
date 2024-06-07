import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Product } from '../entity/product';

class ProductController {
    static getProducts = async (req: Request, res: Response): Promise<Response> => {
        try {
            const productRepository = AppDataSource.getRepository(Product);
            const products = await productRepository.find();
            console.log('Productos obtenidos correctamente:', products);
            return res.status(200).json(products);
        } catch (error) {
            console.error('Error al obtener productos:', error);
            return res.status(500).json({ message: 'Error al obtener productos', error: error.message });
        }
    }

    static postProduct = async (req: Request, res: Response): Promise<Response> => {
        try {
            const productRepository = AppDataSource.getRepository(Product);
            const product = productRepository.create(req.body);
            console.log('Datos del producto recibidos:', req.body);
            const result = await productRepository.save(product);
            console.log('Producto guardado correctamente:', result);
            return res.status(200).json(result);
        } catch (error) {
            console.error('Error al guardar producto:', error);
            return res.status(500).json({ message: 'Error al guardar producto', error: error.message });
        }
    }
}

export default ProductController;