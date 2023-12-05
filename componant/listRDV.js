import { View, Button, } from "react-native";
import { styles } from "../styles/styles";

export default function ListRDV ({ navigation })
{
    const addRDV = () =>
    {
        navigation.navigate("AddRDV");
    }
    return (
        <View style={styles.container}>
            <Button
            color='#9955bb'
            onPress={ addRDV }
            title="Add an appointment"
            />
        </View>
    );
}