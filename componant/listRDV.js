import { View, Button, FlatList, } from "react-native";
import { styles } from "../styles/styles";
import AppointmentItem from "./appointmentItem";

export default function ListRDV ({ navigation, DATA })
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
            <FlatList
            data={DATA}
            renderItem={({item}) =>
                <AppointmentItem appointment={item.appointment}/>
            }
            />
        </View>
    );
}