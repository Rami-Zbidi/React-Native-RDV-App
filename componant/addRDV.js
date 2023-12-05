import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';

export default function AddRDV (){

    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [hour, setHour] = useState('');

    const resetFields = () =>
    {
        setDate('');
        setTitle('');
        setContent('');
        setHour('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Add an appointment</Text>

            <View>
                <Text style={styles.label}>Date</Text>
                <View style={styles.inputArea}>
                <Icon name="event" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <TextInput
                    placeholder="Enter the date of the appointment"
                    onChangeText={(text) => setDate(text)}
                    value={date}/>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Title</Text>
                <View style={styles.inputArea}>
                <Icon name="text-fields" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <TextInput
                    placeholder="Enter the title of the appointment"
                    onChangeText={(text) => setTitle(text)}
                    value={title}/>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Content</Text>
                <View style={styles.inputArea}>
                <Icon name="format-align-left" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <TextInput
                    placeholder="Enter the content of the appointment"
                    onChangeText={(text) => setContent(text)}
                    value={content}/>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Hour</Text>
                <View style={styles.inputArea}>
                <Icon name="access-time" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <TextInput
                    placeholder="Enter the hour of the appointment"
                    onChangeText={(text) => setHour(text)}
                    value={hour}/>
                </View>
            </View>

            <View style={styles.button}>
                <Button
                color='#9955bb'
                title="Add"/>

                <Button
                color='#9955bb'
                onPress={resetFields}
                title="Reset"/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        marginLeft: 20,
        marginRight: 20,
    },
    header:
    {
        fontSize: 30,
        fontWeight: '900',
        textAlign: 'center',
        marginBottom: 30,
    },
    label:
    {
        color: '#7e7e7e',
    },
    inputArea:
    {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#e1e1e1',
        padding: 10,
        marginBottom: 20,
    },
    button:
    {
        justifyContent: 'space-around',
        flexDirection: 'row',
    }
})