import { StyleSheet } from "react-native";

const StyleButton = StyleSheet.create({
    common: {
        width: 200,
        height: 50,
        borderRadius: 20,
        justifyContent: "center",
        textAlign: "center",
        color: "#fff",
        fontSize: 20,
        backgroundColor: "#139892",
        hover: {
            backgroundColor: "#0f7a6f",
        }
    },
    add : {
        backgroundColor: "#139892",
        borderRadius: 20
    },
});


export default StyleButton;