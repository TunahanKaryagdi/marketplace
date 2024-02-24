

import {  SafeAreaView,FlatList, Text,  } from "react-native";
import React, { useEffect, useState } from "react";
import { getProductList } from "../../api/Product/product"; 
import { ProductDto } from "../../api/Product/product.dto";
import ProductCard from "../../components/ProductCard/ProductCard";


const ProductScreen = () =>{

    const[products,setProducts] = useState<ProductDto[]>();
    const[error,setError] = useState("");
    const[loading,setLoading] = useState(false);



    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async () => {
        setLoading(true);
        const productList : ProductDto[]  | null = await getProductList();
        productList != null ? setProducts(productList) : setError("an error occured");            
        setLoading(false);
    }

    const renderItem = ({ item }: { item: ProductDto }) => (
        <ProductCard
            onPress={() => console.log("tıklandı")} 
            product={item}
        />
    );

    return (
        <SafeAreaView>
            {loading ? <Text>Loading</Text> : <></>}
            {error.length!=0 ? <Text>{error}</Text> : <></>}
            <FlatList
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()} 
            />
        </SafeAreaView>
    );
}


export default ProductScreen;