import React from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

export default class Signup extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            values: {
                name: '',
                username: '',
                password: ''
            },
            errors: {},
            isSubmitting: false
            
        }

        this.handleTextChange = this.handleTextChange.bind(this);

        
    }

    onSubmit() {
        console.log('Form Submitted');
    }

    handleTextChange(key, value) {
        this.setState(state => ({
            values: {
                ...state.values,
                [key]: value

            }
        }))

        
    }
    


    render() {
        const {values: {name, username, password}} = this.state;


        return (
            <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ width: 200 }}>
                    <TextInput onChangeText={(text) => this.handleTextChange('name', text)} value={name} style={styles.field} placeholder="name"/>
                    <TextInput onChangeText={(text) => this.handleTextChange('username', text)}value={username} style={styles.field} placeholder="email"/>
                    <TextInput onChangeText={(text) => this.handleTextChange('password', text)}value={password} style={styles.field} placeholder="password"/>
                    <Button  style={styles.button} color="purple" title="Sign Up" onPress={this.onSubmit}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    field: {
        borderBottomWidth: 1,
        fontSize: 20,
        marginBottom: 15
    },
    button: {
        backgroundColor: '#000000',
        height: 50,
        width: 150
    }
})


