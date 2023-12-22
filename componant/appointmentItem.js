import { View, Text, } from "react-native";
import { styles } from "../styles/styles";
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function AppointmentItem ({item})
{
    return (
        <View style={styles.listItem}>

            <View style={styles.listTimestamp}>
                <View style={{flexDirection: 'row',}}>
                    <Icon name="event" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <Text>
                        {item.appointment.date}
                    </Text>
                </View>
                <View style={{flexDirection: 'row',}}>
                    <Icon name="access-time" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <Text>
                        {item.appointment.time}
                    </Text>
                </View>
            </View>

            <View style={styles.listItemBody}>
                <Text>
                    {item.id}
                </Text>
                <Text>
                    {item.appointment.title}
                </Text>
                <Text>
                    {item.appointment.content}
                </Text>
            </View>

        </View>
    );
}