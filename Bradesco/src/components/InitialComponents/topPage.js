/* eslint-disable */

import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import {StyleSheet, View, Image} from 'react-native';
import logo from '../../assets/logo.png';

const TopPage = () => {
    return (
        <View>
            <View style={styles.header}>     
                <Icon style={styles.btn} name='menu' size={18} />         
                <Icon style={styles.btn} name='bell' size={18} />              
            </View>
            <Image source={logo} style={styles.img}/>
        </View>
      );
} 

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10
    },
    btn: {
        color: 'white'
    },
    img: {
        marginLeft: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',
        resizeMode: 'center',
        width: 150,
        padding: 10
    }

});

export default TopPage;
  
    
 