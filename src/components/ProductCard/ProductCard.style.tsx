import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container: {
        backgroundColor: "grey",
        flexDirection: "row",
        borderWidth: 1,
        margin: 7,
        flex: 1,
    },
    image: {
        width: 75,
        height: 75
    },
    body_container: {
        padding: 5,
        flex: 1,
        justifyContent: "space-between"
    },
    title: {
        fontSize: 14,
        fontWeight: "bold",
    },
    price: {
        fontSize: 12,
        fontWeight: "bold",
        textAlign: "right"
    }
})

export default styles;