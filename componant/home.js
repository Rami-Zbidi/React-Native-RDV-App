import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function Login ({navigation}) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View style={styles.container} >

            <Text style={styles.header}>Login</Text>

            <View>
                <Text style={styles.label}>Email</Text>
                <View style={styles.inputArea}>
                <Icon name="email" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <TextInput
                    placeholder="Enter your email"
                    onChangeText={(text) => setEmail(text)}
                    value={email}/>
                </View>
            </View>

            <View>
                <Text style={styles.label}>Password</Text>
                <View style={styles.inputArea}>
                <Icon name="lock" size={20} color="#7e7e7e" style={{ marginRight: 10 }} />
                    <TextInput
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => setPassword(text)}
                    value={password}/>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.toggleButton}>
                        <Icon name={showPassword ? 'visibility-off' : 'visibility'} size={20} color="#7e7e7e" style={{marginLeft: 150,}} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Button
                color='#9955bb'
                onPress={() => navigation.navigate("AddRDV") }
                title="Login"/>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:
    {
        marginLeft: 20,
        marginRight: 20,
    },
    header:
    {
        fontSize: 35,
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
})