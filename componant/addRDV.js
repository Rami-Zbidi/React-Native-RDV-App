import { View, Text, TextInput, Button, ScrollView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { styles } from '../styles/styles';

// On this page the user will enter the data about the appointment
export default function AddRDV ({ navigation, addAppointment })
{
    const validtimeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
    const validDateRegex = /^(31\/(01|03|05|07|08|10|12)\/\d{4}|(0[1-9]|1[0-9]|2[0-8])\/(0[1-9]|1[0-2])\/\d{4}|29\/02\/\d{4}([02468][048]|[13579][26])|(0[1-9]|1[0-9]|2[0-9])\/(0[13-9]|1[0-2])\/\d{4}|30\/(01|03|04|05|06|07|08|09|10|11|12)\/\d{4})$/;
    const [date, setDate] = useState('');
    const [dateInvalid, setDateInvalid] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [time, settime] = useState('');
    const [timeInvalid, settimeInvalid] = useState(false);

    const resetFields = () =>
    {
        setDate('');
        setTitle('');
        setContent('');
        settime('');
        settimeInvalid(false);
        setDateInvalid(false);
    }

    const addItem = () =>
    {
        if (!date.match(validDateRegex))
        {
            setDateInvalid(true);
            return
        }

        if (!time.match(validtimeRegex))
        {
            settimeInvalid(true);
            return
        }

        // TODO: adding a new appointment
        addAppointment({
            id: Date.now(),
            appointment: {
                date,
                title,
                content,
                time,
            },
        });

        resetFields();
        navigation.goBack();
    }

    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
            <View style={styles.container}>
                <Text style={styles.header}>Add an appointment</Text>

                {/*The error messages view*/}
                <View>
                    {timeInvalid && <Text style={styles.errorMsg} >Correct the entered time</Text>}
                    {dateInvalid && <Text style={styles.errorMsg} >Correct the entered date</Text>}
                </View>

                {/*The date input field*/}
                <View>
                    <Text style={styles.label}>Date</Text>
                    <View style={styles.inputArea}>
                        <Icon name="event" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                        <TextInput
                        placeholder="Enter the date as dd/mm/yyyy"
                        onChangeText={(text) => setDate(text)}
                        value={date}/>
                    </View>
                </View>

                {/*The title input field*/}
                <View>
                    <Text style={styles.label}>Title</Text>
                    <View style={styles.inputArea}>
                        <Icon name="text-fields" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                        <TextInput
                        placeholder="Enter the title"
                        onChangeText={(text) => setTitle(text)}
                        value={title}/>
                    </View>
                </View>

                {/*The content input field*/}
                <View>
                    <Text style={styles.label}>Content</Text>
                    <View style={styles.inputArea}>
                        <Icon name="format-align-left" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                        <TextInput
                        placeholder="Enter the content"
                        onChangeText={(text) => setContent(text)}
                        value={content}/>
                    </View>
                </View>

                {/*The time input field*/}
                <View>
                    <Text style={styles.label}>time</Text>
                    <View style={styles.inputArea}>
                        <Icon name="access-time" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                        <TextInput
                        placeholder="Enter the time as 00:00"
                        onChangeText={(text) => settime(text)}
                        value={time}/>
                    </View>
                </View>

                {/*The buttons view*/}
                <View style={styles.button}>
                    <Button
                    color='#9955bb'
                    onPress={addItem}
                    title="Add"/>

                    <Button
                    color='#9955bb'
                    onPress={resetFields}
                    title="Reset"/>
                </View>
                
            </View>
        </ScrollView>
    )
}
