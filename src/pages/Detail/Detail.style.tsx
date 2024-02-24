import { StyleSheet , Dimensions} from "react-native";


const deviceSize = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        
    },
    image: {
        height: deviceSize.height * (1/3),
        resizeMode: "contain",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    desc: {
        fontSize: 18,
    },
    price: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "right"
    }
});

export default styles;