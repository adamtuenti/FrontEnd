import React, { Component } from 'react';
import { View } from 'react-native';
import Input from './src/Input';
import LinearGradient from 'react-native-linear-gradient';
import {
    container
} from '../config/styles';
 
class Registro extends Component{
 
    constructor(props){
        super(props);
        this.state = {
            firstName : '',
            lastName  : '',
            email       : '',
            password  : '' 
        }
    }
 
    render(){
        return (
            <LinearGradient
                colors={['#441E35','#320622']}
                style={container}>
                <Input
                    placeholder="Nombre(s)"
                    onChangeText={(firstName) => this.setState({firstName})}
                    value={this.state.firstName}
                    />
                <Input
                    placeholder="Apellido(s)"
                    onChangeText={(lastName) => this.setState({lastName})}
                    value={this.state.lastName}
                    />
                <Input
                    placeholder="Apellido(s)"
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <Input
                    secureTextEntry={true}
                    placeholder="Contraseña"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
            </LinearGradient>
        );
    }
}
 
export default Registro;