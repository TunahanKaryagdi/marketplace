import React, { useEffect, useState } from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import styles from "./Detail.style";
import { getProduct, getProductList } from "../../api/Product/product";
import { ProductDto } from "../../api/Product/product.dto";

const DetailScreen = () =>{

    const[product,setProducts] = useState<ProductDto | null>(null);
    const[error,setError] = useState("");
    const[loading,setLoading] = useState(false);

    useEffect(()=>{
        getProductFromApi();
    },[])

    const getProductFromApi = async () => {
        setLoading(true);
        const product : ProductDto  | null = await getProduct(1);
        product != null ? setProducts(product) : setError("an error occured");            
        setLoading(false);
    }

    return(
        <>
            {loading ? <Text>Loading</Text> : <></>}
            {error.length!=0 ? <Text>{error}</Text> : <></>}
            {product != null  ?  
            <View style={styles.container}>
                <Image style={styles.image } source={{uri: product?.image}}/>
                <Text style={styles.title}>{product?.title}</Text>
                <Text style={styles.desc}>{product?.description}</Text>
                <Text style={styles.price}>{product?.price}</Text>
            </View> :
         <></>
          }

        </>

    );
}

export default DetailScreen;