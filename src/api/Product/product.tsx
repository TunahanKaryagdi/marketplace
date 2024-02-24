import axios from "axios";
import { ProductDto } from "./product.dto";
import { Constants } from "../../constants";



export const getProductList = async () : Promise<ProductDto[] | null> =>{
    try {
        const response = await axios.get(Constants.BASE_URL);
        const productsData : any[] = response.data;
        const products: ProductDto[] = productsData.map((product: any) => {
            return new ProductDto(
                product.id,
                product.price,
                product.title,
                product.category,
                product.description,
                product.image
            );
        });
        return products;
    } catch (error) {
        return null;
    }
}



export const getProduct = async (id: number) : Promise<ProductDto | null> =>{
    try {
        const response = await axios.get(`${Constants.BASE_URL}/${id}`);
        const productData = response.data;
        const product: ProductDto = new ProductDto(
            productData.id,
            productData.price,
            productData.title,
            productData.category,
            productData.description,
            productData.image
        );
        return product;
    } catch (error) {
        return null;
    }
}


