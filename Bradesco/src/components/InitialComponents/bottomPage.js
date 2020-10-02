/* eslint-disable */
import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Message from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomPage = () => {
  return (
    <View style={styles.container}>
        <View style={styles.card}>
            <Icon style={styles.btn} name='lock' size={30} color={"white"}/>
            <Text style={styles.text}> {`Chave de \n Segurança`} </Text>
        </View >
        <View style={styles.cardCenter}>
            <Message style={styles.btn} name='message-processing-outline' size={30} color={"white"}/>
            <Text style={styles.text}> {`BIA`} </Text>      
        </View>
        <View style={styles.card}>
            <Icon style={styles.btn} name='phone' size={30} color={"white"}/>
            <Text style={styles.text}> {`SAC \n Ouvidoria`} </Text>    
        </View>
    </View>
    
  );
} 

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-evenly",
        marginTop:'25%'
        
    },
    card:{
        paddingHorizontal: 20,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',       

    },
    cardCenter:{
        borderStyle: 'solid',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 35,
        paddingVertical: 10,
        alignContent: 'center',
        justifyContent: 'center' 
    },
    text:{
        color: 'white',
        textAlign: 'center',
        marginTop: '10%'
    }
    
});

export default BottomPage;
  