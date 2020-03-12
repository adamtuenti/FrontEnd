import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView,FlatList, TouchableHighlight,Image, TextInput,Alert,TouchableOpacity } from 'react-native';
import { Input, Button } from 'react-native-elements';
import Form from 'react-bootstrap/Form'


import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component{


    constructor(props){

        
        super(props);
        this.state = {
          username : '',
          password : '',
          loading: false,
          pacientes: [],
          url: 'https://pokeapi.co/api/v2/pokemon/'
        }
        /*super(props)
            this.timestamp =1;
            this.public_key="36700780168bdcf1bb2901333a59575a";
            this.private_key="55323dc109f7cc180247ef518c2155dd51aca969";
            this.state={
                loaded: false,
                marvel: [],
                url: 'http://gateway.marvel.com:80/v1/public/characters'
            }*/
               /* dataSource: new FlatList.Da({
                    rowHasChanged: (row1,row2)=>row1!=row2
                }),
                loaded: false*/


                /*<Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
        
        
        <TextInput
                    
                    placeholder='Clave'
                    onChangeText={
                        password => this.setState({password})
                    }
                    class="form-control"
                    autoCapitalize="none"
                    placeholderTextColor='blue'
            //onChangeText={val => this.onChangeText('username', val)}

             //onPress={() => this.props.navigation.navigate('Registro')}
                />*/
            
    }



    myfun=()=>{
        const{username,password}=this.state;
        alert(username);
    }
    
    componentDidMount(){
    this.getPacientes();
    }

    getPacientes = () => {
        this.setState({loading:true})
        fetch(this.state.url)
        .then(res=>res.json())
        .then(res=>{ 
            console.log(res.pacientes);
            this.setState({
            pacientes: res.results,
            url: res.next,
            loading: false,    
            })
        })
    }

    render() {
        return ( 
            <SafeAreaView >
                <View style = {styles.container}>

                

                <Image
                        style={{width: 175, height: 250}}
                        source={{uri: 'https://github.com/adamtuenti/FrontEnd/blob/master/Solinal-Front/Recurso%201.png?raw=true'}}
                        />


                
                
            
                <Input
                    style={styles.default}
                    placeholder='Usuario'
                    onChangeText={username=>this.setState({username})}
                    leftIcon={
                        <Icon
                        name='user'
                        size={24}
                        color='black'
                        />
                    }
                    />

                    <TextInput
                    style={{height: 45,width:  150,borderColor: "gray",borderWidth: 2, alignItems:'center'}}
                    secureTextEntry={true}
                    placeholder='Clave'
                    onChangeText={
                        password => this.setState({password})
                    }
                    leftIcon={
                        <Icon
                        name='key'
                        size={24}
                        color='black'
                        />
                    }
                    />

                

                <TouchableHighlight
         style={styles.botonLogin}onPress={this.onPress}>
         <Text style={{fontWeight: 'bold',color:'white'}}> Touch Here </Text>
        </TouchableHighlight>

                </View>

                
                    
                <View style = {styles.abajo}>
                    

                    

                    <Button
                        title="Crear cuenta"
                        type="clear"
                        onPress={this.myfun}
                        />

                

                <Button style={{backgroundColor: 'white'}}
                    icon={
                        <Icon
                        name="google"
                        size={15}
                        color="blue"
                        />
                    }
                    iconLeft
                    title="Sign with Google"
                    />

                




                    
                </View>
            </SafeAreaView>
            )
        }

    

    
    

    

   

   
}


export default Login;

const IconButton = (props) => {
    return (
            <TouchableOpacity style={{ 
                width: 50, 
                height: 50, 
                borderRadius: 25,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'#000000',
                marginHorizontal: 6,
                }}>
                <Icon 
                name={props.icono} 
                size={38} 
                color="#ffffff" />
            </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
      
      
      
      
      alignItems: 'center',
      justifyContent: 'center',
    
      marginTop: "70%",
      margin:10
    },
    botonLogin:{
        alignItems: 'center',
    backgroundColor: '#35E119',
    padding: 10,
   

    },
    default:{
        backgroundColor:'blue'
    },
    abajo: {
      
      
      
      
        
alignItems: 'center',


      justifyContent: 'center',
        
        
      
    },
    contentContainer:{
        backgroundColor: '#98FF7A',
        borderColor: '#fff',
        borderRadius: 18,
            padding: 9,
            marginVertical:9,
            flexDirection: "row",
            alignItems: 'center',
            width:'100%'
    }
  });
