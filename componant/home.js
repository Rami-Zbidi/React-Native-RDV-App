import { View, Text, TextInput, Button, TouchableOpacity, } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../styles/styles';

// This page will serve as the login page
export default function Login ({navigation})
{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+.[a-zA-Z]+$/;
    const [email, setEmail] = useState('');
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordInvalid, setPasswordInvalid] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // We will implement the input control once the user clicks on the Login button
    const loginOP = () =>
    {
        // If the email doesn't matche the regular expression, we will display an error message
        if (!email.match(validRegex))
        {
            setEmailInvalid(true);
            return
        }
        else setEmailInvalid(false)

        // If the password is less than 5 characters long, we will display an error message
        if (password.length < 5)
        {
            setPasswordInvalid(true)
            return
        }
        else setPasswordInvalid(false)

        // Reinitializing the values once the login is successful
        setEmail('');
        setPassword('');
        setEmailInvalid(false);
        setPasswordInvalid(false);
        navigation.navigate("ListRDV");
    }

    return (
        <View style={styles.container} >

            <Text style={styles.header}>Login</Text>

            <View>
                {emailInvalid && <Text style={styles.errorMsg} >Wrong Email</Text>}
                {passwordInvalid && <Text style={styles.errorMsg} >The password should be longer than 5 characters</Text>}
            </View>

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
                    style={styles.text}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    onChangeText={(text) => setPassword(text)}
                    value={password}/>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.toggleButton}>
                        <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={20} color="#7e7e7e" style={{marginLeft: 10, }} />
                    </TouchableOpacity>
                </View>
            </View>

            <View>
                <Button
                color='#9955bb'
                onPress={ loginOP }
                title="Login"/>
            </View>
        </View>
    );
}
