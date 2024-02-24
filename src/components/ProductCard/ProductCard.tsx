import { Image, Text, View, TouchableWithoutFeedback } from "react-native";
import { ProductDto } from "../../api/Product/product.dto";
import styles from "./ProductCard.style"
import Config from "react-native-config";



type ProductCardProps = {
    onPress: () => void;
    product: ProductDto;
};

const ProductCard = ({onPress,product}: ProductCardProps) =>{
    return(
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container} >
                <Image style={styles.image} source={{uri: product.image}}></Image>
                <View style={styles.body_container}>
                    <Text style={styles.title}>{product.title}{Config.BASE_URL}</Text>
                    <Text style={styles.price}>{product.price}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>

    );
}

export default ProductCard;