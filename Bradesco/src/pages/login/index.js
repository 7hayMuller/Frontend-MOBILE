/* eslint-disable */

import * as React from 'react';
import {View, StyleSheet, TextInput, Text, Picker, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Arrow from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Login = ({navigation}) => {
    return (
    <View style={styles.container}>
       <View style={styles.header}>
           <Arrow  style={styles.arrow} name='arrow-left' size={25} />
           <Text style={styles.headerText}>Acesso à Conta</Text>
           
       </View>
        <View style={styles.inputField}>
            <Text style={styles.inputText}> Agência </Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.inputText}> Conta e digíto sem hífen </Text>
            <TextInput style={styles.textInput}/>
            <Text style={styles.inputText}>Titularidade</Text>
        <View style={styles.pickerBox}>
            <Picker style={styles.pickerItem}>
                <Picker.Item label="1° Titular" value="1° Titular"/>
                <Picker.Item label="2° Titular" value="2° Titular"/>
                <Picker.Item label="3° Titular" value="3° Titular"/>
            </Picker>
         </View>
            <Text style={styles.inputText}>Senha de 4 digítos</Text>
            <TextInput style={styles.textInput}/>
        </View>        
            <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.btnText}>Acessar <Icon style={styles.iconBtn} name='chevron-right' /></Text> 
            </TouchableHighlight>       
       
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor:'#DBDBDB'
    },

    header: {
        flexDirection: "row",        
        padding: 10,
        backgroundColor:'#F31D5D'

    },
    arrow: {
        color:'white',
        paddingRight: 25

    },
    headerText: {
        color: 'white',
        fontWeight:'bold',
        marginTop:4

    },
    
    inputText: {
        marginBottom:5,
        marginTop:5,
        color:'#666'
    },

    pickerBox: {
        backgroundColor: "#DCDCDC",
        width: "70%",
        height: 35,
        borderStyle:'solid',
        borderWidth:0.5,
        borderTopColor:'#A9A9A9',
        borderTopWidth:0.8,
        borderColor:'#DCDCDC',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        
                
    },

    pickerItem: {
        color:'#666',
        flex:.9    
        
       
     },

    inputField:{
        marginTop: 20,
        marginLeft: 20
    },
    textInput: {
        backgroundColor: "#DCDCDC",
        width: "60%",
        height: 35,
        borderStyle:'solid',
        borderWidth:0.5,
        borderTopColor:'#A9A9A9',
        borderTopWidth:0.8,
        borderColor:'#DCDCDC',
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
	    width: 0,
	    height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
        
                
    },

    btn: {
        width:'30%',      
        marginLeft:'60%',
        marginTop:'20%',           
        borderRadius:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,
        backgroundColor:'#718A91'
        
        
    },
    iconBtn: {
        color:'#F31D5D',
    },

    btnText: {
        padding:8,
        textAlign:'center',
        color:'#FFFF'
    }
})

export default Login;