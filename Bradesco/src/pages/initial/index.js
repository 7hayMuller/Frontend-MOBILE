/* eslint-disable */

import * as React from 'react';
import {View, StyleSheet,TouchableHighlight,Text} from 'react-native';
import TopPage from '../../components/InitialComponents/topPage';
import BottomPage from '../../components/InitialComponents/bottomPage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Initial= ({navigation}) => { 
       return(
          
    <View style={styles.container}>
        <TopPage/>  
    <View>
        <Text style={styles.accountName}> Thayná Müller </Text>
        <Text style={styles.accontInfo}> Ag 0000     C/C 0535338-1 </Text>
        <TouchableHighlight style={styles.btn} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.btnText}>acessar conta</Text>
        </TouchableHighlight>
    </View>
        <BottomPage />        
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: 10,
        paddingLeft: 10,
        height: '100%',
        backgroundColor: "#F31D5D",
    },
    accountName: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: "25%",
        paddingBottom: 10
      },
      accontInfo: {
        color: 'white',
        marginBottom: "40%"
      },
      btn: {
        color: '#F31D5D',
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 60,
        height:60,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "20%"
      },
      btnText: {
          color:"#F31D5D",
          fontWeight:'bold',
          fontSize: 15
    
      }
    }
)

export default Initial;