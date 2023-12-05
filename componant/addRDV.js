import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { styles } from '../styles/styles';

export default function AddRDV ()
{

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
        <ScrollView automaticallyAdjustKeyboardInsets={true}>
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
        </ScrollView>
    )
}
