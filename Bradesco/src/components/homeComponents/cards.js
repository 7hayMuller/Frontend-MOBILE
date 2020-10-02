import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import CardIcon from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Cards = () => {
    return(
        <View style={styles.container}>

            <View style={styles.card}>
                <Ionicons name='repeat-outline' color={'#F31D5D'} size={40}/>
                <Text style={styles.text}>Transferências</Text>
            </View>

            <View style={styles.card}>
                <Icon name='barcode-scan'color={'#F31D5D'} size={40}/>
                <Text style={styles.text}>Pagamentos</Text>
            </View>

            <View style={styles.card} >
                <CardIcon name='credit-card' color={'#F31D5D'} size={40}/>
                <Text style={styles.text}>Cartões</Text>
            </View>

            <View style={styles.card}>
                <Ionicons name='car-sport-outline' color={'#F31D5D'} size={40}/>
                <Text style={styles.text}>Consórcio</Text>                           
            </View>

            <View style={styles.card}>
                <Icon name='currency-usd-circle' color={'#F31D5D'} size={40}/>
                <Text style={styles.text}>Empréstimos/Consignados</Text>
            </View>
                                
            <View style={styles.card}>
                <Icon name='chart-bell-curve-cumulative' color={'#F31D5D'} size={40}/>
                <Text style={styles.text}>Investimentos</Text>
            </View>

        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: -100,
        paddingHorizontal: 15,
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
    },
    card: {
        flexDirection: 'column',
        padding: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        width: "48%",
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginBottom: '4%',
        borderColor:'#DCDCDC',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 5,         
        backgroundColor:'white',
    },
    text: {
        fontSize: 15,
    }

})

export default Cards;