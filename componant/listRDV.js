import { View, Button, FlatList, } from "react-native";
import { styles } from "../styles/styles";
import AppointmentItem from "./appointmentItem";

export default function ListRDV ({ navigation })
{
    const DATA =[
        {
            id: 1,
            appointment: {
                date: '01/01/2001',
                title: 'meeting',
                content: 'something',
                time: '01:01',
            },
        },
        {
            id: 2,
            appointment: {
                date: '01/01/2001',
                title: 'meeting',
                content: 'something',
                time: '01:01',
            },
        },
    ];

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