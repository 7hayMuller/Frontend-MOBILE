import * as React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
import IconSimpleLine from 'react-native-vector-icons/SimpleLineIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import Cards from '../../components/homeComponents/cards';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


const Home = () => {
    return(     
        <View style={styles.container}>  
            <View style={styles.top}>
                <View style={styles.header}>
                    <IconSimpleLine name='menu' style={styles.menuIcon} size={18} />
                        <Text style={styles.menuText}>bradesco</Text>
                </View>

                <View style={styles.account}>
                    <IconFeather style={styles.iconAccount} name='user' size={25} />
                        <Text style={styles.welcome}>Olá,Thayná</Text>
                    <IconIonicons style={styles.iconAccount} name='exit-outline' size={25} />
                </View>

                <View style={styles.accountInfo}> 
                    <Text style={styles.text}>Meu saldo disponível</Text>
                    <View style={styles.moneyInfo}>
                        <Text style={styles.money}>R$  10000000,00</Text>             
                        <IconFeather style={styles.viewIcon} name='eye' size={20} />
                        <Text style={styles.viewMoney}>Ver extrato</Text>
                        <IconFeather style={styles.chevronIcon} name='chevron-right' size={20} />
                    </View>
                </View>

                <View style={styles.searchBar}>
                    <TextInput style={styles.textInput} type='search' placeholder='Fale com a BIA'/>
                    <View style={styles.searchIcon}>
                        <IconIonicons name='search' size={25} color={'#F31D5D'}/>
                    </View>
                    <View style={styles.microphoneIcon}>
                        <IconSimpleLine  name='microphone' size={25} color={"white"}/>
                    </View>
                </View>
            </View>
                 <Cards/>                                              
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },

    top:{
        width: '100%',
        height: '40%'
    },

    header: {
        flexDirection: "row",                
        padding: 10,
        backgroundColor:'#F31D5D',
    },

    menuIcon: {
        color:'white',
        marginRight:"8%",
        marginTop:4

    },  

    menuText: {
        fontSize:25,
        color: 'white',
        fontWeight:'bold'
    },

    account: {
        backgroundColor:'#F31D5D',
        flexDirection:'row',
        paddingHorizontal:15,  
        paddingVertical:10,
             
    },

    welcome: {
        color:'white',         
        borderBottomWidth:0.5,
        borderBottomColor:'white',
        paddingHorizontal:20,
        paddingRight:'55%',        
       
    },

    iconAccount: {
        paddingVertical:3,
        color:'white'

    },

    accountInfo: {
        backgroundColor:'#F31D5D',
    },
    
    moneyInfo: {
        flexDirection:'row'
    },

    text: {
        color:'white',
        paddingLeft:15,
        marginTop:18,
        marginBottom:10

    },

    money: {
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        paddingLeft:15

    },

    viewIcon: {
        color:'white',
        marginLeft:10

    },

    viewMoney: {
        paddingRight:15,
        marginLeft:'15%',
        marginBottom:40,        
        color:'white',        
        borderBottomColor:'white',
        borderBottomWidth:0.5
        
    },

    chevronIcon: {
        color:'white'

    },

    searchBar:{
        height: 60,
        marginHorizontal: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        zIndex: 100,
        marginTop:-15,
        borderColor:'#DCDCDC',
        borderRadius:7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,         
        backgroundColor:'white'
    },

    textInput: {
        height: '100%',
        width: '70%',  
        backgroundColor: 'white',
        borderTopColor:'#A9A9A9',
        borderColor:'#DCDCDC',
        borderRadius:7,
        padding: 20
    },

    searchIcon: {
        width: '15%',
        color:'#F31D5D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    microphoneIcon:{
        width: '15%',
        backgroundColor:'#F31D5D',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
    },
})

export default Home;